import React from 'react'

const Monthlysavings = (props) => {
  const total =Number(props.sum) + Number(props.sums);
  const goal = Math.abs(Number(props.sum));


  const percentage = total>0 && props.sum>0 ? Math.min((total / goal) * 100, 100) : 0;
  return (
    
    <div>
      <div style={{marginTop:"10px",width:"550px",height:"100px",borderRadius:"10px",backgroundColor:"white",marginLeft:"50px"}}>
       <div style={{justifyContent:'flex-start',paddingLeft:"25px",paddingTop:"10px",height:"35px"}}> <p>Total Savings</p></div>
        <div style={{width:"550px",height:"25px",display:'flex',justifyContent:'flex-end',alignItems:'center',paddingRight:"70px"}}><p>{total}/{goal}</p></div>
        <div style={{width:"500px",height:"10px",borderRadius:"10px",backgroundColor:'grey',marginLeft:"30px"}}>
          
          <div style={{width:`${percentage}%` ,height:"10px",borderRadius:"10px",backgroundColor:'blue',transition: "width 0.3s ease"}}></div>
          

        </div>
      </div>
    </div>
  )
}

export default Monthlysavings
