import { Link } from "react-router-dom"

export default function Navbar({ searchEnabled, search, setSearch }) {

    const hideOrNot = searchEnabled ? "hidden md:block" : "block"

    return (
        <nav className="p-4 h-18 sticky top-0 z-1 backdrop-blur flex flex-nowrap flex-row justify-center items-center w-full bg-dark/40 shadow-md border-b-1 border-b-neutral-800" >
            <div className="flex flex-nowrap flex-row basis-auto gap-x-1 items-center mr-0 md:mr-auto">
                <Link to="/Eshakap/">
                    <img src="https://zhyov.github.io/Eshakap/assets/title.svg" alt="logo" className="size-16 mr-4 invert" />
                </Link>
                <Link to="/Eshakap/" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://www.svgrepo.com/show/422490/home-house.svg" alt="home" className="size-4 invert-50" />
                        <span className="text-[16px] font-[600] text-neutral-950 invert-50">Home</span>
                    </div>
                </Link>
                <Link to="/Eshakap/dictionary" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://www.svgrepo.com/show/309519/dictionary.svg" alt="dictionary" className="size-4 invert-50" />
                        <span className="text-[16px] font-[600] text-neutral-950 invert-50">Dictionary</span>
                    </div>
                </Link>
            </div>
            {
                searchEnabled
                ? <div className="flex flex-nowrap flex-row justify-end basis-8/10 gap-x-2">
                    <input type="text" placeholder="Oliňazä amijąç'ka" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center pl-3 pr-3 pt-1.5 pb-1.5 align-middle rounded-md border-1 border-neutral-800 text-lg" value={search} onChange={element => setSearch(element.target.value)} />
                </div>
                : <></>
            }
        </nav>
    )
}