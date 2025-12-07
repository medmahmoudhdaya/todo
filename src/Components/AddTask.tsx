export default function AddTask(){
    return (
        <div className="w-full p-4 bg-gray-100 flex justify-center items-center gap-2">
            <input type="text" className="p-2 border outline-none rounded text-blue-500 font-bold text-lg flex-1" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded">add</button>
        </div>
    )
}