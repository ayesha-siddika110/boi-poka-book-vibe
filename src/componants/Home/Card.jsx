import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    console.log(card);
    const { author, bookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = card

    return (
        <div className='border p-6 rounded-2xl space-y-2 shadow-lg'>
            <Link to={`/book/${bookId}`}>
            <div className='h-[300px] rounded-2xl bg-red-50 p-6'><img className='flex h-[250px] m-auto justify-center items-center' src={image} alt="" /></div>
            <div className='border-b-2 border-dashed space-y-2 pb-3'>
                <div className='flex pt-3'>

                    {
                        tags.map(tag => <div className='bg-red-50 mr-5 py-1 px-2 rounded-xl text-sm text-green-500 font-semibold'>{tag}</div>)
                    }
                </div>
                <h1 className='text-2xl font-semibold '>{bookName}</h1>
                <div className='flex flex-col'>

                <p className='text-gray-800 flex-grow font-semibold'>by : {author}</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>

                <h1>{category}</h1>
                <p className='flex items-center'>{rating} <CiStar className='text-xl ml-2 text-orange-500'/></p>
            </div>
            </Link>


        </div>
    );
};

export default Card;