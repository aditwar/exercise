import { Link } from "react-router-dom"


function Navbar() {
    const nama = "Aditya Wardana" // ini cara buat var dan dipanggil dengan {}
    return (
        <div>
            <h2>{nama}</h2>
            <ul className="flex-1 text-right ">
                <li><Link to={'/'}> Home </Link></li>
                <li><Link to={'/about'}> About </Link></li>
                <li><Link to={'/portfolio'}> Portfolio </Link></li>
            </ul>
        </div>
    )
}
export default Navbar