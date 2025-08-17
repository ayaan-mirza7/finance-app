import React, { use, useState } from 'react'

const Addportfolio = (props) => {
    
    
    return (
        
    <div>
       <div style={{display:'flex',width:"1280px",justifyContent:'space-between',backgroundColor:'white',marginLeft:"30px",marginTop:"5px",borderRadius:"10px"}}><p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}>Transaction</p>
        <button type='submit' onClick={props.add} style={{marginTop:"25px",marginRight:"10px",height:"30px",borderRadius:"6px"}}>Add transaction</button></div>
        <div style={{display:'grid',width:"1280px",gridTemplateColumns: '270px 470px 270px 150px',backgroundColor:'white',marginLeft:"30px",marginTop:"5px",borderRadius:"10px"}}>
            <p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}>Date</p>
             <p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}>Description</p>
             <p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}>Category</p>
              <p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}>Amount</p>
       </div>
       <div  style={{display:'flex',width:"1280px",justifyContent:'space-between',backgroundColor:'white',marginLeft:"30px",marginTop:"5px",borderRadius:"10px"}}>
            <input type='date' value={props.date} onChange={(e)=>{props.setdate(e.target.value)}} style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}/>
             <input type='text'  value={props.desc} onChange={(e)=>{props.setdesc(e.target.value)}} style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}/>
              <input type='text'  value={props.cat} onChange={(e)=>{props.setcat(e.target.value)}} style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}/>
               <input type='number'  value={props.amount} onChange={(e)=>{props.setamount(e.target.value)}} style={{paddingTop:"20px",marginLeft:"50px",fontSize:"25px"}}/>
       </div>
       
    </div>
  )
}

export default Addportfolio
