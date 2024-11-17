import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <div>About Page</div>
            <Link to={'/'}>LINK KE HOME PAGE</Link> {/* LINK jika diKLIK akan mengarah ke alamat tsb */}
        </>
    )
}