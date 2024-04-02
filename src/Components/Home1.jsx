import Navbar from "../Navbar/Navbar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Home1 = () => {
    return (
        <div className="mt-20">
            <div className="flex gap-12 p-2">
                <div className="w-1/4 bg-slate-600 min-h-screen">

                </div>
                <div className="w-3/4 bg-yellow-500 min-h-screen">
                    <Navbar></Navbar>
                    <div className="flex gap-6 p-4">
                        <div className="w-1/2 bg-teal-500 min-h-screen">
                        <FaAngleLeft />
                        <FaAngleRight />
                        </div>
                        <div className="w-1/2 bg-orange-600 min-h-screen">

                            <div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home1;