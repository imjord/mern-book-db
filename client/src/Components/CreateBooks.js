import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);

   
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:3000/api', {
            title,
            author,
            description
        }).then(res => {
            console.log(res);
            setIsLoading(false);
        })
    }


  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Create Book</h1>
                    <form>
                        <div className='form-group'>
                            <label>Title</label>
                            <input type='text' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label>Author</label>
                            <input type='text' className='form-control' value={author} onChange={(e) => setAuthor(e.target.value)} />
                            <label>Description</label>
                            <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                            <button className='btn btn-primary' onClick={() => setIsLoading(true)}>Create</button>
                            </div>  
                          
                    </form>
                    </div>
                    </div>
                    </div>
        </div>
  )
}

export default CreateBooks