<script>
  document.addEventListener("DOMContentLoaded", function() {
    const setUsername = () => {
      const username = prompt("Please enter your username:");
      if (username) {
        document.getElementById("username").textContent = username;
      }
    };

    document.getElementById("set-goal").addEventListener("click", setUsername);

    // Additional JavaScript for progress animation
    const progress = document.querySelector(".progress");
    let currentProgress = 60; // Example progress
    let targetProgress = 80; // Set a target progress (you can change this value)

    const updateProgress = () => {
      if (currentProgress < targetProgress) {
        currentProgress++;
        progress.style.width = currentProgress + "%";
        requestAnimationFrame(updateProgress);
      }
    };

    // Start the progress animation when the page loads
    updateProgress();
  });
</script>