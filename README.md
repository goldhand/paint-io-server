# paint-io-server
Paint app server for the websockets workshop

## Getting Started
```
$ npm install
$ npm start
```

## Workshop
⭐️ this github repository because it will help the needy.

ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2

One team member should clone [`paint-io-client`] and the other should clone [`paint-io-server`].

```
$ git clone https://github.com/goldhand/paint-io-client.git
```
or
```
$ git clone https://github.com/goldhand/paint-io-server.git
```

Inline instructions can be found in the `src/socket.js`. Each task is marked by as `TODO x.x [description]`.
You should not need to make any changes outside of the `src/socket.js`.

### What's my network ip?
```
$ ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2
```

## Steps (with goals)
1. Make the paint application collaborative using socket.io
  * Dispatch events to the Socket server
  * Receive events from the socket server
2. Maintain a list of active users
  * Sync data across multiple clients
  * Use an acknowledgement in the emit call
3. Open private chat with a single user
  * Send messages to single target

## Optional
* Demonstrate usefulness of client / server node architecture with flow type
* Creating chat rooms
* Scaling horizontally
* At amazon


[`paint-io-client`]: https://github.com/goldhand/paint-io-client
[`paint-io-server`]: https://github.com/goldhand/paint-io-server
