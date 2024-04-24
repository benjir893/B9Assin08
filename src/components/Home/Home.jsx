import { Link } from "react-router-dom";
import ListedBooks from "../ListedBooks/ListedBooks";


const Home = () => {
    return (
        <div>
            <div className="max-w-6xl p-10 grid grid-cols-2 gap-2 items-center content-center">
                <div className="ml-10 text-left">
                    <h2 className="text-3xl text-orange-600 font-bold my-9">Find the Peace of your Mind in Reading Books <br /> See Our Collection yourself</h2>
                    <Link to={'/listedbooks'}><button className="p-3 font-semibold border rounded-md bg-orange-500 text-white hover:bg-green-300 hover:text-red-600">View Book List</button></Link>
                    
                </div>
                <div className="items-end text-right pl-16">
                    <img src={`https://i.ibb.co/Wc4BgcL/animalbooks.jpg`} alt="" />
                </div>
            </div>
            <ListedBooks></ListedBooks>

        </div>
    );
};

export default Home;