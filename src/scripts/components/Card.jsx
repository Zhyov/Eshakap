import { getEshakap } from "./returnEshakap"

export default function Card({word, meaning, type}) {
    const leftColor = (type === "replaceable" ? "replaceable" : type === "general" ? "white" : "special")
    let eshakap = getEshakap(word)
    
    const eshakapElements = eshakap.map(element => {
        let size1;
        if (element.syllable[1].path === "./assets/char/a.svg") {
            size1 = "ml-1.5 mt-1 size-1"
        } else if (element.syllable[1].path === "./assets/char/ä.svg" || element.syllable[1].path === "./assets/char/ą.svg" ) { 
            size1 = "ml-1.5 mt-0.75 size-1.25"
        } else {size1 = "ml-1 size-2"}

        return (
            <div key={element.id} className="flex flex-col invert min-w-max">
                <img key={element.syllable[1].id} src={element.syllable[1].path} className={`${size1}`} />
                <img key={element.syllable[0].id} src={element.syllable[0].path} className="size-4" />
            </div>
        )
    })

    const meanings = meaning.map((element, index) => {
        return (
            meaning.length - 1 === index
            ? element
            : element + ", "
        )
    });

    return (
        <li>
            <div className={`shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-neutral-800 border-l-${leftColor}has-[a:hover]:border-${leftColor} border-l-4 has-[a:hover]:border-l-8 w-auto rounded-md`}>
                <a href={`/`} className="flex-1">
                    <div className="flex flex-col space-y-1 p-4 pl-6">
                        <div className="flex flex-row w-full mb-1">
                            <div className="flex flex-row min-w-max mr-2">{eshakapElements}</div>
                            <span className="text-2xl">{word}</span>
                        </div>
                        <span className="w-full text-[16px]">{meanings}</span>
                        <span className="w-full text-[14px] text-neutral-400">{type}</span>
                    </div>
                </a>
            </div>
        </li>
    )
}