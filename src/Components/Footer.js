import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';

export const Footer = () => {
    const items = [
        {
            icon : <AiFillGithub />
        },
        {
            icon : <AiFillLinkedin />
        },
        {
            icon : <AiFillYoutube />
        },
        {
            icon : <BsMedium />
        },
    ]

    
    return (
        <div style={{ minHeight: '285px', marginTop: "50px", borderStyle: "solid", borderWidth: "0px 50px 50px 50px", borderColor: "white", display: 'flex' }}>
            <div style={{ background: "#6f77f4", width: "67%" }}></div>
            <div style={{ background: '#FFD324', width: "33%", display: "flex", justifyContent: "center", alignItems: "flex-start" , flexDirection: 'column',}}>
                <div style={{paddingLeft: '15%', display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{paddingLeft: '14px' }}>
                    <h1 style={{ fontSize: '18px', fontFamily: "Montserrat", fontWeight: '600', color: "#3A3A3A" , marginBottom: "6px"}}>Keep in Touch</h1>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                {items.map((item, index) => <div style={{padding: "0px 5px", fontSize: "24px", margin: "5px"}} key={index}>{item.icon}</div>
                )}

                </div>

                </div>
            </div>
        </div>
    )
}
