import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex h-[60px] bg-teal-500 justify-center items-center gap-5">
            <Link href={'/'}>Home</Link>
            <Link href={'/events'}>Events</Link>
            <Link href={'/events/create'}>Create</Link>
            <Link href={'/about-us'}>About</Link>
        </div>
    )
}