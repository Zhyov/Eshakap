import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Home() {
    return (
        <div className="relative mx-auto p-0 flex flex-col min-h-dvh">
            <Navbar searchEnabled={false} />
            <main className="flex flex-col justify-center items-center border-neutral-800 rounded-sm gap-4 my-auto min-h-full">
                <h1 className="text-4xl font-[600]">Äšakap</h1>
                <p className="text-center w-[65%]">Äšakap is a conlang created by <a href="https://github.com/Zhyov" className="underline">Zhyov</a>. This is an app made with the purpose of storing information about the language.</p>
                <ul className="flex flex-col gap-2 items-center w-[65%]">
                    <Link to="/Eshakap/dictionary">
                        <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                            <img src="https://www.svgrepo.com/show/309519/dictionary.svg" alt="dictionary" className="size-4 invert-50" />
                            <span className="text-[16px] font-[600] text-neutral-950 invert-50">Dictionary</span>
                        </div>
                    </Link>
                    <a href="https://github.com/Zhyov/Eshakap" className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="home" className="size-4 invert-50" />
                        <span className="text-[16px] font-[600] text-neutral-950 invert-50">Website's GitHub</span>
                    </a>
                    <a href="https://github.com/Zhyov/EshakapAPI" className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="home" className="size-4 invert-50" />
                        <span className="text-[16px] font-[600] text-neutral-950 invert-50">API's GitHub</span>
                    </a>
                </ul>
            </main>
        </div>
    )
}