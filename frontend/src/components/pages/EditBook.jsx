import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
export default function EditBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/api/books/${id}`).then((res) => {
      console.log("alla re", res.data.book);
      setTitle(res.data.book.title);
      setAuthor(res.data.book.author);
      setPublishYear(res.data.book.publishYear);
      setLoading(false);
    })
  }, [])

  const handleEdit = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear
    }
    axios.put(`http://localhost:3000/api/books/${id}`, data).then(() => {
      setLoading(false);
      navigate('/');
    }).catch((error) => {
      alert("An erro occured ", error.message);
      console.log(error.message);
    })
  }
  return (
    <>
      {
        loading ? (<Spinner />) : <div>
          <div className="flex flex-col w-1/2 p-20 m-auto border border-red-600">
            <label htmlFor="title">Title</label>
            <input className="bg-slate-200" type="text" name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="author">Author</label>
            <input type="text" name="author"
              className="bg-slate-200"
              value={author}
              onChange={(e) => setAuthor(e.target.value)} />

            <label htmlFor="publishYear">Publish Year</label>
            <input type="number"
              className="bg-slate-200"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)} />
            <button
              className="border border-black hover:bg-black hover:text-white"
              onClick={handleEdit}>Save Changes</button>
          </div>
        </div>
      }
    </>

  )
}
