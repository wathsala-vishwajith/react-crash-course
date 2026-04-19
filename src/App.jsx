import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";


const App = () => {
    return ( 
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    );
}

export default App;