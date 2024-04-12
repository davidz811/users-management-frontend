import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(
        {
            id: '',
            name: '',
            username: '',
            email: ''
        }
    );

    function handleBackHome() {
        navigate('/')
    }

    useEffect(() => {
        async function getUserDataById() {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/users/${id}`);
                setUserData(
                    {
                        id: response.data.id,
                        name: response.data.name,
                        username: response.data.username,
                        email: response.data.email
                    }
                );
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        getUserDataById();
    }, [id]);

    console.log(userData);

    return (
        <div className='max-w-[700px] mx-auto shadow-md py-10 my-10'>
            <h1 className='text-3xl text-center font-semibold py-5'>User Details</h1>
            <div className='flex flex-col items-center py-8 bg-slate-200'>
                <p className=''><span className='font-semibold'>Details</span> of user with id: {userData.id}</p>
                <p className='py-2'><span className='font-bold'>Name: </span>{userData.name}</p>
                <p className=''><span className='font-bold'>UserName: </span>{userData.username}</p>
                <p className='py-2'><span className='font-bold'>Email: </span>{userData.email}</p>
            </div>
            <div className='flex justify-center mt-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleBackHome}>
                    Back To Home
                </button>
            </div>
        </div >
    )
}

export default ViewUser