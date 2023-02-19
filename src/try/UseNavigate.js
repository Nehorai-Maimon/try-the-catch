import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UseNavigate() {
    const [char, setChar] = useState()
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const users = [
        {
            name: "john",
            id: 1,
            age: 21,
            gender: "male"
        },
        {
            name: "jeff",
            id: 2,
            age: 23,
            gender: "male"
        },
        {
            name: "jenny",
            id: 3,
            age: 18,
            gender: "female"
        },
        {
            name: "julya",
            id: 4,
            age: 24,
            gender: "female"
        }
    ]

    return <div>useNavigate<br />
        <button onClick={() => navigate("/uploadFiles")}>uploadFiles</button>
        <button onClick={() => navigate("/useLocation")}>useLocation</button>
        <button onClick={() => navigate("/useNavigate")}>useNavigate</button><br />
        <div>here you can to deliver chars to the useLocation page:</div><br />
        <input onChange={(e) => setChar(e.target.value)} />
        <button onClick={() => navigate("/useLocation", { state: char })}>send char</button><br /><br />

        <div>here you can chooze user and deliver to the useLocation page:</div><br />

        <table style={{ marginLeft: "43vw" }}>
            <thead>
                <t style={{ padding: "10px" }}>Name</t>
                <t style={{ padding: "10px" }}>Id</t>
                <t style={{ padding: "10px" }}>Age</t>
                <t style={{ padding: "10px" }}>Gender</t>
            </thead>
            <tbody>{users.map((user, i) => {
                return <div
                    key={user.id}
                    style={{ cursor: "pointer", border: "1px solid darkgray" }}
                    onClick={() => setUser(users[i])}
                >
                    <td style={{ borderRight: "1px solid darkgray", padding: "10px" }}>{user.name}</td>
                    <td style={{ borderRight: "1px solid darkgray", padding: "10px" }}>{user.id}</td>
                    <td style={{ borderRight: "1px solid darkgray", padding: "10px" }}>{user.age}</td>
                    <td style={{ padding: "10px" }}>{user.gender}</td>
                </div>
            })}</tbody>
        </table>
        <button
            onClick={() => navigate("/useLocation",
                {
                    state: {
                        name: user.name,
                        id: user.id,
                        age: user.age,
                        gender: user.gender
                    }
                })}>send {user?.name}
        </button>

    </div>
}