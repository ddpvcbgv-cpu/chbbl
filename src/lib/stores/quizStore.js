import { writable } from 'svelte/store';

// 사용자 답안 저장
export const userAnswers = writable(new Array(10).fill(null));

// 오디오 상태 관리
export const audioState = writable({
  isPlaying: false
});

// 점수 계산 유틸리티
export function calculateScore(answers, questions) {
  let score = 0;
  const wrongQuestions = [];
  
  answers.forEach((ans, idx) => {
    if (ans === questions[idx].correctIndex) {
      score++;
    } else {
      wrongQuestions.push(idx + 1);
    }
  });
  
  return { score, wrongQuestions };
}

