# Random Quotes OOP with API
Welcome to the Random Quotes app! 
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in Development Mode
### Run server
1.Navigate to the root directory of the project.
1. Open new terminal window.
Change directory to the server subfolder: cd server
Install server dependencies by running the following command: npm install
Run server in the development mode with hot reload feature: npm run dev
Server will be running at the http://localhost:3000
Run client
Open new terminal window in the root of the project
Run client in the development mode with hot reload: npx live-server client
Client will be running at the http://localhost:8080
Running the App in Production Mode
Run server
Navigate to the root directory of the project.
Open new terminal window.
Change directory to the server subfolder: cd server
Install server dependencies by running the following command: npm install
Run server in the production mode: npm start
Configure hosting server where you run application to forward all requests to the http://localhost:3000
Get assigned by the hosting provider URL for your backend API server. For example https://random-quotes-api.com
Run client
There is no need to build the client as it already contains HTML, CSS and JS files
In the client/config.js replace http://localhost:3000 with URL assigned to the server API in the step 7. in the previous section. For example https://random-quotes-api.com Note: You could make this change directly on the hosting server or in the project source files (less preferrable)
Host all client files from the client subfolder on the public web server
Get assigned by the hosting provider URL for you client frontend application. For example https://random-quotes-frontend.com
Open https://random-quotes-frontend.com in the web browser
