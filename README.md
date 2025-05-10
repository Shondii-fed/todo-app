# 📝 To-Do App

A sleek, responsive, and animated to-do list app built with **Vite + React + TypeScript + Tailwind CSS**. It features persistent tasks using `localStorage`, edit mode, filter options, dark mode, and a smooth user experience thanks to Framer Motion.

## 🚀 Features

- ✅ Add, edit, and delete tasks
- 🌗 Dark mode toggle
- 💾 Persistent storage (localStorage)
- 🎯 Filter by: All, Active, Completed
- 📱 Responsive design
- 🎥 Smooth animations with Framer Motion

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

## 📁 Project Structure

src/
├── components/
│ ├── DarkModeToggle.tsx
│ ├── FilterButtons.tsx
│ ├── TaskInput.tsx
│ └── TaskList.tsx
├── context/
│ └── ThemeContext.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts


## 🧪 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/todo-app.git
cd todo-app

# Install dependencies
npm install

# Run the dev server
npm run dev