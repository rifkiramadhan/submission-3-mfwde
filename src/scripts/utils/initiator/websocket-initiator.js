import WebsocketNotif from './websocket-notif';

let webSocketActive = null;

const WebSocketInitiator = {
  init(url) {
    webSocketActive = new WebSocket(url);
    console.log('Web socket connected to => ', webSocketActive.url);
    webSocketActive.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('Web socket on message handler => ', message);

    const reviewInputPost = JSON.parse(message.data);

    WebsocketNotif.sendNotification({
      title: reviewInputPost.name,
      options: {
        body: reviewInputPost.review,
        icon: 'icon/icon-192x192.png',
        image: 'https://i.ibb.co/88Rwk4Z/download.png',
        vibrate: [100, 100, 100],
      },
    });
  },
};

const sendDataToWebsocket = (reviewInputPost) => {
  const data = JSON.stringify(reviewInputPost);
  webSocketActive.send(data);
};

export { WebSocketInitiator, sendDataToWebsocket };
