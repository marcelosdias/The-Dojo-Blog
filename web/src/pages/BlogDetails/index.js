import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import useFetch from '../../helper/useFetch'

import './styles.css'

const BlogDetails = () => {
    const { id: blogId } = useParams()
    const navigate = useNavigate()

    const blogSelected = useFetch(`http://localhost:8001/blogs/${blogId}`)

    function handleDelete () {
        axios.delete(`http://localhost:8001/blogs/${blogId}`)
            .then(() => { navigate('/') })
    }
    
    return ( 
        <div className="blog-details">
            { blogSelected && (
                <article>

                    <h2>{ blogSelected.title }</h2>
                    <p>Written by { blogSelected.author }</p>
                    <p>{ blogSelected.body }</p>

                    <button onClick={ handleDelete }>Delete</button>
                    
                </article>
            )}
        </div>
    )
}

export default BlogDetails