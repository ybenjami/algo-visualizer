import React, { useState } from "react";
import Gist from "react-gist";

const SelectionSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [frame, setFrame] = useState({array: input, a:0, b: 0, c: 0});
    const [run, setRun] = useState(true);


    const listArray = frame.array.map((val, index) =>{
        if((frame.a === index) ||(frame.b === index)) {
            return <div className={`array-bar-working ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }

        if(frame.c === index){
            return <div className={`array-bar-swapping ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }
        return <div className={`array-bar ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
      });


    const swap = (array,  leftValue,  rightValue) =>{

        if(leftValue ===rightValue){

            return;
        }
            let temp = array[leftValue];
            array[leftValue] = array[rightValue];
            array[rightValue] = temp;
            setRandomArray([...array]);
        }
      

    const sort = () => {
        if(run){
            setRun(false);
            let array = randomArray.slice(0);
            const init = animationStep(array, -1, -1);
            const animation = [init];
            for(let index = 1; index < array.length; ++index) { 
                let currentValue = array[index]; 
                let previousPosition = index - 1; 
                 animation.push(animationStep(array, previousPosition, previousPosition, index));
                  //Swap within the sorted partition of the Array
                while (previousPosition >= 0 && array[previousPosition] > currentValue) { 
                    array[previousPosition + 1] = array[previousPosition]; 
                    previousPosition = previousPosition - 1; 
                    animation.push(animationStep(array,previousPosition + 1, previousPosition, index));

                } 
                    array[previousPosition + 1] = currentValue; 
                    //animation.push(animationStep(array, array[previousPosition + 1], previousPosition, previousPosition));
                } 
                 
                //  animation.push(animationStep(array, sortedPartition, sortedPartition));
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

    const animationStep = (array,left, index, current)=>{
        return {
           array: array.slice(0),
           a: left,
           b: index,
           c: current
        }
    }
    sort();
    return(
        <div>

        <div className="block">
            <div className="array-container">
                    {listArray}
            </div>
        </div>
          

        <div className="block">
            <div className="algo-explain">
            <h2>Insertion Sort</h2>
            <p>Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.</p>
            </div>
        </div>
           <div className='gistlk'>
            <Gist id='4f72526935f76a2bfd63a3ca2d90a2f8' />
           </div>
            
            </div>
           
        
    )
}
export default SelectionSort;