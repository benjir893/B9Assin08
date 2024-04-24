import { useLoaderData, useParams } from "react-router-dom";


const WishbookDetails = () => {
    const wishlistbook = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const wishbook = wishlistbook?.find(wishbook => wishbook.id === idInt);
    // console.log(wishbook);

    return (
        <div>
            <h2>{wishbook.bookName}</h2>
        </div>
    );
};

export default WishbookDetails;