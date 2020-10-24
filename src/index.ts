const pickButton = document.getElementById("pick");

const pickOneFromCandidate = (candidates: string[]) => {
  return candidates[Math.floor(Math.random() * 100) % candidates.length];
};

const runRoulette = (): void => {
  const candidateArea = <HTMLTextAreaElement>(
    document.getElementById("candidate-area")
  ); // TODO: Check the problem of type casting. e.g. null possibility
  const candidates: string[] = candidateArea.value.split(/\r\n|\n/);
  const resultArea = document.getElementById("result-area");
  if (!resultArea) {
    return;
  }
  resultArea.innerHTML = pickOneFromCandidate(candidates);
};

pickButton!.addEventListener("click", runRoulette); // TODO: Remove null suppression
