import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>Home Page</div>
            <Link to={'/about'}>LINK KE ABOUT PAGE</Link>
        </>
    )
}