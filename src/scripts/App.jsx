import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Dictionary from "./components/Dictionary"
import WordPage from "./components/WordPage"

export default function App() {
    return (
        <Routes>
            <Route path="/Eshakap/" element={<Home />} />
            <Route path="/Eshakap/dictionary" element={<Dictionary />} />
            <Route path="/Eshakap/words/:word" element={<WordPage />} />
        </Routes>
    )
}