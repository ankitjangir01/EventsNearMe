import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" })
    const onChange = (eve) => {
        setUser({ ...user, [eve.target.name]: eve.target.value });
    }

    const onClick = async () => {
        const response = await fetch('/api/auth/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'email': user.email,
                'password': user.password
            })
        });
        const json = await response.json();
        if (json.success === true) {
            toast.success("login success!", { autoClose: 2000 });
            localStorage.setItem('authToken', json.authToken);
            navigate(-1);
        }
        if (json.success === false) {
            toast.error("incorrect credentials", { autoClost: 2000 })
        }
    }

    return (
        <div className="signup-page text-center">
            <h1 className='text-align-right pt-4 text-dark'><strong>Create New Account or Sign In</strong></h1>
            <hr />
            <div className="d-flex justify-content-center">
                <div className="add-event-form mx-4 my-4 bg-light">
                    <div className="mx-4 my-4 bg-light">
                        <form className="form-control p-4" method='POST' action="/api/auth/createuser" encType='multipart/form-data' >
                            <div className='form-control mr-2 mt-2 mb-4'>
                                <label htmlFor="profilePhoto" className='text-muted'>Upload profile photo<br /> </label>
                                <br />
                                <br />
                                <input type="file" name='profilePhoto' />
                            </div>
                            <input type="text" className="form-control mr-2 my-2" placeholder="Full Name" name='name' />
                            <input type="email" className="form-control mr-2 my-2" placeholder="Your Email" name='email' />
                            <input type="text" className="form-control mr-2 my-2" placeholder="Your age" name='age' />
                            <input type="password" className="form-control mr-2 my-2" placeholder="Set a strong password" name='password' />
                            <input type="password" className="form-control mr-2 my-2" placeholder="Confirm Password" name='confirm_password' />
                            <button type="submit" className="btn btn-secondary custom-btn btn-block mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>

                <div className="add-event-form mx-4 my-4 bg-light">
                    <div className="mx-4 my-4 bg-light">
                        <form className="form-control p-4" method='POST' encType='multipart/form-data' >
                            <input type="email" className="form-control mr-2 my-2" placeholder="Your Email" name='email' onChange={onChange} />
                            <input type="password" className="form-control mr-2 my-2" placeholder="Enter password" name='password' onChange={onChange} />
                            <button type="button" onClick={onClick} className="btn btn-secondary custom-btn btn-block mt-4">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup