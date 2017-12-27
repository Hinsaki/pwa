if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => {
      // registration worked
      console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
      subscribeUser(reg);

      if ('Notification' in window) {
        console.log('Notification permission default status:', Notification.permission);
        Notification.requestPermission(function (status) {
          console.log('Notification permission status:', status);
          displayNotification();
        });
      }

      console.log('[Service Worker] register end');
    }).catch(error => {
      // registration failed
      console.log('[Service Worker] Registration failed with ' + error);
    });
}

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      const options = {
        icon: 'assets/images/android_048.png',
        body: '會議通知 12月27日(三)',
        image: 'http://www.koda.com.tw/images/header/item_logo.png',
        data: {
          link: 'http://www.koda.com.tw/',
          link_ok: 'https://cloud.teamplus.com.tw/Community/',
          link_ng: 'http://www.cheers.com.tw/article/article.action?id=5085356'
        },
        requireInteraction: true,
        actions: [{
            action: 'yes',
            title: '參加',
            icon: './assets/images/img_ok.png'
          },
          {
            action: 'no',
            title: '不參加',
            icon: './assets/images/img_ng.png'
          },
        ]
      };
      reg.showNotification('會議通知', options);
      console.log('displayNotification');
    });
  }
}


function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const applicationServerPublicKey = `BPkIUOIylNfWjC9MQ3_8oVx0MsaryiEaak1WyYWyqWp1-FuyQitttiMkdjvACkoEds94crwhyRIyVTyc2tVYICI`;

function subscribeUser(swRegistration) {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(subscription => {
      console.log('User is subscribed');
      console.log(JSON.stringify(subscription));
    })
    .catch(err => {
      console.log('Failed to subscribe the user: ', err);
    });
}
