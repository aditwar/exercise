import { IUser } from "@/app/type";
import Image from "next/image";

// ini biar saat FETCH DATA yang tampil DETAIL USER
async function getData(id: string) {

    // Ini alamat dari JSON SERVER
    const res = await fetch(`http://localhost:2000/user/${id}`, {
        // ini biar data yg ditampilkan OTO terbaruhi CACHING, jika diubah oleh user (User on Demand)
        next: { tags: ["users"] }
    })

    // ini untuk menangkap ERROR
    if (!res.ok) {
        throw new Error ('Failed to fetch data')
    }

    return res.json()
}

//! ini untuk DYNAMIC META DATA
export async function generateMetadata({ params }: {params: { id: string }}) {
    const data: IUser = await getData(params.id)

    return {
        title: `My App | ${data.name}`,
        description: 'Detail user ${data.name}'
    }
}

export default async function UserDetailPage({ params }: { params: { id: string }}) {
    // name ini sesuaikan nama folder nya [name]
    // { params } merupakan parameter ini untuk menangkap [name] yg DYNAMIC
    // { params }: { params } itu merupakan tipe data dari { params } berupa OBJ
    // { params }: { params:{name: string} } itu merupakan tipe dari params berupa nama yg merupakan string

    const data: IUser = await getData(params.id)

    return (
        <div>
            {/* params.name ini menyesuaikan folder nya [id] */}
            {/* ini menampilkan semua yg didalam {data} */}
            <h1>Detail User with ID : {params.id}</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Age: {data.age}</p>
            <Image />
        </div>
    )
}