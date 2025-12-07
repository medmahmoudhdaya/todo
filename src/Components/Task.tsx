import { Trash } from "lucide-react"
import { SquarePen } from "lucide-react"

export default function Task({ task } : { task : string}){

    return (
        <div className="w-full py-1 px-2 shadow rounded-md flex gap-2">
            <p className="text-xl font-bold text-blue-500 p-1 flex-1">{task}</p>
            <button 
            onClick={() => {

                const tasksLength = Number(localStorage.getItem("tasksLength"))

                for (let i = 0 ; i < tasksLength ; i ++){
                    const item = localStorage.getItem("name"+(i+1))

                    if (item === task){
                        localStorage.removeItem("name"+(i+1))
                        localStorage.setItem("tasksLength", String(tasksLength - 1))
                    }

                }                
            }}
            className="p-2">
                <Trash color="red"/>
            </button>
            <button 
            onClick={() => {
                console.log("edit " + task)
            }}
            className="p-2">
                <SquarePen color="green"/>
            </button>
        </div>
    )
}