# API Authentication using NodeJs and JWT

This an authentication using JWT that you can plug inside your project.

## Technologies Used

- <img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" /> Node JS

- <img align="left" alt="MongoDB" width="32px" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png" /> MongoDB

- <img align="left" alt="Redis" width="26px" src="https://cdn.iconscout.com/icon/free/png-256/redis-83994.png" /> Redis

- <img align="left" alt="Redis" width="26px" src="https://www.spomky-labs.com/wp-content/uploads/2019/03/Screen-Shot-2018-10-11-at-1.40.06-PM.png" />JWT

## Installation

### Step 1: Clone the repo

```sh
$ git clone https://github.com/KanzariAmine/NodeJS-Authtification-JWT-.git
```

#### Step 2: Install the dependencies

```sh
$ npm install
```

Step 3: Put your credentials in the .env file

```sh
PORT= ADD_SERVER_PORT
MONGODB_URI = ADD_YOUR_MONGODB_URI
ACCESS_TOKEN_SECRET= GENERATE_YOUR_ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET = GENERATE_YOUR_REFRESH_TOKEN_SECRET
```
Step 4: Generate ACCESS_TOKEN_SECRET and  REFRESH_TOKEN_SECRET for JWT

```sh
$ node ./helpers/generate_keys.js
```
Step 5: Run Redis Server (Linux Ubuntu)

```sh
$ redis-server
```

Run app

```sh
$ npm start
```
