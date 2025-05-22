import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function WordPageSkeleton() {

    const randomLength = Math.floor(Math.random() * 100) + 1
    console.log(randomLength)

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
                <div className="flex flex-row gap-2 mt-2">
                    <Link to="/Eshakap/dictionary">
                        <img src="https://zhyov.github.io/Eshakap/assets/icon/back.svg" alt="back" className="size-10 p-3 rounded-md invert transition-colors hover:bg-neutral-300" />
                    </Link>
                    <span className="text-4xl rounded-full bg-neutral-700 animate-pulse w-28 h-10"></span>
                </div>
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-neutral-800 w-auto rounded-md duration-100">
                    <div className="flex flex-col space-y-1 p-4 pl-6">
                        <div className="flex flex-row w-full mb-1">
                            <div className="flex flex-row min-w-max rounded-full bg-neutral-700 animate-pulse w-24 h-10"></div>
                        </div>
                        <span className="text-[14px] rounded-full bg-neutral-700 animate-pulse w-12 h-4"></span>
                        <span className="w-full text-2xl mt-4">Broad Definition</span>
                        <span className="text-[16px] rounded-full bg-neutral-700 animate-pulse w-40 h-5"></span>
                        <span className="w-full text-xl mt-4 flex flex-row gap-x-2 items-center">Word type: <span className="rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></span>
                        <span className="text-xl mt-4 rounded-full bg-neutral-700 animate-pulse w-28 h-6"></span>
                    </div>
                </div>
            </div>
        </>
    )
}