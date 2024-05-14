# Stock Trade Project Setup

This repository contains a simple Node.js backend with a React frontend. Follow the steps below to set up and run the project locally.

## Prerequisites

- Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- Git installed on your machine. You can download it from [git-scm.com](https://git-scm.com/).

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/chiragsuthar/stock-trade-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd stock-trade-app
    ```

3. Install dependencies for both backend and frontend:

    ```bash
    # Install backend dependencies
    npm install

    # Install frontend dependencies
    cd ../client
    npm install
    ```

## Running the Project

1. Start the backend server:

    ```bash
    # Start the server
    npm start
    ```

    The server will run on `http://localhost:3000`.

2. Start the frontend:

    ```bash
    # Navigate to the frontend directory
    cd ../client

    # Start the React app
    npm start
    ```

    The React app will open in your default web browser at `http://localhost:3000`.

## Project Structure

- `stock-trade-app/`: Contains the Node.js backend code.
- `client/`: Contains the React frontend code.
- `README.md`: This file, providing instructions on setting up and running the project.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `package.json`: Metadata about the project, including dependencies and scripts.
- `LICENSE`: A license file for your project.

Feel free to modify the project structure and code to fit your needs.

Happy coding!
