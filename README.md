# TRUMPY | Premium Beverage Solutions

A full-stack web application for TRUMPY, built with **React.js** (Vite) on the frontend and **Node.js** (Express) on the backend.

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Three.js (for interactive 3D Bottle), WebGL Canvas (for organic background shader), React Router
- **Backend**: Node.js, Express.js
- **Orchestration**: Root-level npm scripts to manage client/server dependencies and run both concurrently

## Setup and Running

1. **Install Dependencies**:
   Install all dependencies for root, client, and server:
   ```bash
   npm run install:all
   ```

2. **Run in Development Mode**:
   Start both client (Vite) and server (Express) concurrently:
   ```bash
   npm run dev
   ```
   - Frontend will run on `http://localhost:5173`
   - Backend will run on `http://localhost:5000` (requests to `/api` are automatically proxied from client)

3. **Build and Run for Production**:
   Build the frontend static assets and run the backend server which serves them:
   ```bash
   npm run build
   npm start
   ```
   Open `http://localhost:5000` to view the production build.

## Project Structure
- `/client` - Vite + React application, including custom Three.js components and WebGL backgrounds.
- `/server` - Express.js backend serving routes and persisting partnership inquiries in `inquiries.json`.
- `/stitch_abhishek_thakur_website` - Original HTML/UX layouts and references.
