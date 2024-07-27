import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"

export default function Home( ){
    const navigation = useNavigate()

    return (
        <>
            <Navbar/>
          {/** esse foi um botao que eu criei com ananias */}
        <button onClick={() => navigation('/login')}>login</button>
        </>
    )
}