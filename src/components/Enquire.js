import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Enquire = (props) => {

    const enquireUserAPI = "http://localhost:3010/users";

    const [ ipField, setIpField ] = useState({});
    const [ enquired, setEnquired ] = useState(false);

    const { cid } = useParams();

    const ipFieldHandler = (event) => {
        setIpField( 
            {...ipField, [event.target.name]: event.target.value}
        );
    }

    const enquire = (event) => {
        event.preventDefault();

        fetch(enquireUserAPI, 
            { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...ipField, "course": Number(cid)})
            })
        .then(res => {
            if(res.status == 201) {
               setEnquired(true)
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h3>Enquire</h3>
            <div className="enroll-container">
                <form>
                    <input 
                        type="email" 
                        placeholder="Email..." 
                        name="email"
                        onChange={ipFieldHandler}/>
                    <input 
                        type="number" 
                        placeholder="Phone..."
                        name="phone"
                        onChange={ipFieldHandler} />
                    <input type="submit" value="Enroll" onClick={enquire}/>
                </form>
            </div>
            <br />
            {enquired ? 
                <p>Enquirement is done, go back to courses page</p> : 
                    <span></span>}
            <br />
            <Link to="/courses">
                <button>Back to courses</button>
            </Link>
        </div>

    )
}

export default Enquire;