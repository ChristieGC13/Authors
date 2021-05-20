import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const CreateAuthor = () => {

    const [inputs, setInputs] = useState({
        name:""
    })
    const [errors,setErrors] = useState({})

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
        axios.post("http://localhost:8000/api/authors", inputs)
            .then(res => {
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }else{
                    setErrors(res.data.errors)
                }
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="container">
            <Link to="/" className="btn btn-outline-info float-right mr-5">Home</Link>
            <h2 className="mt-5">Add a new author</h2>
            <form onSubmit= { onSubmit }>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input type="text" name="name"  onChange= { onChange } className="form-control"/>
                    <p className="text-danger">{errors.name? errors.name.message: ""}</p> 
                </div>
                {/* <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input type="checkbox" name="name" className="form-control" onChange= { onChange } checked={inputs.isVeteran} value={inputs.isVeteran}/>
                </div> */}
                <input type="submit" className="btn btn-success" value="Add Author"/>
            </form>
        </div>
    );
};

export default CreateAuthor;