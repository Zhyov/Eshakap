import { getEshakap } from "./returnEshakap"

export default function Card({word, meaning, type}) {
    let eshakap = getEshakap(word)
    
    const eshakapElements = eshakap.map(element => {
        const img0 = element.syllable[0];
        const img1 = element.syllable[1];
        return (
            <div key={element.id} className="flex flex-col invert min-w-max items-center">
                {img1 && (
                    <img key={img1.id} src={img1.path} className={`ml-1 mt-1 size-2 eshakap-syllable-1${img1.path.endsWith('/a.svg') ? ' eshakap-a' : ''}`} />
                )}
                {img0 && (
                    <img key={img0.id} src={img0.path} className={`size-4${img0.path.endsWith('/a.svg') ? ' eshakap-a' : ''}`} />
                )}
            </div>
        );
    })

    const meanings = meaning.map((element, index) => {
        return (
            meaning.length - 1 === index
            ? element
            : element + ", "
        )
    })

    const leftColorClass = type === "replaceable" ? "border-l-replaceable has-[a:hover]:border-replaceable" : type === "general" ? "border-l-white has-[a:hover]:border-white" : "border-l-special has-[a:hover]:border-special"

    return (
        <li>
            <div className={`shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-neutral-800 border-l-4 has-[a:hover]:border-l-8 w-auto rounded-md duration-100 ${leftColorClass}`}>
                <a href={`/Eshakap/`} className="flex-1">
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