<script>
  import { audioState } from '$lib/stores/quizStore';
  import { goto } from '$app/navigation';

  function startResult() {
    audioState.set({ isPlaying: true });
    goto('/result');
  }
</script>

<div class="breath-content fade-in">
  <p class="pause-text">잠깐만요.</p>
  
  <div class="main-text">
    <p>문제를 푸는 동안<br/>
    가장 먼저 떠오른 장면 하나가 있었나요?</p>

    <p>정답은 중요하지 않아요.<br/>
    그 장면을 기억한 채,<br/>
    결과를 보러 가볼게요.</p>
  </div>

  <button class="cta-button" onclick={startResult}>
    결과 보기
  </button>
</div>

<style>
  .breath-content {
    text-align: center;
    margin: auto 0;
    line-height: 2.2;
  }
  .pause-text {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  .main-text {
    font-size: 1.15rem;
    color: #444;
    margin-bottom: 4rem;
  }
  .cta-button {
    width: 100%;
    padding: 1.3rem;
    background: #111;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cta-button:active {
    transform: scale(0.98);
  }
  .fade-in { animation: fadeIn 2.5s ease-in-out; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>

