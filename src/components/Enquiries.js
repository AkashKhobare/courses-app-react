import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Enquiries.css"

const Enquiries = () => {

    const usersAPI = "http://localhost:3010/users";

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch(usersAPI)
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })
    }, []);

    return (
        <>
            <h3>Enquiries</h3>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <div className="user-container">
                                <h5>{user.email}</h5>
                                <h6>{user.phone}</h6>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }

            <br />
            <Link to="/courses">
                <button>Back to courses</button>
            </Link>
        </>
    )
}

export default Enquiries;