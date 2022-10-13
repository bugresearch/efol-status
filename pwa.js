
// Window Load Event
window.addEventListener('load', () => {
    registerWorker();
  });
  
  // Register Worker Function
  async function registerWorker() {
  if ('serviceWorker' in navigator) {
    try {
        await navigator
                .serviceWorker
                .register('pwaworker.js');
        }
    catch (e) {
        console.log('service worker not registered');
    }
  }
  }
