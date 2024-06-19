import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [Weight, setWeight] = useState();
  const [height, setheight] = useState();
  const [BMI, setBMI] = useState(0);
  const [Feedback, setFeedback] = useState(0);

  const bmical = ()=>{
    if(Weight === 0 || height ===0){
      alert('It cant be empty')
    }
    else{
      let BMI = (Weight/(height*height)*703)
      setBMI(BMI.toFixed(1))

      //

      if(BMI<25){
        setFeedback("YOu are underWeight")
      }

      else if(BMI<30){
        setFeedback("YOu are fit and fine")
      }
      else
      {
        setFeedback("YOu are Overweight")
      }
    }
  }

  return (
    <>
      <div class="container mx-auto my-5 w-96 p-5 border-2 border-zine-900 rounded">
        <h2 className="text-center m-6">BMI</h2>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Weight</label>
          <input type="text" placeholder="Enter your Weight" />

          <label htmlFor="">Height</label>
          <input type="text" placeholder="Enter your height" />

          <button className="p-4 border-5 bg-slate-600 text-white rounded-md">
            Submit
          </button>
          <div className="text-center">
            <h3>{BMI}</h3>
            <p>{Feedback}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
