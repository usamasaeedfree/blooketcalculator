document.getElementById("blooketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Input values
  const questions = parseInt(document.getElementById("questions").value);
  const correct = parseInt(document.getElementById("correct").value);
  const time = parseFloat(document.getElementById("time").value);
  const xp = parseInt(document.getElementById("xp").value);

  // Validate inputs
  if (
    isNaN(questions) ||
    isNaN(correct) ||
    isNaN(time) ||
    isNaN(xp) ||
    questions <= 0 ||
    correct < 0 ||
    time <= 0 ||
    xp < 0 ||
    correct > questions
  ) {
    alert("Please enter valid numbers. Correct answers cannot exceed total questions.");
    return;
  }

  // Calculations
  const winRate = ((correct / questions) * 100).toFixed(2);
  const xpPerMin = (xp / time).toFixed(2);
  let gameScore = "";

  const ratio = correct / questions;

  if (ratio >= 0.9) {
    gameScore = "🔥 Excellent";
  } else if (ratio >= 0.7) {
    gameScore = "👍 Good";
  } else if (ratio >= 0.5) {
    gameScore = "⚠️ Average";
  } else {
    gameScore = "❌ Needs Improvement";
  }

  // Display Results
  document.getElementById("winRate").textContent = winRate;
  document.getElementById("xpPerMin").textContent = xpPerMin;
  document.getElementById("gameScore").textContent = gameScore;
  document.getElementById("results").classList.remove("hidden");
});
