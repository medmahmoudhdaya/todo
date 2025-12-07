import { useEffect, type Dispatch, type SetStateAction } from "react";
import Task from "./Task";


export default function Tasks({ tasks, setTasks} :
     { 
        tasks : string[]; 
        setTasks : Dispatch<SetStateAction<string[]>>;
    }){

    useEffect( () => {
        const tasksLength = Number(localStorage.getItem("tasksLength"))
    
        const loadedTasks = []
    
        for (let i = 0 ; i < tasksLength ; i ++){
            const item = localStorage.getItem("name" + (i + 1));
            if (item) loadedTasks.push(item);
        }
    
        setTasks(loadedTasks.filter( t => t != ''))
    },[])

    return (
        <div className="w-full p-2 mt-2 flex flex-col gap-2 justify-center items-center">
            {
            tasks.map((task,index) => 
                <Task key={index} task={task ?? ""} setTasks={setTasks}/>
            )
            }
        </div>
    )
}