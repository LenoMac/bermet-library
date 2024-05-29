import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import { toast } from 'react-toastify';
import { Button, notification } from 'antd';
import { useGlobalContext } from '../../context.';

const Book = (book) => {

  const [api, contextHolder] = notification.useNotification();
  const { setBookStore, bookStore, uploadBooks } = useGlobalContext()
  const occupyBook = async () => {
    try {
      await uploadBooks()
      api.info({
        message: book.title,
        description: 'Книга занята!',
        placement: 'top'
      })
      setBookStore(book)
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='book-item flex flex-column flex-sb'>
      {contextHolder}
      <div className='book-item-img'>
        <img src={book.cover_img} />
      </div>
      <Link to={`/book/${book.id}`} {...book}>
        <div className='book-item-info text-center'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>

          <div className='book-item-info-item author fs-15'>
            <span className='text-capitalize fw-7'>Author: </span>
            <span>{book.author.join(", ")}</span>
          </div>

          <div className='book-item-info-item edition-count fs-15'>
            <span className='text-capitalize fw-7'>Total Editions: </span>
            <span>{book.edition_count}</span>
          </div>

          <div className='book-item-info-item publish-year fs-15'>
            <span className='text-capitalize fw-7'>First Publish Year: </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </Link>
      <div style={{
        display: 'flex',
        gap: 10,
        marginTop: 10
      }}>
        {/* <button className='btn-primary'>Читать</button> */}
        <Button type='primary'>Читать</Button>
        <Button onClick={() => occupyBook(book.id)} type='default'>Занять</Button>
      </div>
    </div>
  )
}

export default Book