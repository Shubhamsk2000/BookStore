import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function CreateBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleSaveBook = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear
    }
    axios.post('http://localhost:3000/api/add', data).then(() => {
      setLoading(false);
      navigate('/');
    }).catch((error) => {
      alert("An erro occured ", error.message);
      console.log(error.message);
    })
  }
  return (
    <div>
      {
        loading ? (<Spinner />) : (
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
              onClick={handleSaveBook}>Save Book</button>
          </div>
        )
      }
    </div>
  )
}
