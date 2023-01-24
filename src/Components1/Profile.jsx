import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ListContext } from '../Context/ListContext';

const Profile = () => {
    const navigate = useNavigate();

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [gender, setGender] = useState("")
    const [data, setdata] = useState([]);


    const { list, setList } = useContext(ListContext)
    const handler = (e) => {

        e.preventDefault();
        // console.log(("hi"));
        let tt = document.querySelector('input[name="gender"]:checked').value
        const newData = {
            fname: fname,
            lname: lname,
            gender: tt
        }
        localStorage.setItem("lists", JSON.stringify([...data, newData]))
        setdata([...data, newData])
        
        
        navigate("/show")

    }
    /*
        //first save in local storage then navigate
        useEffect(() => {
            if (data.length > 0) {
                // localStorage.setItem("lists", JSON.stringify(data))
                setList(data)
                navigate("/show");
                // navigate("/show", { state: data });
            }
    
        }, [data])
    
        */

    // useEffect(() => {
    //     localStorage.setItem("lists", JSON.stringify(data))
    // }, [data])

    return (
        <>
            <form onSubmit={handler}>
                <input type="text" placeholder='firstName' onChange={(e) => setFname(e.target.value)} />
                <br />
                <input type="text" placeholder='lastName' onChange={(e) => setLname(e.target.value)} />
                <br />
                Male<input type="radio" name='gender' value="male" />
                Female<input type="radio" name='gender' value="female" />
                <br />
                <button >submit</button>

            </form>

            {


                data.map((val) => {
                    console.log(val)
                })
            }
        </>

    )
}

export default Profile