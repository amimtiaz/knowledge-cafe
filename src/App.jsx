
import { useState } from 'react'
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import Bookmarks from './componets/Bookmarks/Bookmarks'
import Header from './componets/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time)
  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </div>

  )
}

export default App
