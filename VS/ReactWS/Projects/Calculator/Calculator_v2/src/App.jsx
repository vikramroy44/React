
import 'bootstrap/dist/css/bootstrap.min.css';
import mystyles from "./App.module.css";
import  Display from "./components/Display"
import ButtonContnr from "./components/ButtonContnr"
import { useState } from 'react';


function App() {
  const  [calVal, setcalVal]= useState("");
   const onClickofBtn = (buttonText) => {
    if(buttonText ==='C'){
      setcalVal("");

    }else if (buttonText ==='='){
      setcalVal(eval(calVal));

    }else{
      const newDispVal = calVal + buttonText;
      setcalVal(newDispVal); 
    }
   }
   
  return (
    
    <div className={mystyles.calculator}>
        <Display displayVal={calVal}></Display>
      <div className={mystyles.mybtncontnr}> 
       <ButtonContnr onBtnClick={onClickofBtn} ></ButtonContnr>
     </div>
  
    </div>
  )
}

export default App;
