import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

const Create = () => {
    const [formData, setFormData] = useState({ title: '', body: '', author: 'mario' })

    const navigate = useNavigate()

    function handleInputChange(event) {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        axios.post('http://localhost:8001/blogs', formData)

        navigate('/')
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog Title</label>
                <input 
                    type="text" 
                    name="title"
                    onChange={ handleInputChange }
                    required
                />

                <label htmlFor="body">Blog Body</label>
                <textarea 
                    name="body"
                    onChange={ handleInputChange }
                    required
                ></textarea>

                <label htmlFor="author">Blog Author</label>
                <select 
                    htmlFor="author" 
                    id="author"
                    onChange={ handleInputChange }
                    required
                    >
                    <option value='mario'>Mario</option>
                    <option value='yoshi'>Yoshi</option>
                </select>

                <button>Add New Blog</button>

            </form>

        </div>
    )
}

export default Create