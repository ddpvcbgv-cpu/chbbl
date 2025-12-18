<script>
  import { questions } from '$lib/data/questions';
  import { userAnswers } from '$lib/stores/quizStore';
  import { goto } from '$app/navigation';

  function handleSelect(qIdx, optIdx) {
    userAnswers.update(ans => {
      ans[qIdx] = optIdx;
      return ans;
    });
  }

  let allAnswered = $derived($userAnswers.every(ans => ans !== null));
</script>

<div class="quiz-container">
  {#each questions as q, i}
    <section class="question-item">
      <h3 class="q-title">Q{i+1}. {q.question}</h3>
      {#if q.image}
        <div class="q-image-container">
          <img src={q.image} alt="문제 이미지" class="q-image" />
        </div>
      {/if}
      <div class="options">
        {#each q.options as opt, j}
          <button 
            class="option-btn" 
            class:selected={$userAnswers[i] === j}
            onclick={() => handleSelect(i, j)}
          >
            {opt}
          </button>
        {/each}
      </div>
    </section>
  {/each}

  <div class="footer-spacer"></div>

  <button 
    class="submit-btn" 
    disabled={!allAnswered}
    onclick={() => goto('/breath')}
  >
    모든 문제 풀기 완료
  </button>
</div>

<style>
  .quiz-container { padding-top: 1rem; }
  .question-item { margin-bottom: 4.5rem; }
  .q-title { 
    font-size: 1.2rem; 
    font-weight: 700;
    margin-bottom: 1.8rem; 
    white-space: pre-line; 
    line-height: 1.5;
  }
  
  .q-image-container {
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }

  .q-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .options { display: flex; flex-direction: column; gap: 0.9rem; }
  
  .option-btn {
    text-align: left;
    padding: 1.2rem;
    border: 1px solid #eee;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1rem;
    line-height: 1.4;
    color: #444;
  }
  
  .option-btn.selected {
    background: #111;
    border-color: #111;
    color: #fff;
    font-weight: 500;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  }

  .footer-spacer {
    height: 6rem;
  }

  .submit-btn {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 3rem);
    max-width: 552px;
    padding: 1.3rem;
    background: #111;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    z-index: 10;
  }
  
  .submit-btn:disabled {
    background: #ddd;
    color: #aaa;
    cursor: not-allowed;
    box-shadow: none;
  }

  .submit-btn:not(:disabled):active {
    transform: translateX(-50%) scale(0.98);
  }
</style>

