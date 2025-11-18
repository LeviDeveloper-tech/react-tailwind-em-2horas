import { ChevronRight, Trash2Icon, TrashIcon } from "lucide-react";

function Tasks(props){
    return(
       
        <div className="p-5">
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">{props.tasks.map(function (tasks){ 
                return (
                <li key={tasks.id} className="flex gap-2
                ">
                    {/* Task title */}
                    <button onClick={() => props.onTaskClick(tasks.id)} className={`bg-slate-400 w-full text-left font-semibold text-slate-900 p-2 rounded-md hover:cursor-pointer hover:bg-slate-500 hover:text-slate-50 transition-colors 
                        ${tasks.isCompleted && 'line-through'}`}>
                        {tasks.title}
                    </button>
                    {/* Botão de detalhes */}
                    <button className="bg-slate-400 p-2 rounded-md text-slate-900 hover:cursor-pointer hover:bg-slate-500 hover:text-slate-50 transition-colors">
                        <ChevronRight/>
                    </button>
                    {/* Botão de deletar */}
                    <button onClick={() => props.onDeleteTaskClick(tasks.id)} className="bg-slate-400 p-2 rounded-md text-slate-900 hover:cursor-pointer hover:bg-slate-500 hover:text-slate-50 transition-colors">
                        <TrashIcon/>
                    </button>
                </li> 
                )
        })}</ul> 
        </div>
    )
}

export default Tasks;