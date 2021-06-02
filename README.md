# WebXR examples

These are examples of WebXR.

## Libraries and Frameworks

- https://ar-js-org.github.io/AR.js-Docs
- https://aframe.io/docs/1.2.0/introduction

### Setup

Uses an express.js server over HTTPS to run input and output devices via the browser including cameras, microphones and speakers.

First, create server.key and server.crt files.

```bash
$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./sslcert/server.key -out ./sslcert/server.crt
```

Then install express package and run.

```bash
$ npm install
$ npm run start
```

Open http://localhost:8080 or https://localhost:8443 to view.
