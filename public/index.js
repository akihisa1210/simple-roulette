const pickButton = document.getElementById("pick");

const pickOneFromCandidate = (candidates) => {
  return candidates[0];
};

pickButton.addEventListener("click", () => {
  const candidates = [];
  candidates.push(document.getElementById("candidate-area").value);
  const resultArea = document.getElementById("result-area");
  resultArea.innerHTML = pickOneFromCandidate(candidates);
});
