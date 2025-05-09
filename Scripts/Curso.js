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
