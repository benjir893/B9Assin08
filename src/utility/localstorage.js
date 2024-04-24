// get the browser data from temporary browser storage
const getStoredBooks = () =>{
    const readBook = localStorage.getItem(`read_Books`);
    if(readBook){
        return JSON.parse(readBook);
    }
    return [];
}
//save info if not saved already
const saveReadBood = id=>{
    const savedReadBooks = getStoredBooks();
    const existedReadBoodName  = savedReadBooks.find(bookid =>bookid===id);
    if(!existedReadBoodName){
        savedReadBooks.push(id);
        localStorage.setItem(`read_Books`,JSON.stringify(savedReadBooks))
    } 
}

const getStoredwBooks = () =>{
    const readBook = localStorage.getItem(`wish_Books`);
    if(readBook){
        return JSON.parse(readBook);
    }
    return [];
}
//save info if not saved already
const savewishBood = id=>{
    const savedReadBooks = getStoredBooks();
    const existedReadBoodName  = savedReadBooks.find(bookid =>bookid===id);
    if(!existedReadBoodName){
        savedReadBooks.push(id);
        localStorage.setItem(`wish_Books`,JSON.stringify(savedReadBooks))
    } 
}
export {getStoredBooks, saveReadBood,getStoredwBooks,savewishBood}