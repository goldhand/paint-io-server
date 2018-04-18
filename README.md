# paint-io-server
Paint app server for the websockets workshop

## Getting Started

### Local
```
$ npm install
$ npm run watch
```
### Apollo
```
bb watch
```

## Workshop
`*` this github repository because its nice to do.

One team member should fork [`paint-io-client`] and the other should fork [`paint-io-server`]. Then clone each others repositories into your *workspace* directory (replace *teammember* with the correct user alias).
```
$ git clone https://github.com/teammember1/paint-io-client.git
$ git clone https://github.com/teammember2/paint-io-server.git
```

If you are working alone, you can just clone both [`paint-io-client`] and [`paint-io-server`] into the same *workspace* directory.
```
$ git clone https://github.com/goldhand/paint-io-client.git
$ git clone https://github.com/goldhand/paint-io-server.git
```

After running these, your *workspace* directory should look like:
```
.
./paint-io-client/
./paint-io-server/
```
or
```
.
./NodeJS-paint-io-client/
./NodeJS-paint-io-server/
```

If you used brazil to pull the packages down, add a remote url pointing to your's and your teammate's github remote so that you can collaborate using your teammates fork.
Example adding a remote "teammemer1" pointing to my teammember's fork:
```
$ git remote add teammember1 https://github.com/teammember1/paint-io-client.git
```
Then you can pull your teammate's changes down:
```
$ git pull teammate1 mainline
```
Verify this by running:
```
$ git remote -v
```
And you should see something similar to:
```
origin	ssh://git.amazon.com/pkg/NodeJS-paint-io-server (fetch)
origin	ssh://git.amazon.com/pkg/NodeJS-paint-io-server (push)
teammate1	https://github.com/teammate1/paint-io-server (fetch)
teammate1	https://github.com/teammate1/paint-io-server (push)
```
Of course, replace "teammember1" with your teammate's github alias.


Install dependencies in each package (from within each package directory).
```
$ npm install
```
or
```
$ bb release
```

Run the server from within `./paint-io-server`
```
$ npm run watch
```
or
```
$ bb watch
```

Inline instructions can be found in the `src/socket.js`. Each task is marked by as `TODO x.x [description]`.
You should not need to make any changes outside of the `src/socket.js`.

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
