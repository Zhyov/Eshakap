export default function Navbar({ search, setSearch }) {
    return (
        <nav className="h-18 sticky top-0 z-1 backdrop-blur flex flex-nowrap flex-row justify-around items-center w-full bg-dark/40 shadow-md border-b-1 border-b-neutral-800" >
            <div className="flex flex-nowrap flex-row basis-auto gap-x-3">
                <a href="/Eshakap/">
                    <img src="./assets/title.svg" alt="logo" className="size-16 gapx-2 self-center invert" />
                </a>
            </div>
            <div className="flex flex-nowrap flex-row justify-end basis-7/10 md:basis-9/10 gap-x-2">
                <input type="text" placeholder="Oliňazä amijąç'ka" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center pl-3 pr-3 pt-1.5 pb-1.5 align-middle rounded-md border-1 border-neutral-800 text-lg" value={search} onChange={element => setSearch(element.target.value)} />
            </div>
        </nav>
    )
}