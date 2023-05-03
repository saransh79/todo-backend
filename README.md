# MERN TodoList App - Backend

This is the backend repository for the MERN TodoList app. The app has been developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and allows users to create, read, update, and delete their todos. The app also includes user authorization with email and password.

The frontend repository for this app can be found at https://github.com/saransh79/todo-frontend and the deployed version can be found at https://mern-todolist-app.netlify.app.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

The backend of this app has been developed using the following technologies:

- Node.js
- Express.js
- MongoDB

Firebase Authentication has been used for user authorization with email and password.

## Installation and Setup

1. Clone the repository.

```
git clone https://github.com/saransh79/todo-backend.git
```

2. Change the working directory to the project directory.

```
cd todo-backend
```

3. Install the dependencies.

```
npm install
```

4. Create a `.env` file in the root directory of the project and add the following lines to it:

```
PORT=5000
MONGO_URI=<your-mongodb-uri>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
```

5. Start the server.

```
npm run server
```

6. The app should now be running on `http://localhost:5000`.

## Usage

The backend provides RESTful APIs for the frontend to interact with the database. The following endpoints are available:

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `GET /todos/:id` - Get a specific todo by ID
- `PUT /todos/:id` - Update a specific todo by ID
- `DELETE /todos/:id` - Delete a specific todo by ID
- `POST /auth/signup` - Sign up a new user
- `POST /auth/signin` - Sign in an existing user

Firebase Authentication has been used for user authorization with email and password. The `POST /auth/signup` endpoint allows new users to sign up with their email and password, and the `POST /auth/signin` endpoint allows existing users to sign in with their email and password. The Firebase Authentication API has been used for user authentication.

## Contributing

Contributions are always welcome! If you find any issues with the app or want to suggest an improvement, please create a new issue or a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
