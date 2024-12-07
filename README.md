# RAPIDMERN - Full Stack Boilerplate Generator

`rapidmern` is a CLI tool for quickly setting up a full MERN stack boilerplate (MySQL, Express, React, Node.js) with Prisma ORM. It provides an opinionated, scalable, and maintainable structure using MVC for the backend and Tailwind CSS for the frontend.

---

## Features

- **Full-Stack Boilerplate**: Quickly generate a complete MERN stack boilerplate.
- **Prisma ORM**: Simplified database management with MySQL support.
- **MVC Architecture**: Cleanly organized backend with controllers, routes, and services.
- **Pre-Built CRUD APIs**: Ready-to-use APIs for user management.
- **Responsive Frontend**: React with Tailwind CSS for modern UI design.
- **Authentication**: Token-based login, signup, and protected routes.
- **Customizable**: Easily modify templates to match your project needs.

---

## Prerequisites

Ensure you have these installed:
- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) (v7+)
- [MySQL](https://dev.mysql.com/downloads/)

---

## Installation

Install `rapidmern` globally via npm:
```bash
npm install -g rapidmern
```

---

## Usage

### Generate a New Project
Run the CLI tool:
```bash
rapidmern generate
```

Follow the prompts to configure:
- Project name
- MySQL credentials (username, password, database name)

### Start Your Project
1. Navigate to the backend:
   ```bash
   cd <project-name>/backend
   npm start
   ```
2. Navigate to the frontend:
   ```bash
   cd ../frontend
   npm start
   ```
3. Open `http://localhost:3000` to view the app.

---

## Project Structure

The generated boilerplate includes:

```
project/
├── backend/
│   ├── prisma/                 # Prisma schema for DB
│   ├── src/
│   │   ├── config/             # DB configuration
│   │   ├── controllers/        # Logic for API endpoints
│   │   ├── middlewares/        # Authentication checks
│   │   ├── routes/             # API routes
│   │   ├── services/           # Reusable logic
│   │   ├── utils/              # Utility functions
│   │   ├── app.js              # Backend setup
│   │   └── server.js           # Entry point
├── frontend/
│   ├── src/
│   │   ├── api/                # API service
│   │   ├── components/         # UI components
│   │   ├── pages/              # React pages
│   │   ├── App.js              # Root component
│   │   └── index.js            # Entry point
```

---

## Features at a Glance

### Backend
- **MVC Architecture**: Organized into `controllers`, `models`, `routes`, and `services`.
- **Prisma ORM**: Database integration with migrations.
- **Token-based Authentication**: Secure routes using middlewares.
- **Environment Configuration**: Manage secrets with `.env`.

### Frontend
- **React + Tailwind CSS**: Responsive UI.
- **Authentication**: Login/signup with route protection.
- **Error Handling**: 404 and server error pages.
- **Clean Code**: Modular, reusable components.

---

## Contributing

We welcome contributions!  

1. Fork the repository.
2. Clone the fork:
   ```bash
   git clone https://github.com/nandu-99/rapidmern.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
4. Make changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
5. Push and create a pull request.

---

## License

Licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- **Node.js**: Backend runtime.
- **Prisma**: ORM for MySQL.
- **React + Tailwind CSS**: Frontend development.

---

**Happy Coding! 🚀**

---
