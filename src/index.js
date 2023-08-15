import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BiChevronDown } from "react-icons/bi";

function RR4 () {
    
    const [show, setShow] = useState(0)
    const [colorChange, setColorChange] = useState("Select...")

    const colors = [
        {
            id:1,
            value: "red",
        },
        {
            id:2,
            value: "blue",
        },
        {
            id:3,
            value: "orange",
        }
    ]
    
    const handleClick = (index) => {
        setColorChange(index)
    }

    

    return (
        <div style={{
            position:"absolute",
            width:"50vw",
            height:"50vh",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            background:"#ddd",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div 
            style={{
                padding:"20px",
                border:"2px solid black",
                width:"200px"
            }}
            onClick={()=> setShow(!show)}>
            {colorChange}
            {show ? 
            <BiChevronDown style={{transform:"rotate(90deg)"}}/> :
            <BiChevronDown />}
            </div>
            {colors.map((item,index) => {

                index = item.value

                return (
                <div 
                style={{
                    width:"200px",
                    padding:"20px",
                    border:"2px solid black",
                    textAlign:"center"
                }}    
                key={item.id}
                onClick={() => handleClick(index)}
                >{item.value}</div>
        )})}
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RR4 />)

