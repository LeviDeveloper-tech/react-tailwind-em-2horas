import { useState } from "react";

function AddTask({onAddTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return(
        <div  className="space-y-4 p-5 bg-slate-200 rounded-md shadow flex flex-col">
             
            <input type="text" onChange={(event) => setTitle(event.target.value)} name="titleSubmit" id="titleSubmit" placeholder="Inserir Título da Tarefa"  className="bg-slate-100  py-1 px-6 rounded-md" value={title}  />
            
            <input type="text" name="descriptionSubmit" id="descriptionSubmit" placeholder="Inserir Descrição"  className="bg-slate-100  py-1 px-6 rounded-md" value={description}  onChange={(event) => setDescription(event.target.value)}/>
            
            <button onClick={()=>{
                if(!title.trim()){
                    return alert("Dê um titulo à tarefa")
                }

                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")
                }} 
                className="bg-slate-500 p-2 text-xl text-white font-semibold rounded-4xl hover:cursor-pointer hover:scale-102 transition-all "
            >
                Adicionar
            </button>
        
        </div>
    )
}

export default AddTask;