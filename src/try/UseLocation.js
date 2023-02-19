import { useLocation, useNavigate } from "react-router-dom"

export default function UseLocation() {
    const location = useLocation()
    const navigate = useNavigate()
    return <div>useLocation<br />
        <button onClick={() => navigate("/uploadFiles")}>uploadFiles</button>
        <button onClick={() => navigate("/useLocation")}>useLocation</button>
        <button onClick={() => navigate("/useNavigate")}>useNavigate</button><br />

        <div>here you can see what you sent from useNavigate:</div><br />
        <div>name: {location.state.name}</div>
        <div>id: {location.state.id}</div>
        <div>age: {location.state.age}</div>
        <div>gender: {location.state.gender}</div>
    </div>
}