import React, { useState } from "react";

const InsertionSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [run, setRun] = useState(true);
    const [compA, setCompA] = useState('');
    const [compB, setCompB] = useState('');
    const [swapA, setSwapA] = useState('');
    const [swapB, setSwapB] = useState('');


    const listArray = randomArray.map((val, index) =>{
        if(index === compA || index === compB){
            return <div className={`array-bar-working ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }

        if(index === swapA || index === swapB){
            return <div className={`array-bar-swapping ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }
        return <div className={`array-bar ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
      });

      
    const sort = () => {
        if(run){
            setRun(false);
            let arr = randomArray;
            for (let index = 1; index < randomArray.length; ++index) { 
              setTimeout(() => {
                let currentValue = randomArray[index]; 
                let previousPosition = index - 1; 
            
                //Swap within the sorted partition of the Array
                while (previousPosition >= 0 && randomArray[previousPosition] > currentValue ) { 
                       // comparVisualize(previousPosition, currentValue);
                        randomArray[previousPosition + 1] = randomArray[previousPosition];
                        swap(previousPosition + 1, previousPosition)
                   
                         previousPosition = previousPosition - 1; 
                     
                        
                } 
                
                randomArray[previousPosition + 1] = currentValue; 
                setRandomArray([...randomArray]);

              return randomArray;
            }, (index * 1000));
        }
            
      }
      return
    }
    const swap = (leftValue,  rightValue) =>{
        setTimeout(() => {
            setCompA('');
            setCompB('');
            setSwapA(leftValue);
            setSwapB(rightValue);
            setRandomArray([...randomArray]);
         }, (60));
        }

    sort();
    return(
            <div className="array-container" >
                {listArray}
            </div>
       
        
    )
}
export default InsertionSort;