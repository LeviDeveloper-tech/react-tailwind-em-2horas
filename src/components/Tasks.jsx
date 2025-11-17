import { ChevronRight } from "lucide-react";

function Tasks(props){
    return(
       
        <div className="p-5">
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow  ">{props.tasks.map(function (tasks){ 
                return (
                <li key={tasks.id} className="flex gap-2
                ">
                    <button onClick={() => props.onTaskClick(tasks.id)} className="bg-slate-400 w-full text-left text-white p-2 rounded-md hover:cursor-pointer">
                        {tasks.title}
                    {tasks.isCompleted ? " COMPLETE" : " INCOMPLETED"}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRight/>
                    </button>
                    </li> 
                )
        })}</ul> 
        </div>
    )
}

export default Tasks;