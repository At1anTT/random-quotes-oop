# Random Quotes OOP with API

Welcome to Random Quotes app!

# Running the App in Production mode

### Development mode

#### Run server

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running the following command:
   `npm install`
5. Run server in the production mode:
   `npm start`
6. Configure hosting server where you run application to forward all requests to the  http://localhost:3000
7. Take assigned by the hosting provider URL for your backend API server for example 

#### Run client

1. There is no need to build the client as it arleady contains HTML, CSS
2. Host all client files from the `client` subfolder on the publci web:
   `npx live-server client`
