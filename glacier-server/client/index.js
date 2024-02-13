"use strict";

// /**
//  * @type {HTMLFormElement}
//  */
// const form = document.getElementById("uv-form");
// /**
//  * @type {HTMLInputElement}
//  */
// const address = document.getElementById("uv-address");
// /**
//  * @type {HTMLInputElement}
//  */
// const searchEngine = document.getElementById("uv-search-engine");
// /**
//  * @type {HTMLParagraphElement}
//  */
// const error = document.getElementById("uv-error");
// /**
//  * @type {HTMLPreElement}
//  */
// const errorCode = document.getElementById("uv-error-code");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   try {
//     await registerSW();
//   } catch (err) {
//     error.textContent = "Failed to register service worker.";
//     errorCode.textContent = err.toString();
//     throw err;
//   }

//   const url = search(address.value, searchEngine.value);
//   location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
// });

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