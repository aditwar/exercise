import CreateForm from "@/components/createForm";
import { Metadata } from "next";

export const metadata: Metadata = {

    // susunan nya sesuai di title ini
    title: "My App | Create",
    description: "list all users"
}

export default function CreateUser() {
    return (
        <div>

            {/* Ini dipanggil dari folder component pada file createForm.tsx yg sudah diEXPORT */}
            <CreateForm />
        </div>
    )
}