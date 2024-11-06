import { parse } from 'postcss';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utilities/addtoDb';

const SingleBook = () => {
    const data = useLoaderData()
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image,author, bookName, category, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;
    console.log(id);


    // console.log(typeof image);
    const handleToReadList = (id)=>{
        addToStoredReadList(id)

    }
    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }

    return (
        <div className='w-[90%] m-auto flex'>
            <div className='bg-red-50 w-[40%] rounded-3xl  flex items-center justify-center'>
                <img className='h-[450px]' src={image} alt="" />
            </div>
            <div className='w-[60%] px-10 space-y-3'>
                <h1 className='text-3xl font-semibold'>{bookName}</h1>
                <p className='font-bold text-gray-600'>{author}</p>
                <p className='border-y py-3 font-semibold'>{category}</p>
                <p><span className='font-bold'>review : </span><p className='text-gray-500 text-justify'>{review}</p></p>
                <div className='flex items-center space-x-4 border-y py-3'>
                    <p className='text-lg font-semibold'>Tags</p>
                    {
                        tags.map(tag=> <p className='bg-green-50 py-1 px-3 rounded-lg text-green-500'>#{tag}</p>)
                    }
                </div>
                <div className='space-y-2'>
                    <p>Number of Pages :  &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'>{totalPages}</span></p>
                    <p>Publisher : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-semibold'>{publisher}</span></p>
                    <p>Year of Publishing :&nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'>{yearOfPublishing}</span></p>
                    <p>Rating : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'>{rating}</span></p>
                </div>
                <div className='space-x-5'>
                    <button onClick={()=>handleToReadList(bookId)} className={`py-3 font-semibold px-4 border-2 hover:bg-sky-400 hover:text-white rounded-lg`}>Read</button>
                    <button  onClick={()=>handleAddToWishList(bookId)} className={`py-3 font-semibold px-4 border-2 hover:bg-sky-400 hover:text-white rounded-lg`}>Watchlist</button>
                </div>

            </div>
            

        </div>
    );
};

export default SingleBook;