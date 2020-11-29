import React from 'react'
import { AiFillGithub, AiFillMail } from "react-icons/ai";


function Footer() {
    return (
        <>
            <h2>&copy; Necrocraft</h2>
            <a href="https://github.com/necrocraft" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{color: "black", fontSize: "1.5em"}}/></a>
            <a href="mailto:mhdzeefan@gmail.com" ><AiFillMail style={{color: "black", fontSize: "1.5em"}}/></a>
        </>
    )
}

export default Footer
