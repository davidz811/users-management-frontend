import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(
        {
            name: '',
            username: '',
            email: ''
        }
    )

    function handleCancel() {
        navigate('/');
    }

    function handleInputChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

        setUserDetails(prevStateDetails => ({
            ...prevStateDetails,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!userDetails.name || !userDetails.username || !userDetails.email) {
            alert("Please fill in all fields");
            return
        }
        try {
            const response = await axios.put(`http://localhost:8080/api/user/${id}`, userDetails);

            if (response.status === 200) {
                alert("User updated successfully");
                navigate('/');
            } else {
                console.log("User not updated successfully");
            }
        } catch (error) {
            console.log("Cannot update user with given id ", error);
        }
    }

    return (
        <div className='max-w-[700px] mx-auto shadow-md my-10'>
            <h1 className='text-3xl text-center py-7 font-semibold'>Edit User</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        name='name'
                        value={userDetails.name}
                        placeholder='Enter your Name'
                        onChange={handleInputChange}
                        className='text-center p-2 border rounded-md focus:outline-none focus:border-blue-500 w-96'
                    />
                </div>
                <div className='flex flex-col justify-center items-center py-5'>
                    <label htmlFor="username">Username</label>
                    <input
                        type='text'
                        name='username'
                        value={userDetails.username}
                        placeholder='Enter your Username'
                        onChange={handleInputChange}
                        className='text-center p-2 border rounded-md focus:outline-none focus:border-blue-500 w-96'
                    />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        name='email'
                        value={userDetails.email}
                        placeholder='Enter your Email'
                        onChange={handleInputChange}
                        className='text-center p-2 border rounded-md focus:outline-none focus:border-blue-500 w-96'
                    />
                </div>

                <div className="flex justify-center py-4">
                    <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600" type='submit'>
                        Submit
                    </button>
                    <button className="px-4 ml-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUser