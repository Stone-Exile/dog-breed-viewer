# Vite + React Project Setup

This project is a React application bootstrapped with **Vite** for fast development and optimized builds.

## Prerequisites

Ensure you have the following installed:

* **Node.js** (v18 or newer recommended)
* **npm** or **yarn**

You can verify installation with:

```bash
node -v
npm -v
```

---

## Installation

Install dependencies:

```bash
cd <project-folder>
npm install
```

---

## Running the Development Server

Start the development server:

```bash
npm run dev
```

The app will start locally and typically be available at:

```
http://localhost:5173
```

The server supports **hot module replacement (HMR)**, so changes will automatically reload in the browser.

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be generated in the `dist/` directory.

---

## Preview Production Build

You can preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
src/
  components/   # Reusable React components
  pages/        # Page-level components
  hooks/        # Custom React hooks
  lib/          # utility functions
  App.tsx       # Root component
  main.tsx      # Application entry point
```

---

## Scripts

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the project for production     |
| `npm run preview` | Previews the production build locally |

---

## Notes

* Built with **Vite** for fast startup and builds.
* Uses **React** for UI development.
* Supports modern ES modules and optimized bundling.

---
