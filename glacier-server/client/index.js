"use strict";

window.addEventListener('load', async (e)=>{
  if(window.localStorage.getItem('background')) {
    // set body.style.backgroundImage to window.localStorage.getItem('background')
    document.body.style.backgroundImage = `url("/windows/${window.localStorage.getItem('background')}")`;
  }else {
    // set to background1.jpg
    window.localStorage.setItem('background', 'wallpaper1.jpg');
  }
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }
})