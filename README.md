# Shopping List App

A simple full-stack shopping list application built with **React + TypeScript** (frontend) and **Express + TypeScript** (backend) using **MongoDB**. Users can add, mark as bought, and delete items from their shopping list.

The frontend uses **shadcn/ui** for components and **Tailwind CSS** for styling. The backend runs in Node.js and connects to MongoDB via **Mongoose**. The database is set up with **Docker Compose**.

---

## Tech Stack

- **Frontend:** React + TypeScript, shadcn/ui, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, Mongoose
- **Database:** MongoDB (Docker Compose)
- **Dev Tools:** Justfile, Zellij layout for easy dev environment

---

## Project Structure

```
shopping-list/
├── backend/       # Express backend + Docker Compose for MongoDB
├── frontend/      # React + TypeScript frontend
├── dev.kdl        # Zellij layout for dev environment
├── Justfile       # Commands for dev and checks
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/PadBro/shopping-list.git
cd shopping-list
```

### 2. Install dependencies

Make sure you have **Node.js and npm installed**, then run for both frontend and backend:

```bash
cd backend && npm install
cd ../frontend && npm install
```

Also, copy the environment example files and adjust them if necessary:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 3. Using the Justfile + Zellij

Start the development environment:

```bash
just dev
```

- This opens **Zellij** with three tabs:
  - **Database** → starts MongoDB via Docker Compose
  - **Backend** → runs the Express server
  - **Frontend** → runs the React dev server

Run checks / lint / typecheck code:

```bash
just check       # checks both frontend and backend
just cf          # check frontend only
just cb          # check backend only
```

> Aliases:
>
> - `d` → `dev`
> - `c` → `check`
> - `cf` → `check-frontend`
> - `cb` → `check-backend`

---

### 4. Manual setup (if not using Just/Zellij)

#### Backend

```bash
cd backend
docker compose up -d
npm run dev
```

- Runs backend on `http://localhost:3000`

#### Frontend

```bash
cd frontend
npm run dev
```

- Runs frontend on `http://localhost:5173`

---

### 5. Running type checks

- **Frontend:** `npm run typecheck`
- **Backend:** `npm run typecheck`

These commands use `tsc --noEmit` to validate TypeScript types.

---

### 6. Using the App

- Add items using the input field
- Check/uncheck items to mark them as bought
- Click the delete button to remove items

---

## External Libraries / UI

- **shadcn/ui** → used for components (buttons, inputs, cards, etc.)
- **Tailwind CSS** → used for styling and layout
- **Mongoose** → MongoDB ORM

