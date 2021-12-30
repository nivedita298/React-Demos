import React, { useState } from 'react'
import './Register.css';

const Register = () => {
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    }); 

    const [record, setRecords] = useState([]);

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({ ...userRegistration, [name] : value});
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(record);
        setRecords([...record, newRecord]);
        console.log(record);

        setUserRegistration({username: "", email: "", phone: "", password: ""});
    }

      

    return(
        <div>
            <form action="" className="registerForm" onSubmit={handelSubmit}>
                <h3 className="title">Register</h3>
            <div className="form-div">
                <label>Full Name</label>
                <input type="text" autoComplete='off' 
                value={userRegistration.username}
                onChange={handelInput}
                name="username" id="userName" />
            </div>

            <div className="form-div">
                <label>Email</label>
                <input type="text" autoComplete='off'
                  value={userRegistration.email}
                  onChange={handelInput} name="email" id="Email" />
            </div>

            <div className="form-div">
                <label>Phone Number</label>
                <input type="text" autoComplete='off'
                  value={userRegistration.phone}
                  onChange={handelInput}
                   name="phone" id="Phone Number" />
            </div>

            <div className="form-div">
                <label>Password</label>
                <input type="text" autoComplete='off'
                  value={userRegistration.password}
                  onChange={handelInput}
                 name="password" id="Password" />
            </div>

            <div className="form-div">
                <button className="registerBtn">Register</button>
            </div>
            </form>
            <div>
                {
                    record.map((curElement)=>{
                        return(
                            <div className="showDataStyle" key={curElement.id}>
                                <p>{curElement.username}</p>
                                <p>{curElement.email}</p>
                                <p>{curElement.phone}</p>
                                <p>{curElement.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Register