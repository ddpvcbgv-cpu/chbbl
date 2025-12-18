<script>
  import { goto } from '$app/navigation';
  import { getContext } from 'svelte';

  const audioControl = getContext('audioControl');

  function startTest() {
    audioControl.play();
    goto('/quiz');
  }
</script>

<div class="content fade-in">
  <h1 class="title">뮤지컬 <span class="blue-bold">빨래</span><br/>애정도 테스트</h1>
  
  <div class="description">
    <p>“이 테스트는 정답을 맞히는 시험이 아니라,<br/>
    <span class="blue-bold">빨래</span>가 당신에게 어떤 장면으로 남아 있는지를 묻습니다.”</p>
    
    <p class="guide">
      맞힌 개수는 중요하지 않습니다.<br/>
      <span class="blue-bold">빨래</span>를 다시 한 번 떠올리며 띄우게 될 당신의 미소가 더 중요합니다.
    </p>
  </div>

  <button class="cta-button" onclick={startTest}>
    테스트 시작하기
  </button>
</div>

<style>
  .content {
    text-align: center;
    margin: auto 0;
  }
  .title {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
    line-height: 1.3;
    letter-spacing: -0.5px;
    color: #111;
  }
  .blue-bold {
    color: #007aff;
    font-weight: 700;
  }
  .description {
    margin-bottom: 4rem;
    color: #444;
    font-size: 1.1rem;
  }
  .guide {
    margin-top: 2rem;
    font-size: 0.95rem;
    color: #888;
    line-height: 1.8;
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
    transition: all 0.2s ease;
  }
  .cta-button:active {
    transform: scale(0.98);
    background: #000;
  }
  .fade-in {
    animation: fadeIn 1.2s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
