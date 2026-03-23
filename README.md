# Portfolio Project

This repository contains a professional full-stack portfolio designed for modern web standards. The project is built with a focus on performance, scalability, and aesthetic excellence, showcasing a collection of engineering highlights and personal projects.

## Project Architecture

The application is structured into two primary components to maintain a clean separation of concerns.

### Frontend Client
The client-side application is developed using React and Vite, utilizing Tailwind CSS for a refined and responsive user interface. It focuses on delivering a seamless user experience with high-fidelity animations and a premium design aesthetic.

### Backend Server
The server-side is powered by Node.js and Express, providing a robust API for dynamic content. It handles data interactions and contact form submissions with a clean and maintainable codebase.

## Local Development

To set up the project on your local machine, please follow the steps outlined below.

1.  **Repository Setup**
    Clone the repository and navigate to the project root directory.

2.  **Internal Dependency Installation**
    The project includes a root-level script to install dependencies for both the client and server simultaneously. Run the following command from the root folder:
    ```bash
    npm run install:all
    ```

3.  **Execution**
    Launch both the client and server in development mode using the following command:
    ```bash
    npm run dev
    ```

The client will typically be available at `http://localhost:5173`, and the server will run on `http://localhost:5001`.

## Deployment

This project is configured for optimal performance on Vercel. The included `vercel.json` file manages the routing for both the React frontend and the Express backend, ensuring that API requests are correctly handled by the serverless functions while static assets are served efficiently.

To deploy, simply connect your repository to the Vercel dashboard and follow the automated deployment process.
