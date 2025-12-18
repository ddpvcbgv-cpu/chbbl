<script>
  import { audioState } from "$lib/stores/quizStore";
  import { page } from "$app/stores";
  import { onDestroy, setContext } from "svelte";

  let { children } = $props();
// ... (중략) ...
  onDestroy(() => {
    if (fadeInterval) clearInterval(fadeInterval);
  });
</script>

<svelte:head>
  <!-- 기본 메타 정보 -->
  <title>뮤지컬 〈빨래〉 애정도 테스트</title>
  <meta name="description" content="맞힌 개수는 중요하지 않습니다. 빨래를 다시 떠올리며 당신이 짓게 될 미소가 더 중요합니다." />

  <!-- Open Graph / Facebook / KakaoTalk -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chbbl.vercel.app" />
  <meta property="og:title" content="뮤지컬 〈빨래〉 애정도 테스트" />
  <meta property="og:description" content="맞힌 개수는 중요하지 않습니다. 빨래를 다시 떠올리며 당신이 짓게 될 미소가 더 중요합니다." />
  <meta property="og:image" content="https://chbbl.vercel.app/og-image.png" />
  <meta property="og:site_name" content="뮤지컬 〈빨래〉 애정도 테스트" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://chbbl.vercel.app" />
  <meta property="twitter:title" content="뮤지컬 〈빨래〉 애정도 테스트" />
  <meta property="twitter:description" content="맞힌 개수는 중요하지 않습니다. 빨래를 다시 떠올리며 당신이 짓게 될 미소가 더 중요합니다." />
  <meta property="twitter:image" content="https://chbbl.vercel.app/og-image.png" />
</svelte:head>

<audio bind:this={audio} src="/audio/bgm.mp3" loop></audio>

<div class="audio-control">
  <button 
    onclick={() => audioState.update(s => ({ isPlaying: !s.isPlaying }))}
    aria-label="음악 제어"
  >
    {#if $audioState.isPlaying}
      🔊
    {:else}
      🔇
    {/if}
  </button>
</div>

<main class="app-container">
  {@render children()}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, sans-serif;
    /* 포스터 배경 설정 */
    background-image: url('/images/poster_bg.png');
    background-size: cover;
    background-position: center bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: #333;
    line-height: 1.6;
    word-break: keep-all;
  }

  .app-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* 배경이 보이면서도 글자가 잘 보이도록 반투명 처리 */
    background-color: rgba(255, 255, 255, 0.88);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
  }

  .audio-control {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
  }

  .audio-control button {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #eee;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
</style>
