import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Readbook = ({readbook}) => {
    const {bookId,image,bookName,author,category,rating} =readbook;
    return (
        <div>
             <div className="mx-5 my-5">
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure className='p-5'><img className='w-[300px] h-[300px] rounded-lg' src={image} alt="Shoes" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">{bookName}</h2>
                            <h2 className="font-semibold">By: {author}</h2>
                            <p className='w-full flex gap-8'><span className='mr-5 pr-6'>{category}</span><span className='flex items-center ml-10 pl-16'>{rating} <CiStar /></span></p>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

Readbook.propTypes = {
    readbook: PropTypes.object
}
export default Readbook;