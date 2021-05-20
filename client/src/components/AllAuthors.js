import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then( res => {
                console.log(res)
                setAllAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // const deleteAuthor = (e, authorId) => {
    //     axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
    //         .then(response => {
    //             console.log(response)
    //             navigate("/")
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="mt-5">
            <p className="mt-3">We have quotes by:</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        allAuthors.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><Link to={`/authors/${author._id}`} >{author.name}</Link></td>
                                    <td>
                                        <Link to={`/authors/${author._id}/edit`} className="btn btn-outline-primary">Edit</Link>
                                        <Link to={`/authors/${author._id} `}className="btn btn-outline-danger ml-2" >Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/authors/new" className="btn btn-info">Add an Author</Link>
        </div>
    );
};

export default AllAuthors;