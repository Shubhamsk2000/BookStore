import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function NavigationBar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-20 py-4 border">
        <Link to={'/'} className="flex items-center justify-center gap-2">
            <img className='w-24 max-w-28' src={logo} alt="Logo" />
            <p className='text-lg font-semibold'>Knowledge</p>
        </Link>
        <ul className="flex flex-row gap-8 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books/create">Add Book</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
