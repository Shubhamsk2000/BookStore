import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CreateBook, DeleteBook, EditBook, Home, NavigationBar, ShowBook } from "./components/index"
export default function App() {
  return (
    <>
      <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books/create" element={<CreateBook/>} />
          <Route path="/books/details/:id" element={<ShowBook/>} />
          <Route path="/books/edit/:id" element={<EditBook/>} />
          <Route path="/books/delete/:id" element={<DeleteBook/>} />
        </Routes>
      </Router>
    </>
  )
}



