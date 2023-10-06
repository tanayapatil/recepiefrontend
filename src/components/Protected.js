import { useEffect } from "react"
import { useNavigate } from "react-router"



function Protected(props){
    const {Component}=props
    const navigate=useNavigate()

    useEffect(()=>{
        const token =localStorage.getItem("token")
        


        //jar token nasel tar addrecepie varun redirect houn login la jane
        if(!token || token==='null' || token==='undefined'){
            navigate('/myadmin')
        }


        
 
    })

    return(
       
        <div>

            <Component/>

        </div>
    )
}
export default Protected