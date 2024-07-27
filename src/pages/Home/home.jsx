import { useNavigate } from "react-router-dom"

export default function Home( ){
    const navigation = useNavigate()

    return (
        <>
        <h1> ooiii </h1>

        <button onClick={() => navigation('/login')}>login</button>
        </>
    )
}