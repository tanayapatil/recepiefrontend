import { useEffect } from "react"
import { useNavigate } from "react-router"

function Protectedsecond(props){

    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        const token =localStorage.getItem("token")

        //jar login  astana parat /myadmin route open karayla baghitle ki home la redirect honar
        if(token){
            navigate('/')
        }
        else{
            navigate('/myadmin')
        }



    })


    return(
        <div>
           <Component/>
        </div>
    )
}

export default Protectedsecond