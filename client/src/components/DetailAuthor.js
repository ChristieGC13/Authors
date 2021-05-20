import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const DetailAuthor = (props) => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => {
            console.log("***********", res);
            setDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to="/" className="btn btn-outline-info float-right mr-5">Home</Link>
                <h1 className="mt-5">Deets for {details.name}</h1>
                <p>Id: {details._id}</p>
                <p>Likes: {details.likes}</p>
        </div>
    )

}

export default DetailAuthor;