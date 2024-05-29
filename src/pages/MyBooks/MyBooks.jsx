import { Button, Card, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.css"

const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async () => {
        try {
            const result = await axios.get("https://api-v2.elchocrud.pro/api/v1/f880a39e4d34450c1d6ca7046609aa32/bookstore");
            setMyBooks(result.data);
            console.log(result.data);
        }
        catch (e) { }
    }
    return (
        <div style={{ width: '1200px', margin: 'auto' }}>
            <p style={{ marginTop: 20, marginBottom: 20, fontSize: 28, fontWeight: 'normal' }}>Занятые книги</p>
            {myBooks.length ? (
                <div className='book-list'>
                    {myBooks.map((item, index) => {
                        return (
                            <Card key={index}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 380 }}>
                                    <img style={{ width: '100%', height: 250, borderRadius: 5 }} src={item.cover} alt="" />
                                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</p>
                                    <p style={{ fontSize: 15 }}>{item.author}</p>
                                    <Button type='primary' style={{ width: '100%' }}>Читать</Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', paddingBottom: 100 }}>
                    <Spin size='large' />
                </div>
            )}
        </div>
    );
}

export default MyBooks;
