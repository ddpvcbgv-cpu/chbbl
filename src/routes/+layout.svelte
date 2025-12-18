<script>
  import { audioState } from "$lib/stores/quizStore";
  import { page } from "$app/stores";
  import { onDestroy, setContext } from "svelte";

  let { children } = $props();

  let audio;
  let fadeInterval;

  function fadeIn() {
    if (!audio) return;
    audio.volume = 0;
    audio.play().catch(e => console.log("Audio play prevented:", e));
    
    fadeInterval = setInterval(() => {
      if (audio.volume < 0.25) {
        audio.volume = Math.min(audio.volume + 0.01, 0.3);
      } else {
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  // 상위에서 오디오를 직접 제어할 수 있도록 함수 제공
  setContext('audioControl', {
    play: () => {
      audioState.set({ isPlaying: true });
      if (audio && audio.paused) fadeIn();
    },
    pause: () => {
      audioState.set({ isPlaying: false });
      if (audio && !audio.paused) audio.pause();
    }
  });

  // 오디오 재생 상태가 true이면 페이드인 시작
  $effect(() => {
    if ($audioState.isPlaying) {
      if (audio && audio.paused) {
        fadeIn();
      }
    } else {
      if (audio && !audio.paused) {
        audio.pause();
      }
    }
  });

  onDestroy(() => {
    if (fadeInterval) clearInterval(fadeInterval);
  });
</script>

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
