# ToDo-App-react

## Description
This is a simple Todo App built using React's Context API (`useContext`, `createContext`) for state management. It also utilizes `useState` for state handling and `useEffect` to store and retrieve todos from `localStorage`, ensuring persistence across page reloads.

## Preview
![](image.png)

## Features
- Add new todos
- Edit existing todos
- Mark todos as completed
- Delete todos
- Persist todos using `localStorage`

## Technologies Used
- React.js
- Context API (`useContext`, `createContext`)
- Hooks (`useState`, `useEffect`)
- Tailwind CSS for styling
- Local Storage for persistence
- Custom hook (`useTodo`)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Pushpraj1522002/ToDo-App-react
   ```
2. Navigate into the project directory:
   ```sh
   cd ToDo-App-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and go to `http://localhost:3000`
3. Add, edit, complete, or delete todos as needed.

## Folder Structure
```
/todo-app
│── /src
│   ├── /components
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   ├── /contexts
│   │   ├── index.js
|   |   ├── TodoContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── index.html
│── package.json
│── README.md
```

## How It Works
- The `TodoContext` provides a global state to manage todos.
- The `App.js` component initializes and manages todos using `useState`.
- `TodoForm.js` handles adding new todos.
- `TodoItem.js` enables updating, deleting, and marking todos as completed.
- `useEffect` ensures todos persist in `localStorage`.

## Courtesy
This project is inspired by and follows guidance from **[Chai Aur Code](http://www.youtube.com/@chaiaurcode)**.

---
### Author
Developed by [Pushpraj Desai](https://github.com/Pushpraj1522002)

