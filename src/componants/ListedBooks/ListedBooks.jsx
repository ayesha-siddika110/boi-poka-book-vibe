import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../../utilities/addtoDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleBook from '../Home/singleBook';
import Card from '../Home/Card';


const ListedBooks = () => {
    const data = useLoaderData()
    // console.log(data);
    const [readlist, setReadList] = useState([])
    const [wishlist, setWishList] = useState([])

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = data.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)
    }, [])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        const wishBookList = data.filter(book => storedWishListInt.includes(book.bookId))
        setWishList(wishBookList)
    }, [])

    return (
        <div>

            <Tabs className={`w-[90%] m-auto`}>
                <TabList>
                    <Tab>Read List  ( {readlist.length} )</Tab>
                    <Tab>Wish List  ( {wishlist.length} )</Tab>
                </TabList>

                <TabPanel>
                    {/* <h2>{readlist.length}</h2> */}
                    <div className='mt-8 grid grid-cols-3 gap-8'>

                    {
                        readlist.map(book => <Card card={book}></Card>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* <h2>{wishlist.length}</h2> */}
                    <div className='mt-8 grid grid-cols-3 gap-8'>
                    {
                        wishlist.map(book => <Card card={book}></Card>)
                    }
                    </div>

                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;