import React from 'react'


    const Expensesbycategory = ({ food, travel, bills, others }) => {
  const total = food + travel + bills + others || 1; 

  const foodDeg = (food / total) * 360;
  const travelDeg = (travel / total) * 360;
  const billsDeg = (bills / total) * 360;
  
  return (
    <div>
      <div style={{height:"350px",marginLeft:"10px",borderRadius:"10px",backgroundColor:'white',width:"700px",marginTop:"30px"}}><p style={{paddingTop:"20px",marginLeft:"50px",fontSize:"35px"}}>Expenses by category</p>
      <div style={{display:'flex'}}><div style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: `conic-gradient(
            red 0deg ${foodDeg}deg,
            green ${foodDeg}deg ${travelDeg+foodDeg}deg,
            blue ${travelDeg+foodDeg}deg ${travelDeg+foodDeg+billsDeg}deg,
            yellow ${travelDeg+foodDeg+billsDeg}deg 360deg
          )`,
          marginLeft: "60px"
        }}>
      </div>
      <div style={{marginLeft:'70px',marginTop:'45px'}}>
        <ul>
          <li style={{listStyleType:"none",fontSize:'35px'}}><span style={{ color: "red", fontSize: "35px" }}>{'\u2022'}</span>Food</li>
           <li style={{listStyleType:"none",fontSize:'35px'}}><span style={{ color: "green", fontSize: "35px" }}>{'\u2022'}</span>Travel</li>
            <li style={{listStyleType:"none",fontSize:'35px'}}><span style={{ color: "blue", fontSize: "35px" }}>{'\u2022'}</span>Bills</li>
             <li style={{listStyleType:"none",fontSize:'35px'}}><span style={{ color: "yellow", fontSize: "35px" }}>{'\u2022'}</span>Others</li>
        </ul>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Expensesbycategory
