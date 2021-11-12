'use strict';

{
  // Intersection Observer API

  const targets = document.querySelectorAll('.animate');

  function callback(entries, obs) {

    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);

    });
  }

  const options = {
    thrashold: 0.2,
    rootMargin: '0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });

}
