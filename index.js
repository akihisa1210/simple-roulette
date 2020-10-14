const pickButton = document.getElementById("pick");

const pickOneFromCandidate = (candidates) => {
  return candidates[Math.floor(Math.random() * 100) % candidates.length];
};

pickButton.addEventListener("click", () => {
  const candidates = document
    .getElementById("candidate-area")
    .value.split(/\r\n|\n/);
  const resultArea = document.getElementById("result-area");
  resultArea.innerHTML = pickOneFromCandidate(candidates);
});
