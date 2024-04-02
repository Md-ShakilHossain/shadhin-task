import { Link } from "react-router-dom";


const Navbar = () => {

    const navList = <>
        <ul className="flex justify-evenly">
            <Link to={`/home1`}><li>Home1</li></Link>
            <Link to={`/home2`}><li>Home2</li></Link>
        </ul>


    </>

    return (
        <div className="bg-blue-400">
            {
                navList
            }
        </div>
    );
};

export default Navbar;