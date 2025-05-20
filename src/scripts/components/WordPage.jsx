import { useEffect, useState } from "react"
import Navbar from "./Navbar"

export default function Page() {
    const specifiedWord = decodeURIComponent(window.location.pathname.split("/").pop())
    const [data, setData] = useState([])
    const [eshakap, setEshakap] = useState([])

    useEffect(() => {
        fetch(`https://eshakapapi.onrender.com/word?q=${encodeURIComponent(specifiedWord)}`)
            .then(res => res.json())
            .then(obj => setData(obj))
            .catch(err => console.error("Failed to fetch data:", err))
        fetch(`https://eshakapapi.onrender.com/convert?q=${encodeURIComponent(specifiedWord)}`)
            .then(res => res.json())
            .then(obj => setEshakap(obj))
            .catch(err => console.error("Failed to fetch data:", err))
    }, [specifiedWord])
    
    const eshakapElements = eshakap.map(element => {
        const img0 = element.syllable[0]
        const img1 = element.syllable[1]

        return (
            <div key={element.id} className="flex flex-col invert min-w-max items-center">
                <img key={img1.id} src={img1.path} className={`ml-1 mt-1 size-2 eshakap-syllable-1 ${img1.path.endsWith("/a.svg") ? "eshakap-a" : ""}`} />
                <img key={img0.id} src={img0.path} className={`size-4`} />
            </div>
        )
    })

    let word, unsortedMeanings, type
    
    data.map(element => {
        word = element.word
        unsortedMeanings = element.meaning
        type = element.type
    })

    console.log(unsortedMeanings, data)

    const meanings = unsortedMeanings.map((element, index) => {
        return (
            unsortedMeanings.length - 1 === index
            ? element
            : element + ", "
        )
    })

    return (
        <>
            <Navbar search={search} setSearch={setSearch} />
            <div className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1000px)]">
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-neutral-800 border-l-4 has-[a:hover]:border-l-8 w-auto rounded-md duration-100">
                    <div className="flex flex-col space-y-1 p-4 pl-6">
                        <div className="flex flex-row w-full mb-1">
                            <div className="flex flex-row min-w-max mr-2">{eshakapElements}</div>
                            <span className="text-2xl">{word}</span>
                        </div>
                        <span className="w-full text-[16px]">{meanings}</span>
                        <span className="w-full text-[14px] text-neutral-400">{type}</span>
                    </div>
                </div>
            </div>
        </>
    )
}