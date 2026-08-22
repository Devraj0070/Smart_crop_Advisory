import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Sidebar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;