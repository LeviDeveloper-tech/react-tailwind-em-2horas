import { ChevronRight, Trash2Icon, TrashIcon } from "lucide-react";

function Tasks({tasks, onDeleteTaskClick, onTaskClick}){
    return(
       
        <div >
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">{tasks.map(function (tasks){ 
                return (
                <li key={tasks.id} className="flex gap-2
                ">
                    {/* Task title */}
                    <button onClick={() => onTaskClick(tasks.id)} className={`bg-slate-400 w-full text-left font-semibold text-slate-900 p-2 rounded-md hover:cursor-pointer hover:bg-slate-500 hover:text-white transition-colors 
                        ${tasks.isCompleted && 'line-through'}`}>
                        {tasks.title}
                    </button>
                    
                    {/* Botão de detalhes */}
                    <button className="bg-slate-400 p-2 rounded-md text-slate-900 hover:cursor-pointer hover:bg-slate-500 hover:text-white transition-colors">
                        <ChevronRight/>
                    </button>

                    {/* Botão de deletar */}
                    <button onClick={() => onDeleteTaskClick(tasks.id)} className="bg-slate-400 p-2 rounded-md text-slate-900 hover:cursor-pointer hover:bg-slate-500 hover:text-white transition-colors">
                        <TrashIcon/>
                    </button>
                </li> 
                )
        })}</ul> 
        </div>
    )
}

export default Tasks;