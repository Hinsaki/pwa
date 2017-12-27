import * as webpush from 'web-push';

const vapidKeys = {
  publicKey: 'BPkIUOIylNfWjC9MQ3_8oVx0MsaryiEaak1WyYWyqWp1-FuyQitttiMkdjvACkoEds94crwhyRIyVTyc2tVYICI',
  privateKey: '5ZwdOLmdJEmdsYcp-ERUtmMg328EKq7jMGSAn3nSBgM'
};
const webPush = webpush;

webPush.setVapidDetails(
  'mailto:denhuang@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const options = {
  icon: 'assets/images/android_048.png',
  body: 'Angular 測試工作坊 9月23日(六)',
  image: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t31.0-8/21273134_10156585628499554_8520027102111869914_o.jpg?oh=9d7bcbc999c161f5ce778e361a4b9ea4&oe=5A47D9EE',
  data: {
    link: 'https://www.facebook.com/groups/augularjs.tw/',
    link_ok: 'https://www.facebook.com/events/188912961650574/?acontext=%7B%22ref%22%3A%224%22%2C%22feed_story_type%22%3A%22370%22%2C%22action_history%22%3A%22null%22%7D',
    link_ng: 'https://www.facebook.com/groups/angularstudygroup/'
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

const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/fwNbCkZtyr0:APA91bF-tttRSH0KBHuZ3lGehkd7kcNzWOfAVTKeXp4cYUURgq2bEkTkCtLQAvrzDZ7q_N7on0ved-Ss9SGLRYGm61D2rkmPe2R2EUnLn7s1y7Fwrjts2I-qM94SQINyJA4VBV5spTdy',
  expirationTime: null,
  keys: {
    p256dh: 'BEClFpLV0UV65m9wtmPxLVN6kIUTrALuRlUANPySm3eSXXArabumm4aziX4tPYefRtDaGpqL8SxwyyJlc9BvJzA=',
    auth: 'I4qBuGIBj1pUVbT4sQnHEg=='
  }
};

webPush.sendNotification(subscription, JSON.stringify(options));

