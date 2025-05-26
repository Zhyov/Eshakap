import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import CardSkeleton from "./CardSkeleton"

export default function Page() {
    const location = useLocation()

    const params = new URLSearchParams(location.search)
    const defaultSearch = params.get("q") || ""

    const [search, setSearch] = useState(defaultSearch)
    const [data, setData] = useState([])
    const [maxCount, setMaxCount] = useState(0)
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = search.trim()
            ? `https://eshakapapi.onrender.com/fetch?q=${encodeURIComponent(search)}`
            : `https://eshakapapi.onrender.com/fetch`
        document.title = "Äšakap · Dictionary"
        
        fetch(url)
            .then(res => res.json())
            .then(obj => {
                setData(obj)
                setLoading(false)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
                setLoading(false)
            })
        fetch("https://eshakapapi.onrender.com/max")
            .then(res => res.json())
            .then(obj => {
                setMaxCount(obj.max)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
            })
        fetch("https://eshakapapi.onrender.com/order")
            .then(res => res.json())
            .then(obj => {
                setOrder(obj)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
            })
    }, [search])

    const compare = (a, b) => {
        const aIndex = order.indexOf(a.type)
        const bIndex = order.indexOf(b.type)

        if (aIndex === bIndex) {
            return a.word.localeCompare(b.word)
        }

        return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex)
    };

    const words = data.sort(compare).map(element => {
        return <Card key={element.id} word={element.word} meaning={element.meaning} type={element.type} />
    })

    return (
        <>
            <Navbar gridEnabled={true} searchEnabled={true} search={search} setSearch={setSearch} />
            <ul className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(80vw,1000px)]">
                <span className="text-xl self-center">Amijąçj: {data.length}/{maxCount}</span>
                {loading ? Array(10).fill(0).map((_, i) => <CardSkeleton key={i} />) : words}
                {words}
            </ul>
        </>
    )
}