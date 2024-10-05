import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Spinner from '../Spinner';
import { Link } from "react-router-dom";

export default function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3000/api/books/${id}`).then((res) => {
      console.log(res.data.book);
      setBook(res.data.book);
      setLoading(false)
    })
  }, [])
  return (
    <div>
      {
        loading ? (<Spinner />) : (
          <div>
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
            <Link to={`/books/edit/${book._id}`}>
              edit
            </Link>
          </div>
          
        )
      }
    </div>
  )
}
