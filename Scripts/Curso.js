document.addEventListener("DOMContentLoaded", function () {
  let lazyVideos = document.querySelectorAll("video.lazy");

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let video = entry.target;
        video.src = video.dataset.src;
        video.classList.remove("lazy");
        observer.unobserve(video);
      }
    });
  });

  lazyVideos.forEach(video => {
    observer.observe(video);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let video = document.querySelector("video");
  
  function checkPlayback() {
    if (video.currentTime >= 0.1) {
      video.currentTime = 0; // Reinicia de forma suave
      video.play();
    }
    requestAnimationFrame(checkPlayback);
  }

  video.play();
  requestAnimationFrame(checkPlayback);
});
