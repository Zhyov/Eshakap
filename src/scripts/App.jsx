import { Routes, Route } from 'react-router-dom'
import Dictionary from "./components/Dictionary"
import WordPage from "./components/WordPage"

export default function App() {
    return (
        <Routes>
            <Route path="/Eshakap" element={<Dictionary />} />
            <Route path="/Eshakap/words/:word" element={<WordPage />} />
        </Routes>
    )
}