import React from 'react';
import img from "../../assets/book.png"
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const HomeCenter = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className='w-[90%] m-auto'>
            <div className='bg-red-50  rounded-2xl flex items-center h-[500px] justify-between'>
                <div className='pl-28 space-y-11'>
                    <h1 className='text-6xl font-semibold '>Books to freshen up <br />your bookshelf</h1>
                    <button className='border-2 border-white bg-green-500 hover:border-green-300 hover:bg-white ease-in hover:text-black py-3 px-4 rounded-xl text-white font-semibold'>View the list</button>
                </div>
                <div className='pr-28'>
                    <img className='h-[400px]' src={img} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-semibold text-center py-16'>Books</h1>
            </div>
            <div className='grid grid-cols-3 gap-8'>

                {
                    data.map(card => <Card card={card}></Card>)
                }
            </div>




        </div>
    );
};

export default HomeCenter;