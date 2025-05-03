// ini karena didalam folder events maka dapat diakses (ROUTER) dalam folder dengan alamat "/events"
import Link from "next/link";
import { IEvent } from "../type";
import { Metadata } from "next";

// ini untuk export metadata yg ditampilkan di TITLE TAB BROWSER
export const metadata: Metadata = {

    // susunan nya sesuai di title ini
    title: "Event Commerce | Explore Events",
    description: "list all events"
}

// FUNCTION untuk FETCHING (GET) DATA dri SERVER menggunakan async untuk ditampilkan di UI UX
async function getData() {

    //! PERHATIKAN INI URL BACKEND (.env.local), Ini alamat untuk dikirim dari JSON SERVER
    const res = await fetch("http://localhost:1000/events", {
        // ini biar data yg ditampilkan OTO terbaruhi CACHING, jika diubah oleh user (User on Demand) FIX
        next: { tags: ["users"] }
    })

    // ini untuk menangkap ERROR
    if (!res.ok) {
        throw new Error ('Failed to fetch data')
    }

    return res.json()
}

export default async function EventsPage() {

    // data ini menggunakan tipe data dari IUser ARRAY
    const data: IEvent[] = await getData()
    return (
        <div className="flex w-full flex-col items-center">
            {
                // ini hanya dimapping [] per item
                data.map ((item) => {
                    return (

                        // agar tidak ERROR diberi key={} dibuat secara unique
                        // ${item} agar menunjuk pada item di ARRAY sesuai namanya
                        <Link href={`/events/${item.id}`} key={item.id}>{item.name}</Link>
                    )
                })
            }
        </div>
    )
}