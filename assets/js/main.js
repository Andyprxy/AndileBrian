"use strict";
const config = window.PORTFOLIO || {};
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
function closeMenu() { menu?.setAttribute('aria-expanded','false'); links?.classList.remove('is-open'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); links.classList.toggle('is-open',open); });
links?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e => { if(e.key === 'Escape') { closeMenu(); menu?.focus(); } });
document.addEventListener('click',e => { if(!e.target.closest('.nav')) closeMenu(); });
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('[data-github]').forEach(a => {
  if (typeof config.github === 'string' && /^https:\/\/github\.com\/[^/?#]+/.test(config.github)) {
    a.href = config.github; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label','View my GitHub profile'); a.title = 'GitHub';
  } else { a.title = 'Request my GitHub profile by email'; }
});
document.querySelectorAll('[data-video]').forEach(card => {
  const source = config.videos?.[card.dataset.video];
  if (!source) return;
  const stage = card.querySelector('.video-stage');
  const fallback = stage.innerHTML;
  const video = document.createElement('video');
  video.controls = true; video.playsInline = true; video.preload = 'metadata';
  video.setAttribute('aria-label',card.querySelector('h4').textContent);
  video.src = source;
  video.addEventListener('error', () => { stage.innerHTML = fallback; stage.querySelector('.video-state').textContent = 'Video coming soon'; });
  stage.replaceChildren(video);
});

// Missing gallery files retain a deliberate placeholder; uploaded photos appear automatically.
document.querySelectorAll('[data-photo]').forEach(card => {
  const img = card.querySelector('img');
  img.addEventListener('load', () => card.classList.add('has-photo'));
  img.addEventListener('error', () => card.classList.remove('has-photo'));
  img.src = card.dataset.photo;
});

const ribbonToggle = document.querySelector('.ribbon-toggle');
ribbonToggle?.addEventListener('click', () => {
  const paused = ribbonToggle.getAttribute('aria-pressed') !== 'true';
  ribbonToggle.setAttribute('aria-pressed', String(paused));
  ribbonToggle.textContent = paused ? 'Resume motion' : 'Pause motion';
  ribbonToggle.closest('.academic-transition').classList.toggle('is-paused', paused);
});
