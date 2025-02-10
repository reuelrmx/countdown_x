    const targetDate = new Date("2025-08-25T08:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days > 0 ? days : 0;
      document.getElementById("hours").innerText = hours > 0 ? hours : 0;
      document.getElementById("minutes").innerText = minutes > 0 ? minutes : 0;
      document.getElementById("seconds").innerText = seconds > 0 ? seconds : 0;
    }

    function toggleTheme() {
      document.body.classList.toggle("light-theme");
    }

    setInterval(updateCountdown, 1000);
