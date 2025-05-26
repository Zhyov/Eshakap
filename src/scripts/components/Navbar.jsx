import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar({ gridEnabled, searchEnabled, search, setSearch }) {

    const hideOrNot = searchEnabled ? "hidden md:block" : "block"
    const changeGrid = gridEnabled ? "hidden md:block" : "hidden"
    const [openMenu, setOpenMenu] = useState(null)
    const menuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null)
            }
        }

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [openMenu])

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
                ? <div className="flex flex-nowrap flex-row basis-8/10 gap-x-2 justify-end">
                    <div>
                        <button onClick={() => setOpenMenu(openMenu === "filter" ? null : "filter")} className="flex flex-nowrap flex-row p-3 rounded-md ring-1 ring-neutral-800 items-center transition-colors hover:bg-neutral-800 hover:cursor-pointer hover:*:invert">
                            <img src="https://www.svgrepo.com/show/152218/funnel.svg" alt="filter" className="size-4 invert-50" />
                        </button>
                        {openMenu === "filter" && (
                            <div className="absolute -translate-x-3/8 translate-y-16 flex flex-nowrap flex-col items-center top-0 rounded-sm ring-1 w-40 ring-neutral-800 bg-dark">
                                <span className="font-[600] px-2 py-1.5">Search Filter</span>
                                <div className="bg-neutral-800 -mx-1 my-1 h-px"></div>
                                <div className="flex flex-nowrap flex-col">
                                    <button>general</button>
                                    <button>special</button>
                                    <button>replaceable</button>
                                    <button>combination</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={() => setOpenMenu(openMenu === "grid" ? null : "grid")} className={`flex flex-nowrap flex-row p-3 rounded-md ring-1 ring-neutral-800 items-center transition-colors hover:bg-neutral-800 hover:cursor-pointer hover:*:invert ${changeGrid}`}>
                            <img src="https://www.svgrepo.com/show/336748/grid-sixteen.svg" alt="grid" className="size-4 invert-50" />
                        </button>
                        {openMenu === "grid" && (
                            <div className="absolute -translate-x-3/8 translate-y-16 flex flex-nowrap flex-col items-center top-0 rounded-sm ring-1 w-40 ring-neutral-800 bg-dark">
                                <span className="font-[600] px-2 py-1.5">Grid View</span>
                                <span className="bg-white -mx-1 my-1 h-10px w-full"></span>
                                <div className="flex flex-nowrap flex-col">
                                    <button>one</button>
                                    <button>two</button>
                                    <button>three</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-nowrap flex-row">
                        <input type="text" placeholder="Oliňazä amijąç'ka" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center pl-3 pr-3 pt-1.5 pb-1.5 align-middle rounded-md ring-1 ring-neutral-800 text-lg" value={search} onChange={element => setSearch(element.target.value)} />
                    </div>
                </div> 
                : <></>
            }
        </nav>
    )
}