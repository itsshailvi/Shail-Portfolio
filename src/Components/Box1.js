import React from 'react'
import { Header } from './Header'

export const Box1 = () => {
  return (
    <div style={{minHeight: '500px', background:"#6f77f4", marginTop: "50px", borderStyle: "solid" , borderWidth : "0px 50px", borderColor: "white"}}>
        <Header/>
        <div style={{width: "100%"}}>
          <div style={{padding:"100px",display:"flex" , alignItems: "center", flexDirection: "column"}}>
            <div>
            <h1 style={{alignItems:'center', fontSize: "30px", fontWeight: '900', marginBottom: '0px'}}>I'm  Shailvi Sharma</h1>
            </div>
            <div>
            <h1 style={{fontSize:'90px', fontWeight:"800", color:"white" , margin: '0px'}}>About me.</h1>
            </div>

          </div>

        </div>
      </div>
  )
}
