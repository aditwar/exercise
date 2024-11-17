import axios from "axios"
import { useEffect, useState } from "react";
import { IUser } from "../type";

export default function Users() {

    // useState ini memiliki tipe data OBJ <IUser[]>, krn OBJ maka menggunakan [] ARRAY, yang didefinisikan users 
    const [users, setUsers] = useState<IUser[]>([])

    // getData akan memanggil axios dari http...
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:2000/user") // http ini sesuaikan di Endpoints saat membuat API
            // jadi setelah mengambil dari API trus ditaruh di STATE setUsers berisi res.data
            setUsers(res.data)
            
        } catch (err) {
            console.log(err);            
        }
    }

    useEffect(() => {

        // getData akan dipanggil ketika pertama kali render "[]", getData itu 
        getData()
    }, [])

    return (
        <div className="flex justify-center">            
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (
                                // key={} hanya memberi keyword sja biar Unique dan tidak error
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}