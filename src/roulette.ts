export const pickOneFromCandidate = (candidates: string[]) => {
  return candidates[Math.floor(Math.random() * 100) % candidates.length];
};
