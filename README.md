# Task Manager MVP

A full-stack Task Management application demonstrating proficiency in TypeScript, React, Node.js, AWS, MongoDB, CI/CD, and best software engineering practices. This MVP aligns with the requirements for a Senior Backend Engineer role, showcasing skills in frontend and backend development, cloud services, database integration, Agile methodologies, and continuous integration/delivery.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application Locally](#running-the-application-locally)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Best Practices Demonstrated](#best-practices-demonstrated)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**Task Manager** is a web application that allows users to create, update, delete, and manage tasks. It features a responsive frontend built with React and Next.js, and a robust backend powered by Node.js and Express. The application leverages TypeScript for type safety, MongoDB for data persistence, and AWS for deployment. Continuous Integration and Continuous Deployment (CI/CD) are implemented using GitHub Actions, ensuring seamless and automated deployments.

## Tech Stack

- **Frontend:**
  - React
  - Next.js (for server-side rendering)
  - TypeScript
  - MobX (state management)
  - Axios (HTTP requests)

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - MongoDB (NoSQL database)
  - Mongoose (ODM)

- **DevOps:**
  - Docker & Docker Compose
  - AWS Elastic Beanstalk
  - GitHub Actions (CI/CD)

- **Other Tools:**
  - ESLint & Prettier (code quality)
  - Jest (testing)

## Features

- **Task Management:**
  - Create new tasks
  - Update task status (completed/incomplete)
  - Delete tasks
  - View all tasks

- **User Interface:**
  - Responsive design with React and Next.js
  - State management using MobX
  - Server-Side Rendering (SSR) for improved performance and SEO

- **Backend Services:**
  - RESTful API with Express
  - Data persistence with MongoDB
  - Secure and scalable architecture

- **DevOps:**
  - Containerization with Docker
  - Automated deployment to AWS Elastic Beanstalk
  - Continuous Integration and Deployment with GitHub Actions

## Project Structure

```
task-manager/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── stores/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   └── Dockerfile
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── docker-compose.yml
└── README.md
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v16 or later)
- **npm** (v6 or later)
- **Docker** & **Docker Compose**
- **AWS Account** (for deployment)
- **GitHub Account** (for CI/CD)

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### Setup Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript project:

   ```bash
   npm run build
   ```

4. Run the backend server in development mode:

   ```bash
   npm run dev
   ```

### Setup Frontend

1. Open a new terminal and navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the frontend development server:

   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
```

**Note:** Replace `your_mongodb_connection_string`, `your_aws_access_key`, and `your_aws_secret_key` with your actual credentials.

## Running the Application Locally

### Using Docker Compose

Ensure Docker and Docker Compose are installed on your machine.

1. Navigate to the root directory of the project:

   ```bash
   cd task-manager
   ```

2. Start all services using Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. Access the application:

   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Backend API:** [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks)
   - **MongoDB:** [http://localhost:27017](http://localhost:27017)

## Deployment

### AWS Elastic Beanstalk

The application is containerized using Docker, making it easy to deploy to AWS Elastic Beanstalk.

1. **Prepare AWS Elastic Beanstalk Environments:**
   - Create separate environments for the backend and frontend applications.
   - Follow the [AWS Elastic Beanstalk Docker deployment documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html) for detailed steps.

2. **Deploy Backend:**
   - Navigate to the `backend` directory.
   - Initialize Elastic Beanstalk and deploy using the provided `Dockerfile`.

3. **Deploy Frontend:**
   - Navigate to the `frontend` directory.
   - Initialize Elastic Beanstalk and deploy using the provided `Dockerfile`.

**Note:** Ensure that environment variables are correctly set in the Elastic Beanstalk configuration for both environments.

## CI/CD Pipeline

The project utilizes GitHub Actions to automate testing, building, and deployment processes.

### Workflow Configuration

Located at `.github/workflows/ci-cd.yml`, the workflow performs the following steps on every push to the `main` branch:

1. **Checkout Code:**
   - Uses `actions/checkout@v2` to clone the repository.

2. **Setup Node.js:**
   - Uses `actions/setup-node@v2` to set up the Node.js environment.

3. **Install Dependencies:**
   - Installs backend and frontend dependencies.

4. **Run Tests:**
   - Executes tests for both backend and frontend.

5. **Build and Push Docker Images:**
   - Builds Docker images for backend and frontend.
   - Pushes the images to Docker Hub.

6. **Deploy to AWS Elastic Beanstalk:**
   - Uses `einaregilsson/beanstalk-deploy@v20` to deploy the latest version to Elastic Beanstalk.

### GitHub Secrets

Ensure the following secrets are configured in your GitHub repository settings:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

These secrets are used for authenticating with AWS and Docker Hub during the CI/CD process.

## Best Practices Demonstrated

- **TypeScript:** Ensures type safety and better maintainability across both frontend and backend.
- **React with Next.js:** Utilizes server-side rendering for improved performance and SEO.
- **MobX:** Implements efficient state management for predictable state changes.
- **AWS Integration:** Demonstrates cloud service proficiency through deployment on AWS Elastic Beanstalk.
- **Database Integration:** Utilizes MongoDB for scalable and flexible data storage.
- **Agile Methodologies:** Organized and modular codebase facilitating iterative development and easy feature additions.
- **CI/CD:** Automated testing, building, and deployment pipelines using GitHub Actions enhance development workflow.
- **Microservices Architecture:** Separates frontend and backend into distinct services for independent scaling and development.
- **Code Quality:** Incorporates linting, type checking, and testing to ensure high-quality, maintainable code.
- **Security:** Uses environment variables for sensitive information and follows best practices for secure development.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make Your Changes**

4. **Commit Your Changes**

   ```bash
   git commit -m "Add your message"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the [MIT License](LICENSE).

---

© 2024 Joshua Mark Nanninga(https://github.com/joshuamarknanninga)
```