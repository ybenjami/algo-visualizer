import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';


const Kadane = () => {
    const maxAllowedArraySize = 15;
    const [randomArray, setRandomArray] = useState([]);
    const [count] = useState(maxAllowedArraySize);
    const [maxSoFar, setMaxSoFar] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    

    const randomInt = () => {
        const min = Math.ceil(10);
        const max = Math.floor(-10);
        return Math.floor(Math.random() * (max - min + 1) + min)
        
    }

    const listArray = randomArray.map((val, index) =>{
        if(index >= start && index <= end){
            return <div className={`array-bar-working {index}`} style={{height: `5px`}}><span>{val}</span></div>;
        }
            return <div className={`array-bar ${index}`}><span>{val}</span></div>;
      });


    const algo = () => {
         let maxEndingHere = 0;
         let indexStart = 0;
         let indexEnd = 0
         let sum = 0;
         for (let i =0; i < randomArray.length; i++){
             maxEndingHere += randomArray[i];
             maxEndingHere = Math.max(maxEndingHere, 0);
             if(maxEndingHere <= 0 && i != randomArray.length-1  ) {
                indexStart=i+1;
             }

             if(maxEndingHere > sum) {
                sum = maxEndingHere;
                indexEnd=i;
             }
            
         }
         console.log(indexStart, indexEnd);
         setStart(indexStart)
         setEnd(indexEnd);
         setMaxSoFar(sum);
         return maxSoFar;
    }


    const genArray = () => {
        setMaxSoFar(0);
        setEnd(-1)
        setStart(100)
        let rando = [];
        for(let i=0; i < count; i++){
            rando.push(randomInt());
        }  
        setRandomArray(rando);
    };

    return(
        <div>
            <h3>Kadane's Algorithm </h3>
            <p><b>The Maximum subarray problem</b> Start By Generating an array of size; and watch was we solve this problem with linear time complexity of 0(n) </p>
              <div class="array-sizer">
                  <p class='array-index'>Array size:  <span>{count}</span></p>
                 
                  
                  <p><Button variant="contained" startIcon={<CreateIcon />} color="primary" onClick={genArray}>Generate</Button></p>
                  
                  <p> <Button onClick={() => algo()}  variant="contained"  color="primary">Calculate</Button></p>
                  
              </div>
            
           
            {listArray.length > 0 &&
            <div>
                <div className="array-container" >
                    {listArray}
                </div>
                <br/>
                {maxSoFar > 0 &&
                    <div> Value: {maxSoFar} </div>
                }
            </div>
            
            }
    
        </div>
    )
}

export default Kadane;
//Function to create a random Gen