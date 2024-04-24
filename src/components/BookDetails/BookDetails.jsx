import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {saveReadBood,savewishBood,getStoredBooks} from '../../utility/localstorage'


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const book = books?.find(book =>book.bookId ===intId)

    const handlToast = ()=>{
        saveReadBood(intId)
        toast(`You have read this book successfully`);
        <Link to={`/rwbooks/${id}`}></Link>
    }

    const handlWishlistToast=()=>{
        if(!getStoredBooks().find(item => item == intId)){
            savewishBood(intId)
            toast(`Wish list added successfully`);
        }
        return `The book is already read`;
    }

    return (
        <div>
            <div className="md:grid grid-cols-2 gap-3 items-center content-center">
                <div className="my-4"><img className="rounded-md w-[500px] h-[500px]" src={book.image} alt="" /></div>
                <div className="text-left my-4">
                    <h2 className="font-bold">{book.bookName}</h2>
                    <hr />
                    <h3 className="font-bold">{book.author}</h3>
                    <hr />
                    <h4 className="font-bold text-l">{book.category}</h4>
                    <p className="my-3"><span className="font-bold">Review: </span>{book.review}</p>
                    <p className="my-2"><span className="font-bold">Tags: </span><span className="bg-slate-300 p-2 mr-2 rounded-xl text-green-500"># {book.tags[0]}</span><span className="bg-slate-300 p-2 rounded-xl text-green-500"># {book.tags[1]}</span></p>
                    <hr />
                    <div className="">
                        <p className="">Number of Pages <span>{book.totalPages}</span></p>
                        <p className="">Publisher <span>{book.publisher}</span></p>
                        <p className="">Year of Publishing <span>{book.yearOfPublishing}</span></p>
                        <p className="">Rating <span>{book.rating}</span></p>
                    </div>
                    <div className="flex gap-3 my-3">
                        <button onClick={handlToast} className="p-2 mr-3 bg-green-500 rounded-md">Read</button>
                        <button onClick={handlWishlistToast} className="p-2 mr-3 bg-sky-400 rounded-md">wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;