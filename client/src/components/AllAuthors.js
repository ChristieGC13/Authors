import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [author, setAuthor] = useState({});
    const [addLikeClicked, setAddLikeClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res)
                setAllAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [addLikeClicked,deleteClicked])

    const addLike = (e, author) => {
        
        console.log("Trying to give a like to author:", author);
        author.likes += 1;
        axios.put(`http://localhost:8000/api/authors/${author._id}`, author)
            .then(res => {
                if (res.data) {
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
            setAddLikeClicked(!addLikeClicked)
    }

    const deleteAuthor = (e, authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(response => {
                console.log(response)
                setDeleteClicked(!deleteClicked);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mt-5">
            <p className="mt-3">We have quotes by:</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><Link to={`/authors/${author._id}`} >{author.name}</Link></td>
                                    <td>{author.likes}</td>
                                    <td>
                                        <button className="btn btn-outline-warning" onClick={(e) => addLike(e, author)}>Add Like</button>
                                        <Link to={`/authors/edit/${author._id}`} className="btn btn-outline-primary ml-2 mr-2">Edit</Link>
                                        <Link onClick= {(e)=>deleteAuthor(e,author._id)} to="#" className="btn btn-outline-danger" >Delete</Link>
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