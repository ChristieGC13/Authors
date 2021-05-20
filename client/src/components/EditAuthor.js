import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const EditAuthor = (props) => {
    const [inputs, setInputs] = useState({
        name:""
    })
    const [errors,setErrors] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => {
            console.log("***********", res);
            setInputs(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const onChange = e => {
        // e.target.type == "checkbox" ?
        //     setInputs({
        //         ...inputs,
        //         [e.target.name] : e.target.checked
        //     }) :
            setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${props.id}`, inputs)
            .then(res => {
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }else{
                    setErrors(res.data)
                }
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="container">
            <Link to="/" className="btn btn-outline-info float-right mr-5">Home</Link>
            {error ? 
                <>
                    <h1>We're sorry, we couldn't find the author you are looking for.</h1>
                    <p>Would you like to add an author to our database?</p>
                    <Link to="/authors/new">Add an Author</Link>
                </> : 
                <>
                    <h2 className="mt-5">Edit Author</h2>
                    <form onSubmit= { onSubmit }>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name:</label>
                            <input type="text" name="name"  onChange= { onChange } className="form-control" value={inputs.name}/>
                            <p className="text-danger">{errors.name? errors.name.message: ""}</p> 
                        </div>
                        {/* <div className="form-group">
                            <label className="form-label" htmlFor="name">Name:</label>
                            <input type="checkbox" name="name" className="form-control" onChange= { onChange } checked={inputs.isVeteran} value={inputs.isVeteran}/>
                        </div> */}
                        <input type="submit" className="btn btn-success" value="Update Author"/>
                    </form>
                    </>
            }
        </div>
    );
};


export default EditAuthor;