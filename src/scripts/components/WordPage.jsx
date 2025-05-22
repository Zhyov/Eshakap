import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar from "./Navbar"
import WordPageSkeleton from "./WordPageSkeleton"

export default function WordPage() {
    const { word: specifiedWord } = useParams();
    const [data, setData] = useState([])
    const [eshakap, setEshakap] = useState([])

    useEffect(() => {
        setLoading(true)
        setData([])
        setEshakap([])
        setWord("")
        setUnsortedMeanings([])
        setType("")
        setPhonetic("")
        setCombination([])
    }, [specifiedWord])

    useEffect(() => {
        fetch(`https://eshakapapi.onrender.com/word?q=${specifiedWord}`)
            .then(res => res.json())
            .then(obj => setData(obj))
            .catch(err => console.error("Failed to fetch data:", err))

        fetch(`https://eshakapapi.onrender.com/convert?q=${specifiedWord}`)
            .then(res => res.json())
            .then(obj => setEshakap(obj))
            .catch(err => console.error("Failed to fetch data:", err))
    }, [specifiedWord])
    
    const eshakapElements = eshakap.map(element => {
        const img0 = element.syllable[0]
        const img1 = element.syllable[1]

        return (
            <div key={element.id} className="flex flex-col invert min-w-max items-center">
                <img key={img1.id} src={img1.path} className={`ml-1.5 mt-1.5 size-3 eshakap-syllable-1-big ${img1.path.endsWith("/a.svg") ? "eshakap-a-big" : ""}`} />
                <img key={img0.id} src={img0.path} className={`size-6`} />
            </div>
        )
    })

    const [word, setWord] = useState("")
    const [unsortedMeanings, setUnsortedMeanings] = useState([])
    const [type, setType] = useState("")
    const [phonetic, setPhonetic] = useState("")
    const [combination, setCombination] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (data.length > 0) {
            setWord(data[0].word)
            setUnsortedMeanings(data[0].meaning)
            setType(data[0].type)
            setPhonetic(data[0].phonetic)
            setCombination(data[0].combination)
            setLoading(false)
        }
    }, [data])

    const meanings = unsortedMeanings.map((element, index) => {
        return (
            unsortedMeanings.length - 1 === index
            ? element
            : element + ", "
        )
    })

    let combinationElement
    if (type === "combination") {
        combinationElement = (
            <span key={crypto.randomUUID()}>
                <Link to={`/Eshakap/words/${combination[0]}`} className="text-blue-400 hover:underline">{combination[0]}</Link> and <Link to={`/Eshakap/words/${combination[1]}`} className="text-blue-400 hover:underline">{combination[1]}</Link>
            </span>
        )
    }

    return (
        <>
        {
            loading
            ? <WordPageSkeleton />
            : <>
            <Navbar searchEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
                <div className="flex flex-row gap-2 mt-2">
                    <Link to="/Eshakap/dictionary">
                        <img src="https://zhyov.github.io/Eshakap/assets/icon/back.svg" alt="back" className="size-10 p-3 rounded-md invert transition-colors hover:bg-neutral-300" />
                    </Link>
                    <span className="text-4xl">{word}</span>
                </div>
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-neutral-800 w-auto rounded-md duration-100">
                    <div className="flex flex-col space-y-1 p-4 pl-6">
                        <div className="flex flex-row w-full mb-1">
                            <div className="flex flex-row min-w-max">{eshakapElements}</div>
                        </div>
                        <span className="w-full text-[14px] text-neutral-400">/{phonetic}/</span>
                        <span className="w-full text-2xl mt-4">Broad Definition</span>
                        <span className="w-full text-[16px]">{meanings}</span>
                        <span className="w-full text-xl mt-4">Word type: {type}</span>
                        { type === "combination" && <span className="w-full text-xl mt-4">Combination of {combinationElement}</span> }
                    </div>
                </div>
            </div>
            </>
        }
        </>
    )
}