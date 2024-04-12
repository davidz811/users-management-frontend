import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    function handleView(id) {
        navigate(`/viewUser/${id}`)
    }

    function handleEdit(id) {
        navigate(`/editUser/${id}`);
    }

    async function handleDelete(id) {
        const response = await axios.delete(`http://localhost:8080/api/user/${id}`);

        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        alert("User with id " + id + " deleted successfully");
        //console.log(response.data);
    }

    useEffect(() => {
        async function fetchAllUsers() {
            const fetchUsers = await axios.get("http://localhost:8080/api/user/users");
            const usersData = fetchUsers.data;
            setUsers(usersData);
        }
        fetchAllUsers();
    }, [])

    console.log(users);
    return (
        <div className='w-full my-9'>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='w-1/12' scope="col">ID</th>
                        <th className='w-2/12' scope="col">Name</th>
                        <th className="w-3/12" scope="col">Username</th>
                        <th className="w-3/12" scope="col">Email</th>
                        <th className="w-3/12" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {users.map((user) => (
                        <tr className='border' key={user.id}>
                            <th className='py-3'>{user.id}</th>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td className='flex justify-center'>
                                <div>
                                    <button onClick={() => handleView(user.id)} className='border border-slate-300 rounded p-2 my-2'>
                                        View
                                    </button>
                                </div>
                                <div className='px-4'>
                                    <button onClick={() => handleEdit(user.id)} className='border border-green-300 rounded p-2 my-2'>
                                        Edit
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(user.id)} className='border border-red-600 rounded p-2 my-2'>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home