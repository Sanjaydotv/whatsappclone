import Pusher from 'pusher'

const pusher = new Pusher({
    appId: "1657689",
    key: "b556c889973ddf6c9da1",
    secret: "5887cbca347ed1c5a576",
    cluster: "ap2",
    useTLS: true
  });

export default pusher