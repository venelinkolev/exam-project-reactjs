# Recipes App Documentation

# Table of Contents

<a name="introduction">Introduction</a>
Installation
Running the Application
Server Configuration
Accessing the App
Sample Data
User Authentication
API Endpoints

1. Introduction
   Recipes is a React-based web application designed for sharing cooking recipes. The app utilizes a REST API for server communication, and the data is stored in a MongoDB database.

2. Installation<a name="installation"></a>
   After cloning the project from GitHub, navigate to the project directory and install the dependencies for both the project and the REST API by running the following commands:

bash
Copy code

# Install project dependencies

npm install

# Install REST API dependencies

cd server
npm install 3. Running the Application<a name="running-the-application"></a>
Start the server by running the following command in the project root directory:

bash
Copy code

# Start the server

node server/index.js
To run the React app, execute the following command:

bash
Copy code

# Start the React app

npm start 4. Server Configuration<a name="server-configuration"></a>
The server is configured to listen on port 3000. Ensure that this port is available and not in use by other applications. If needed, you can modify the port in the server/index.js file.

5. Accessing the App<a name="accessing-the-app"></a>
   Once the server and the React app are running, access the Recipes app locally by navigating to http://localhost:5173/ in your web browser.

6. Sample Data<a name="sample-data"></a>
   The project includes sample data for testing. Two user accounts are available:

User: venelinkolev@abv.bg
Password: 111111

User: atanaska@abv.bg
Password: 111111

Feel free to use these credentials to explore the app and its features.

7. User Authentication<a name="user-authentication"></a>
   The app includes user authentication for securing access to certain features. Use the provided sample user accounts to log in and explore the app's functionalities.

8. API Endpoints<a name="api-endpoints"></a>
   The REST API provides various endpoints for managing recipes, users, and other functionalities. Refer to the API documentation for detailed information on available endpoints and their usage. The API documentation can usually be found in the server directory or by accessing the API documentation URL provided by the server.

For any additional information or support, feel free to reach out to the project maintainers.
