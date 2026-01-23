import './App.css'

import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/homePage.tsx";
import AccountPage from "./pages/accountPage.tsx";
import TaskPage from "./pages/taskPage.tsx";
import AccountCreationPage from "./pages/accountCreationPage.tsx";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/create-account" element={<AccountCreationPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
