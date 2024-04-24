import { useEffect, useState } from "react";
import Book from "../Book/Book";
import RWbooks from "../RWbooks/RWbooks";


const ListedBooks = () => {
    const [books, setBooks] = useState([]);
    const [datalength, setDatalength] = useState(6);

    const handleShowall=()=>{
        setDatalength(books.length)
    }

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    return (
        <div>
            <div className="my-4">
                <h2 className="text-2xl font-bold">BOOKS</h2>
                <div className="md:grid grid-cols-3 gap-3">
                    {books.map(book => <Book key={book.id} book={book}></Book>)}
                </div>
            </div>
            <div className={datalength === books.length ? 'hidden':''}><button onClick={handleShowall} className=" bg-orange-500 p-3 text-white">Show All</button></div>
            <RWbooks></RWbooks>
        </div>
    );
};

export default ListedBooks;