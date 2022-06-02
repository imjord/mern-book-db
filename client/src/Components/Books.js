import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Axios from 'axios'

const Books = () => {


    // get books from /api
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get('http://localhost:3000/api').then(res => { 
            console.log(res);
            setBooks(res.data)
            setIsLoading(false)
        })
    }, [])


    // delete book  
    const handleDelete = (id) => {
        
        Axios.delete(`http://localhost:3000/api/${id}`).then(res => {
            console.log(res);
            setBooks(books.filter(book => book._id !== id))
        })
        
    }




  return isLoading ? (<p>Loading...</p>) : (<div><Navbar/> <div className='container'>
                    <div className='row'>
                    <h1>Books</h1>
                        <div className='col-md-12'><table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => (
                                        <tr key={book._id}>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.description}</td>
                                            <td>
                                                <button className='btn btn-sm btn-warning mr-1' onClick={() => console.log('clicked') }>Edit</button>
                                                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(book._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            
                        </div>
                        </div>
                        </div>
                        </div>
  )}


export default Books