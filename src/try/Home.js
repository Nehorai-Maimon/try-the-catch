import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return <div>Home<br />
        <button onClick={() => navigate("/uploadFiles")}>uploadFiles</button>
        <button onClick={() => navigate("/useLocation")}>useLocation</button>
        <button onClick={() => navigate("/useNavigate")}>useNavigate</button>
    </div>
}