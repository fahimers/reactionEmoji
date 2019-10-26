import PubNub from 'pubnub';
import { createContext } from 'react';
import pubnubConifg from './pubnub.config';



export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';



class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubnubConifg);
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

  }
  addListener = listenerConifg => {
    this.pubnub.addListener(listenerConifg);
  }


  publish = message => {
    console.log('public message', message);
    this.pubnub.publish({ message, channel: MESSAGE_CHANNEL });
  }
}

export const PubSubContext = createContext();
export default PubSub;

/*
pubnub.addListener({
    message: messageObject => {
      console.log('messageObject', messageObject);
    }
  });


setTimeout(() => {
  pubnub.publish({
    message: 'foo',
    channel: MESSAGE_CHANNEL
  });
}, 1000); */