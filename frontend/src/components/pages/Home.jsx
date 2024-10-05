import axios from 'axios';
import Spinner from '../Spinner';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import temp from '../../assets/temp.jpg'
export default function Home() {
  const [books, setBooks] = useState([
    // {
    //   "_id": "66fd3d8dc0aa469f73fe0439",
    //   "title": "The Great Gatsby",
    //   "author": "F. Scott Fitzgerald",
    //   "publishYear": "1925",
    //   "createdAt": "2024-10-02T12:33:17.377Z",
    //   "updatedAt": "2024-10-02T12:33:17.377Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "66fd3d8dc0aa469f73fe0439",
    //   "title": "The Great Gatsby",
    //   "author": "F. Scott Fitzgerald",
    //   "publishYear": "1925",
    //   "createdAt": "2024-10-02T12:33:17.377Z",
    //   "updatedAt": "2024-10-02T12:33:17.377Z",
    //   "__v": 0
    // }, {
    //   "_id": "66fd3d8dc0aa469f73fe0439",
    //   "title": "The Great Gatsby",
    //   "author": "F. Scott Fitzgerald",
    //   "publishYear": "1925",
    //   "createdAt": "2024-10-02T12:33:17.377Z",
    //   "updatedAt": "2024-10-02T12:33:17.377Z",
    //   "__v": 0
    // }
  ]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/api/books').then((res) => {
      console.log(res.data);
      setBooks(res.data.data);
      setLoading(false);
    }).catch((error) => {
      console.log("s", error.message);
      setLoading(false);
    })
    console.log(books)
  }, [])

  useEffect(()=>{
    window.localStorage.setItem("books", books.toString());
  },[setBooks, books])

  return (
    <div className='p-8 mx-12'>
      {
        loading ? (<Spinner />) : (
          <div className='grid grid-cols-4 gap-12'>
            {
              books?.map((book, index) => (
                <div className='w-full p-4 border rounded-3xl border-red' key={index}>
                  <div className='flex w-full md:flex-row'>
                    <div className='aspect-[14/16] w-1/2'>
                      <img className='object-cover h-full rounded-xl' src={book.img ? book.img : temp} alt="" />
                    </div>
                    <div className='py-4 ps-4'>
                      <h1 className='mb-2 text-xl'>{book.title}</h1>
                      <Link to={`/books/details/${book._id}`}>Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>)
      }
    </div>
  )
}
