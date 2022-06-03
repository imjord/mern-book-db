import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import './comp.css'

const Books = () => {


    // get books from /api
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get('/api').then(res => { 
            console.log(res);
            setBooks(res.data)
            setIsLoading(false)
        })
    }, [])


    // delete book  
    const handleDelete = (id) => {
        
        Axios.delete(`/api/${id}`).then(res => {
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
                                        <tr  key={book._id}>
                                            <td style={{color: 'white'}}>{book.title}</td>
                                            <td style={{color: 'white'}}>{book.author}</td>
                                            <td style={{color: 'white'}}>{book.description}</td>
                                            <td>
                                              
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