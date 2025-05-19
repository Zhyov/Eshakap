import { useState } from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "/src/scripts/data"
import { order } from "./returnEshakap"

function compare(a, b) {
    const aList = a.word.split("");
    const bList = b.word.split("");
    const length = Math.max(aList.length, bList.length);

    for (let i = 0; i < length; i++) {
        const aIndex = order.indexOf(aList[i]);
        const bIndex = order.indexOf(bList[i]);
        if (aIndex !== bIndex) {
            return aIndex - bIndex;
        }
    }
    return aList.length - bList.length;
}

export default function Page() {
    const [search, setSearch] = useState("")
    const searchData = data.filter(item => {
        const wordMatch = item.word.toLowerCase().includes(search.toLowerCase())
        const meaningMatch = item.meaning.some(meaning => meaning.toLowerCase().includes(search.toLowerCase()))
        return wordMatch || meaningMatch
    })

    const newData = [...searchData].sort(compare)
    const words = newData.map(element => {
        return <Card key={element.id} word={element.word} meaning={element.meaning} type={element.type} />
    })

    return (
        <>
            <Navbar search={search} setSearch={setSearch} />
            <ul className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(80vw,1000px)]">
                {words}
            </ul>
        </>
    )
}