export default function Tasks(){
    return (
        <div className="w-full p-2 mt-2 flex flex-col gap-2 justify-center items-center">
            <div className="w-full py-1 px-2 shadow rounded-md flex gap-2">
                <p className="text-xl font-bold text-blue-500 p-1 flex-1">task 1</p>
                <button className="py-2 px-4 bg-green-500 text-white rounded">edit</button>
            </div>
        </div>
    )
}