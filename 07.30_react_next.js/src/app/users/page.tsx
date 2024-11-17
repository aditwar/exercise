// ini karena didalam folder users maka dapat diakses (ROUTER) dalam folder dengan alamat "/users"
import Link from "next/link";
import { IUser } from "../type";
import { Metadata } from "next";

// ini untuk export metadata yg ditampilkan di TITLE TAB BROWSER
export const metadata: Metadata = {

    // susunan nya sesuai di title ini
    title: "My App | users",
    description: "list all users"
}

// FUNCTION untuk FETCHING (GET) DATA dri SERVER menggunakan async
async function getData() {

    // Ini alamat dari JSON SERVER
    const res = await fetch("http://localhost:2000/user", {
        // ini biar data yg ditampilkan OTO terbaruhi CACHING, jika diubah oleh user (User on Demand)
        next: { tags: ["users"] }
    })

    // ini untuk menangkap ERROR
    if (!res.ok) {
        throw new Error ('Failed to fetch data')
    }

    return res.json()
}

export default async function UsersPage() {

    // data ini menggunakan tipe data dari IUser ARRAY
    const data: IUser[] = await getData()
    return (
        <div className="flex w-full flex-col items-center">
            {
                // ini hanya dimapping [] per item
                data.map ((item) => {
                    return (

                        // agar tidak ERROR diberi key={} dibuat secara unique
                        // ${item} agar menunjuk pada item di ARRAY sesuai namanya
                        <Link href={`/users/${item.id}`} key={item.id}>{item.name}</Link>
                    )
                })
            }
        </div>
    )
}