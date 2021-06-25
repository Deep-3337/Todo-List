import React from 'react'
import './footer.css'

export const Footer = () => {
    let footerStyle ={
        position: "absolute",
        width: "100%",
        border: "1px solid gray"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Copyright &copy: DRS
            </p>
        </footer>
    )
}
