import { useState } from "react"
import AddTask from "./Components/AddTask"
import Container from "./Components/Container"
import Tasks from "./Components/Tasks"

function App() {

  const [tasks ,setTasks] = useState<string[]>([])

  return (
    <Container>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </Container>
  )
}

export default App
