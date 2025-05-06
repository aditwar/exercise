import CreateForms from "@/form/createForms";
import { Metadata } from "next";

export const metadata: Metadata = {

    // susunan nya sesuai di title ini
    title: "Event Commerce | Create Event",
    description: "create all events"
}

export default function CreateEvent() {
    return (
        <div>

            {/* Ini dipanggil dari folder component pada file createForm.tsx yg sudah diEXPORT */}
            <CreateForms />
        </div>
    )
}