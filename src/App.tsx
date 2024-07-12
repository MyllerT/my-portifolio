import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import HomeProjects from "./pages/ProjectsPage/HomeProjects";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<HomeProjects />} /> {/* Rota para a página de projetos */}
            </Routes>
        </Router>
    );
};

export default App;
