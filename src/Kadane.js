import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';


const Kadane = () => {
    const maxAllowedArraySize = 24;
    const [count] = useState(maxAllowedArraySize);
    const [maxSoFar,setMaxSoFar] = useState(0);
    const [frame, setFrame] = useState({array: [], a: 0, b: 0, c: 0, maxSoFar: 0});
    

    const randomInt = () => {
        const min = Math.ceil(9);
        const max = Math.floor(-9);
        return Math.floor(Math.random() * (max - min + 1) + min)
        }

    const listArray = frame.array.map((val, index) =>{
        if(frame.b <= index && frame.c >= index) {
                return<Button variant="contained" color="secondary"><span>{val}</span></Button>;
        }
    
                return <Button variant="outlined" color="primary" ><span>{val}</span></Button>;
         });




    const algo = () => {
         let maxEndingHere = 0;
         let indexStart = 0;
         let indexEnd = 0
         let sum = 0;

         const randomArray = frame.array;

         const animation = [];
         for (let i =0; i < randomArray.length; i++){
             maxEndingHere += randomArray[i];
             maxEndingHere = Math.max(maxEndingHere, 0);
             if(maxEndingHere <= 0 && i != randomArray.length-1  ) {
                indexStart=i+1;
             }

             if(maxEndingHere > sum) {
                sum = maxEndingHere;
                indexEnd=i;
                animation.push(animationStep(randomArray, i, indexStart, indexEnd, sum));
             }     
         }
                 
            for(let j = 0; j < animation.length; j++){
                animateFrame(j, animation[j]);
         }
        

         return;
    }


    const genArray = () => {
        let rando = [];
        for(let i=0; i < count; i++){
            rando.push(randomInt());
        }  
       
        const init = animationStep(rando, 0,0,0,0);
        setFrame(init);
    };


    const animateFrame = (i, item) => {
        setTimeout(() => {
          setFrame(item)
          setMaxSoFar(item.max);
        }, (i * 700 ));
      }


      const animationStep = (array, largest, index, current, max)=>{
        return {
           array: array.slice(0),
           a: largest,
           b: index,
           c: current,
           max,
        }
    }

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
                <div>
                    {listArray}
                </div>
                <br/>
                    <div> Value: {maxSoFar} </div>
            
            </div>
            
            }
    
        </div>
    )
}

export default Kadane;
//Function to create a random Gen