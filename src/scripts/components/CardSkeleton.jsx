import { Link } from "react-router-dom"

export default function CardSkeleton() {
    return (
        <div className={`flex shadow-sm flex-1 flex-wrap flex-col border-2 gap-2 border-neutral-800 border-l-4 w-auto rounded-md duration-100`}>
                <Link className="flex-1">
                    <div className="flex flex-col space-y-2 p-4 pl-6">
                        <div className="flex flex-row w-full mb-2">
                            <div className="flex flex-row min-w-max mr-4 rounded-full bg-neutral-700 animate-pulse w-20 h-8"></div>
                            <span className="text-2xl rounded-full bg-neutral-700 animate-pulse w-28 h-8"></span>
                        </div>
                        <span className="text-[16px] rounded-full bg-neutral-700 animate-pulse w-60 h-4"></span>
                        <span className="text-[14px] rounded-full bg-neutral-700 animate-pulse w-24 h-4"></span>
                    </div>
                </Link>
        </div>
    )
}