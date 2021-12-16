import React, { useState } from "react";

const SelectionSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [frame, setFrame] = useState({array: input, b: 0, c: 0});
    const [run, setRun] = useState(true);


    const listArray = frame.array.map((val, index) =>{
        if((frame.b === index || frame.c === index)) {
            return <div className={`array-bar-working ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }

        if(frame.a === index){
            return <div className={`array-bar-swapping ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }
        return <div className={`array-bar ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
      });


    const partition = (input, start, end, animation) => {
        let pivot = input[start];
        let i = start;
        let j = end;
      
        while(i<j){
          while (i< j && input[--j] >= pivot);
          if(i < j){
            input[i] = input[j];
            animation.push(animationStep(input, j, i, j));
          }
        
        while (i < j && input[++i] <= pivot);
          if(i < j){
            input[j] = input[i];
            animation.push(animationStep(input, j, i, j));
          }
        
        }
        input[j] = pivot;
        animation.push(animationStep(input, j, i, j));
        return j; 
      }
    
    const quickSort = (input, start, end, animation) => {
        if(end - start < 2){
          return;
        }
        
        let pivotPosition = partition(input, start, end, animation);
        animation.push(animationStep(input, pivotPosition, start, end));
        quickSort(input, start, pivotPosition, animation);
        quickSort(input, pivotPosition+1, end,animation);
      }
      
    const sort = () => {
        if(run){
            setRun(false);
            let array = randomArray.slice(0);
            const init = animationStep(array, -1, -1);
            const animation = [init];
            quickSort(array, 0, array.length, animation);
            animation.push(animationStep(array, -1, -1));

           for(let j = 0; j < animation.length; j++){
              animateFrame(j, animation[j]);
           }
            console.log(array);
            return array;
        }
           return
        }


        const animateFrame = (i, item) => {
            setTimeout(() => {
              setFrame(item)
            }, (i * 200 ));
          }

    const animationStep = (array, index, current)=>{
        return {
           array: array.slice(0),
           b: index,
           c: current
        }
    }
    sort();
    return(
        <div>

            <div className="array-container" >
                {listArray}
            </div>
            
            
            <div className="algo-explain">
            <h2>Quick Sort</h2>
           
            </div>
           
      </div>
        
    )
}
export default SelectionSort;