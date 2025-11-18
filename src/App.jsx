import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Estudar React para o projeto de front-end',
      isCompleted: false
    }, {
      id: 2,
      title: 'Estudar Node.js',
      description: 'Estudar Node.js para o projeto de back-end',
      isCompleted: false
    },{
      id: 3,
      title: 'Estudar Vite',
      description: 'Estudar Vite para configurar o ambiente de desenvolvimento',
      isCompleted: false
    }, {
      id: 4,
      title: 'Estudar Tailwind CSS',
      description: 'Estudar Tailwind CSS para estilizar o projeto',
      isCompleted: false
    }
  ])


  function onTaskClick(taskId){
    const newTasks = tasks.map((task) =>{
      if (task.id === taskId){
        return{...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    setTasks(newTasks)
  }
  
  function onDeleteTaskClick(taskID){
    const newTasks = tasks.filter(task => task.id !== taskID)
    setTasks(newTasks)
  }


  return (

    <div className='w-screen h-screen bg-slate-600 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de tarefas</h1>
        <Tasks tasks={tasks} onDeleteTaskClick={onDeleteTaskClick} onTaskClick={onTaskClick}/>
      </div>
    </div>
  )
}

export default App
