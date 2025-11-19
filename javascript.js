document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("goals-form");

  // If the page doesn't have the form, do nothing
  if (!form) {
    return;
  }

  var message = document.getElementById("message");
  var summary = document.getElementById("summary");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop refresh

    var name = document.getElementById("name").value.trim();
    var goal = document.getElementById("goal").value;
    var activityInput = document.querySelector("input[name='activity']:checked");
    var activity = activityInput ? activityInput.value : "";
    var emailUpdates = document.getElementById("email-updates").checked;

    // simple validation
    if (name === "" || goal === "" || activity === "") {
      message.textContent = "Please fill in your name, goal, and activity level.";
      message.style.color = "red";
      summary.textContent = "";
      return;
    }

    message.textContent = "Goal saved.";
    message.style.color = "green";

    var emailText = emailUpdates
      ? "You chose to receive email tips."
      : "You chose not to receive email tips.";

    // DOM manipulation (required)
    summary.innerHTML =
      "<p>Name: " + name + "</p>" +
      "<p>Goal: " + goal + "</p>" +
      "<p>Activity level: " + activity + "</p>" +
      "<p>" + emailText + "</p>";
  });
});