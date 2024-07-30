import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Accordion from "./pages/home/accordion/Accordion"

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-950 flex flex-col text-neutral-400">
          {/*  */}
          <Accordion />

          {/* This is sample */}

          {/* <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes> */}

        </div>
      </Router>
    </>
  )
}

export default App
