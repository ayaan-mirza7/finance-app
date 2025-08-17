import logo from './logo.svg';
import './App.css';
import Addportfolio from './appboxes/Addportfolio';
import Greenbox from './appboxes/Greenbox';
import RedBox from './appboxes/RedBox';
import Monthlysavings from './appboxes/Monthlysavings';
import Expensesbycategory from './appboxes/Expensesbycategory';
import { useState } from 'react';


function App() {
  const [date,setdate]=useState('');
      const [desc,setdesc]=useState('');
      const [cat,setcat]=useState('');
      const [amount,setamount]=useState('');
      const [transactions,settransactions]=useState([]);  
      const [sum,setsum]=useState(0);
      const [sums,setsums]=useState(0);
      const [food,setfood]=useState(0);
      const [travel,settravel]=useState(0);
      const [bills,setbills]=useState(0);
      const [others,setothers]=useState(0);
      
      

     const addamount = () => {
     setsum(prev => prev + Number(amount)); 
};
      const cutamount=()=>{
        setsums(prev=>prev+Number(amount));
      }
  const add=()=>{
            if(!date || !desc || !cat || !amount){
              alert('Insuffisient Information')
              return;
            }
            if (Number(amount) < 0) {
   
            const newSums = sums + Number(amount);
            if (sum <Math.abs(newSums)) {
            alert('Insufficient Balance');
             return;
            }
  }
            let amt=Math.abs(Number(amount));
            let ca=cat;
            let newtransactions={date,desc,cat,amount};
            settransactions([...transactions,newtransactions]);
            if(Number(amount)>=0){
            addamount();}
            else{
              cutamount();
              if(ca.toLowerCase()==='food'){
                  setfood(prev=>prev+amt);
              }
              else if(ca.toLowerCase()==='travel'){
                  settravel(prev=>prev+amt);
              }
              else if(ca.toLowerCase()==='bills'){
                  setbills(prev=>prev+amt);
              }
              else{
                  setothers(prev=>prev+amt);
              }
            }
            


            
        }
  return (
    <div style={{margin:"100px",backgroundColor:'wheat'}} >
      <header style={{fontSize:"20px",marginTop:"20px",marginLeft:"20px"}}>  PERSONAL FINANCE DASHBOARD</header>
      {/*outer box offull content above transaction*/} 
      <div style={{display:'flex'}}> 
        {/*to wrap monthly savings and that red and green in one div to apply flex */}
        <div>
          {/*1 green box and red its outer box */}
      <div style={{display:'flex'}} >
         <div style={{ backgroundColor: "green", color: "white",width:"250px",height:"175px",marginLeft:"50px",marginTop:"30px",borderRadius:"10px" }}>
      <Greenbox amount={amount}/>
       <p style={{paddingTop:"0px",marginLeft:"50px",fontSize:"35px"}}>{sum}</p>

      </div>
       <div style={{ backgroundColor: "red", color: "white",width:"250px",height:"175px",marginLeft:"50px",marginTop:"30px",borderRadius:"10px" }}>
      <RedBox></RedBox>
      <p style={{paddingTop:"0px",marginLeft:"50px",fontSize:"35px"}}>{Math.abs(sums)}</p>
      </div>
      </div>
      {/*Monthly savings chart box */}
      <Monthlysavings sums={sums} sum={sum}/>
      </div>
      <Expensesbycategory others={others} food={food} bills={bills} travel={travel}/>
      

      
      </div>
       {/*transaction column */}
      <Addportfolio add={add} date={date} desc={desc} cat={cat} amount={amount} setdate={setdate} setcat={setcat} setamount={setamount} setdesc={setdesc}/>
        {transactions.map((t,i)=>(
          <div key={i} style={{display:'grid',gridTemplateColumns: '200px 400px 200px 150px',width:"1280px",justifyContent:'space-evenly',alignItems:'center',backgroundColor:'white',marginLeft:"30px",marginTop:"5px",borderRadius:"10px"}}>
             <p style={{paddingTop:"20px",fontSize:"25px"}}>{t.date}</p>
             <p style={{paddingTop:"20px",fontSize:"25px"}}>{t.desc}</p>
             <p style={{paddingTop:"20px",fontSize:"25px"}}>{t.cat}</p>
              <p style={{paddingTop:"20px",fontSize:"25px"}}>{t.amount}</p>
       </div>
        ))}
        </div>
        
        

      
    
  );
}

export default App;
