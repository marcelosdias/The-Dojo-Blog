import { useEffect, useState } from 'react'
import axios from 'axios'

import BlogList from '../../component/BlogPreview'

import './styles.css'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    // Refatorar funcao
    useEffect(() => {
        axios.get('http://localhost:8001/blogs')
            .then(response => { setBlogs(response.data) })
    }, [])

    return (
        <div className='home'>
            <BlogList blogs = { blogs }/>
        </div>
    )
}

export default Home