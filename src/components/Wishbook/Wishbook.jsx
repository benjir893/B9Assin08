import { Link } from "react-router-dom";


const Wishbook = ({book}) => {
    const {bookId,bookName,author,image} = book;
    return (
        <div>
            <h2>{bookId}</h2>
            <h2>{bookName}</h2>
            <h2>{author}</h2>
            <div className="">
                <Link to={`/rwbooks/${bookId}`}><button>Wishbook details</button></Link>
            </div>
        </div>
    );
};

export default Wishbook;