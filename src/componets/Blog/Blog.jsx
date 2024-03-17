import PropTypes from 'prop-types';
import { FiBookmark } from "react-icons/fi";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    console.log(blog);

    const {title, cover,author, author_img, reading_time,posted_date, hashtags} = blog;

    return (

        <div className='mb-20'>
            <img className=' w-full h-80 ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mt-8 mb-4'>
                    <img className='w-12 h-12 rounded-full mr-4' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='items-center mt-4'>
                    <span>{reading_time} min read</span> 
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-4 text-xl'><FiBookmark /></button>
                </div>
            </div> 
            <h2 className='text-4xl font-bold mb-2'> {title} </h2>
            <p>{hashtags}</p>
            <h4 onClick={() => handleMarkAsRead(reading_time)} className='text-cyan-800 underline font-bold cursor-pointer'>Mark as read </h4>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;