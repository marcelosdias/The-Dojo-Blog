import { Link } from 'react-router-dom'

import './styles.css'

const Home = () => {
    return (
        <header>
            <h1>The Dojo Blog</h1>

            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
            </div>

        </header>
    )
}

export default Home