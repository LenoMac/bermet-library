import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([]);
    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async () => {
        try {
            const result = await axios.get("https://api-v2.elchocrud.pro/api/v1/f880a39e4d34450c1d6ca7046609aa32/bookstore")
            const data = result.data
            setMyBooks(data)
            console.log(data);
        }
        catch (e) { }
    }
    return (
        <div>
            <p>Мои книги</p>
            {myBooks.map((item, index) => {
                <Card>
                    <p>{item.title}</p>
                </Card>             
            })}
        </div>
    );
}

export default MyBooks;
