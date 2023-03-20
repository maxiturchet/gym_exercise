import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/ExerciseDetail';
import ExerciseDetail from "./pages/Home";

const App = () => {
    return(
        <Box width='400px' sx={{ width: {xl: '1488px' }}} m='auto'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App;