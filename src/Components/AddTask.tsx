import { useRef, type Dispatch, type SetStateAction } from "react"
import { Plus } from "lucide-react";
export default function AddTask({ tasks, setTasks} :
     { 
        tasks : string[]; 
        setTasks : Dispatch<SetStateAction<string[]>>;
    }){

    const inputRef = useRef<HTMLInputElement>(null)

    function createTask(name:string){
        const tasksLength = Number(localStorage.getItem("tasksLength")) 

        if (tasksLength === null){
            localStorage.setItem("name1", name)
            localStorage.setItem("tasksLength", "1")
            return
        }

        localStorage.setItem("tasksLength", String(tasksLength+1))
        localStorage.setItem("name"+(tasksLength+1), name)
        

        const newTasks = [...tasks]
        const item = localStorage.getItem("name"+(tasksLength+1))
        if (item) newTasks[tasksLength] = item
        setTasks(newTasks)
    }

    return (
        <div className="w-full p-4 bg-gray-100 flex justify-center items-center gap-2">
            <input 
            ref={inputRef}
            type="text" 
            className="p-2 border outline-none rounded text-blue-500 font-bold text-lg flex-1" />
            <button 
            onClick={() => createTask(inputRef.current!.value )}
            className="px-4 py-2 bg-blue-500 text-white rounded">
                <Plus />
            </button>
        </div>
    )
}