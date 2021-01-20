import React, { useState } from "react";

const BubbleSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [run, setRun] = useState(true);
    const [count, setCount] = useState('');
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


    const swap = (array,  leftValue,  rightValue) =>{
        if(leftValue==rightValue) {
            return;
        }
            setCompA('');
            setCompB('');
            setSwapA(leftValue);
            setSwapB(rightValue);
            let temp = array[leftValue];
            array[leftValue] = array[rightValue];
            array[rightValue] = temp;
            setRandomArray([...array]);
        }
      
      
    const outterLoop = (sortedPartition, array) => {
        let counter = 0;
        let c = (array.length *200)
        if(sortedPartition === array.length-1){
           c=0;
        }
        
        setTimeout(() => {
            for(let i = 0; i < sortedPartition; i++) {
                  innerLoop(i, array);
                  counter += (i+1)*1
            }
        }, ((((array.length-sortedPartition ) + 1) * c  )));
      }

    const innerLoop = (f, array) => {

        setTimeout(() => {
            comparVisualize(f, f+1);
            if(array[f] > array[f +1]) {
                    swap(array, f, f+1);
                  
                    
            }
         }, ((f+1)*500));
       }

    const sort = () => {
        if(run){
            setRun(false);
            let array = randomArray;
            for(let j = array.length -1; j > 0; j--) {
                outterLoop(j, array);
            }
            return array;
        }
           return
        }
    

    const comparVisualize= (a, b) => {
            setSwapA('');
            setSwapB('');
            setCompA(a);
            setCompB(b);
    }

    sort();
    return(
            <div className="array-container" >
                {listArray}
            </div>
       
        
    )
}
export default BubbleSort;