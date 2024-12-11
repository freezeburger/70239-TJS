import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskManager from "./components/exercice/TaskManager"

import './logic'
import MessageBoard from "./MessageBoard/MessageBoard"
import { BrowserRouter, Route, Routes } from "react-router"
import TheoryWrapper from "./components/theory/TheoryWrapper"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MessageBoard />} />
        <Route path="/task" element={<TaskManager />} />
        <Route path="/theory" element={<TheoryWrapper />} />
      </Routes>
      {/* <MessageBoard/> */}
      {/* <TaskManager/> */}
      {/* <TheoryWrapper/> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
