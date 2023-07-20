import React from 'react'

export const Box3 = () => {
  return (
    <div style={{background: '#FFD324', width: '66.7%' , position: 'relative', display: 'flex'}}>
        <div style={{width: '33%'}}></div>
        <div>
            <h5 style={{color: '#3A3A3A',textAlign: 'left',paddingTop: '20px', paddingBottom: '0px', marginBottom: '0px',fontFamily: 'Playfair Display',fontSize: '18px'}}> Development is my passion </h5>
            <h1 style={{fontSize:'65px', fontWeight:"800",color: '#3A3A3A',textAlign: 'left', textTransform: 'capitalize', marginTop: '10px'}}> Get to <br/>know <br/>me.</h1>
        </div>
        <img style={{width:"500px", height:"300px", top: "70px", left:"-295px", position: "absolute"}} src='https://library.elementor.com/designer-portfolio/wp-content/uploads/sites/68/2019/10/About.png'></img>
    </div>
  )
}
