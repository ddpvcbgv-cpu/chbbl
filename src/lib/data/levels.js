export const levels = [
  {
    minScore: 0,
    maxScore: 1,
    name: "귀여운 막내 서점직원, 마이클 레벨",
    image: "/images/characters/level_junior_michael_and_junior_staff.png",
    description: "아직은 모든 걸 다 알지 않아도 괜찮아요.\n빨래는\n처음 보는 사람에게도 가장 다정한 공연이니까요."
  },
  {
    minScore: 2,
    maxScore: 4,
    name: "듬직한 내편 슈퍼주인,구씨 레벨",
    image: "/images/characters/level_supporter_super_owner_and_gu.png",
    description: "누군가의 하루를\n말없이 지켜봐줄 줄 아는 사람.\n\n빨래 속에서\n가장 든든한 자리에 서 있는 관객입니다."
  },
  {
    minScore: 5,
    maxScore: 7,
    name: "사랑가득 힐링요정 희정엄마, 주인할매 레벨",
    image: "/images/characters/level_healing_heejung_mom_and_landlady.png",
    description: "삶의 무게를 아는 사람은\n위로하는 방법도 알고 있죠.\n\n당신은\n빨래가 가장 오래 머무는 사람입니다."
  },
  {
    minScore: 8,
    maxScore: 9,
    name: "지치지 않는 열정 솔롱고 나영 레벨",
    image: "/images/characters/level_passion_solongo_and_nayoung.png",
    description: "버티는 하루와\n다시 일어서는 마음을\n누구보다 잘 아는 사람.\n\n이 공연이 왜 계속 무대에 서 있는지\n알고 있는 관객입니다."
  },
  {
    minScore: 10,
    maxScore: 10,
    name: "빨래 마스터 레벨",
    image: "/images/characters/level_master_all_characters.png",
    description: "모든 인물이 인사합니다.\n\n당신은\n빨래의 이야기를\n한 번의 공연이 아니라\n하나의 삶으로 기억하는 사람입니다."
  }
];

/**
 * 점수에 따른 레벨 정보를 반환합니다.
 * @param {number} score - 맞힌 개수
 * @returns {object} 레벨 데이터 객체
 */
export function getLaundryLevel(score) {
  return levels.find(level => score >= level.minScore && score <= level.maxScore);
}
