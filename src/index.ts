import { pickOneFromCandidate } from "src/roulette";

const runRoulette = (): void => {
  const candidateArea = document.getElementById("candidate-area");
  if (!(candidateArea instanceof HTMLTextAreaElement)) {
    throw new Error("pick is not an HTMLTextAreaElement");
  }
  const candidates: string[] = candidateArea.value.split(/\r\n|\n/);
  const resultArea = document.getElementById("result-area");
  if (!(resultArea instanceof HTMLDivElement)) {
    throw new Error("pick is not an HTMLDivElement");
  }
  resultArea.innerHTML = pickOneFromCandidate(candidates);
};

const pickButton = document.getElementById("pick");

if (!(pickButton instanceof HTMLButtonElement)) {
  throw new Error("pick is not an HTMLButtonElement");
}

pickButton.addEventListener("click", runRoulette);
