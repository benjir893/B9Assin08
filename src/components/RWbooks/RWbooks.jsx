import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link, json, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBooks,getStoredwBooks,saveReadBood } from "../../utility/localstorage";
import Wishbook from "../Wishbook/Wishbook";

const RWbooks = () => {
    const books = useLoaderData();
    const readlist = getStoredBooks();
    const wishlist = getStoredwBooks();
    const [readbook, setreadbook] = useState(readlist)
    const [wishlistbook, setwishlist] = useState(wishlist)
    const {id} = useParams();
    const intId = parseInt(id);
    const book = books?.find(book =>book.bookId ===intId)
    // useEffect(() =>{
    //     const readlist = JSON.parse(localStorage.getItem(saveReadBood))
    // },[])
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div className="mx-5 my-5">
                     {/* <div className="card card-compact w-auto bg-base-100 shadow-xl">
                         <figure className='p-5'><img className='w-[300px] h-[300px] rounded-lg' src={book.image} alt="Shoes" /></figure> 
                        <div className="card-body text-left">
                            <h2 className="card-title">{book.bookName}</h2>
                            <h2 className="font-semibold">By: {book.author}</h2>
                            <p className='w-full flex gap-8'><span className='mr-5 pr-6'>{book.category}</span><span className='flex items-center ml-10 pl-16'>{book.rating} <CiStar /></span></p>
                            
                        </div> 
                    </div> */}
                </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                      wishlistbook.map(book =><Wishbook key={book.id} book={book}></Wishbook>)  
                    }
                    </div>
            </div>
        </div>
    );
};
RWbooks.propTypes = {
    book: PropTypes.object
}
export default RWbooks;