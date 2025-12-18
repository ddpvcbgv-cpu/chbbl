<script>
  import { userAnswers, calculateScore } from '$lib/stores/quizStore';
  import { questions } from '$lib/data/questions';
  import { getLaundryLevel } from '$lib/data/levels';

  const { score, wrongQuestions } = calculateScore($userAnswers, questions);
  const level = getLaundryLevel(score);
  
  // '빨래' 단어 강조 (파란색 굵은 글씨)
  const highlightedDescription = level?.description.replace(/빨래/g, '<span class="blue-bold">빨래</span>');
  const highlightedLevelName = level?.name.replace(/빨래/g, '<span class="blue-bold">빨래</span>');

  // 틀린 문제의 상세 정보 추출
  const wrongDetails = wrongQuestions.map(num => questions[num - 1]);
</script>

<div class="result-container fade-in">
  <div class="score-section">
    <h2 class="score-title">총 10문항 중 <span class="highlight">{score}</span>개를 맞혔어요!</h2>
  </div>

  {#if level}
    <div class="level-section">
      <h3 class="level-name">{@html highlightedLevelName}</h3>
      <p class="level-description">{@html highlightedDescription}</p>
      <div class="level-image-container">
        <img src={level.image} alt={level.name} class="level-image" />
      </div>
    </div>
  {/if}

  {#if wrongQuestions.length > 0}
    <div class="wrong-review-section">
      <h3 class="review-title">다시 한 번 풀어볼까요?</h3>
      <div class="wrong-items">
        {#each wrongDetails as q}
          <div class="wrong-item">
            <span class="q-num">Q{q.id}</span>
            <span class="q-text">{q.question.split('\n')[0]}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <div class="message-section">
    <p>어떤 사람은 대사를 기억하고,<br/>
    어떤 사람은 노래를 기억하고,<br/>
    어떤 사람은 그날의 자기 마음을 기억합니다.</p>

    <p class="emphasize">그래서 <span class="blue-bold">빨래</span>는<br/>
    몇 문제를 맞혔는지보다<br/>
    무엇이 마음에 남았는지가 더 중요한 공연입니다.</p>
  </div>

  <div class="call-to-action">
    <p class="cta-text">맞힌 개수와 상관없이,<br/>
    오늘의 결과는<br/>
    <span class="blue-bold">빨래</span>를 다시 만날 이유가 됩니다.</p>
    
    <a href="https://tickets.interpark.com/goods/25012969" target="_blank" class="book-link">
      뮤지컬 빨래 예매하러 가기
    </a>

    <div class="sns-links">
      <a href="https://www.youtube.com/@musical_BBALLAE" target="_blank" class="sns-btn youtube">
        <span class="icon">🎬</span> 공식 유튜브
      </a>
      <a href="https://www.instagram.com/bballae_official/" target="_blank" class="sns-btn instagram">
        <span class="icon">📸</span> 공식 인스타그램
      </a>
    </div>
  </div>

  <button class="retry-btn" onclick={() => window.location.href = '/'}>
    테스트 다시 하기
  </button>
</div>

<style>
  .result-container { 
    text-align: center;
    padding-bottom: 3rem;
  }
  .score-section { 
    margin: 1rem 0; 
    padding: 1.5rem 0; 
    border-bottom: 1px solid #f0f0f0; 
  }
  .score-title {
    font-size: 1.8rem;
    font-weight: 800;
    color: #333;
    text-align: center;
    line-height: 1.3;
    word-break: keep-all;
  }
  .highlight { 
    color: #007aff; 
    font-size: 2.8rem; 
    font-weight: 900;
    margin: 0 0.2rem;
    vertical-align: baseline;
  }

  .level-section {
    margin-bottom: 2.5rem;
    padding: 0 1.5rem;
  }
  .level-name {
    font-size: 1.6rem;
    font-weight: 800;
    color: #111;
    margin-bottom: 1rem;
    word-break: keep-all;
  }
  .level-description {
    font-size: 1rem;
    line-height: 1.5;
    color: #444;
    white-space: pre-line;
    margin-bottom: 1.5rem;
    word-break: keep-all;
  }
  :global(.blue-bold) {
    color: #007aff;
    font-weight: 700;
  }
  .level-image-container {
    max-width: 320px;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
  .level-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .wrong-review-section {
    text-align: left;
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }
  .review-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }
  .wrong-items {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .wrong-item {
    padding: 0.8rem;
    background: #f9f9f9;
    border-radius: 8px;
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
    text-align: left;
  }
  .q-num {
    font-size: 0.85rem;
    font-weight: 800;
    color: #ff4b4b;
    flex-shrink: 0;
  }
  .q-text {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.4;
    word-break: keep-all;
  }
  
  .message-section { 
    margin-bottom: 3rem; 
    line-height: 1.8; 
    color: #444; 
    font-size: 1rem;
  }
  .emphasize {
    margin-top: 1.5rem;
    font-weight: 600;
    color: #111;
  }
  
  .call-to-action {
    padding: 2rem 1.5rem;
    background: #fdfdfd;
    border: 1px solid #f5f5f5;
    border-radius: 20px;
    margin-bottom: 1.5rem;
  }
  .cta-text {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #666;
    font-size: 0.95rem;
  }
  .book-link {
    display: inline-block;
    padding: 1rem 2rem;
    background: #ff4b4b;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.2s;
    box-shadow: 0 6px 15px rgba(255, 75, 75, 0.2);
  }
  .book-link:active {
    transform: scale(0.96);
  }

  .sns-links {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 1.2rem;
  }

  .sns-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.7rem;
    border-radius: 10px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.2s;
    border: 1px solid #eee;
    background: white;
    color: #555;
  }

  .sns-btn:active {
    transform: scale(0.98);
    background: #f9f9f9;
  }

  .sns-btn .icon {
    font-size: 1rem;
  }

  .retry-btn {
    background: #fff5f7;
    border: 2px solid #ffb1c1;
    color: #ff6b9d;
    padding: 0.7rem 1.8rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: all 0.2s ease;
    display: inline-block;
    box-shadow: 0 4px 10px rgba(255, 107, 157, 0.1);
  }

  .retry-btn:active {
    transform: scale(0.95);
    background: #ffe0e9;
  }

  .fade-in { animation: fadeIn 1.8s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>

