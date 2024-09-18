import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const DATA = [
  { id: "todo-0", name: "Learn React", completed: true },
  { id: "todo-1", name: "Become a cool Developer", completed: false },
  { id: "todo-2", name: "Work on cool projects", completed: false },
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  tasks = {DATA}/>
  </StrictMode>,
)
