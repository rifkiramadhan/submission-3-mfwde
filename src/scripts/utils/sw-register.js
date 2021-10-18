import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const workBox = new Workbox('./sw.js');

    workBox.addEventListener('waiting', () => {
      console.log(
        "A new service worker has installed, but it can't activate until all tabs running the current version have fully unloaded.",
      );
    });

    workBox.addEventListener('activated', (event) => {
      // `event.isUpdate` will be true if another version of the service
      // worker was controlling the page when this version was registered.
      if (!event.isUpdate) {
        console.log('Service worker activated for the first time!');

        // If your service worker is configured to precache assets, those
        // assets should all be available now.
      }
    });

    // Register the service worker after event listeners have been added.
    workBox.register();
  }
};

export default swRegister;
