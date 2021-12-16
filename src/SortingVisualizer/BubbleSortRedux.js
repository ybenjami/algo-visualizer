import React, { useState } from "react";
import Gist from "react-gist";

const SelectionSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [frame, setFrame] = useState({array: input, b: 0, c: 0});
    const [run, setRun] = useState(true);


    const listArray = frame.array.map((val, index) =>{
        if((frame.b === index)) {
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
            for(let sortedPartition = array.length -1; sortedPartition > 0; sortedPartition--) {
                 animation.push(animationStep(array, sortedPartition, sortedPartition));
                 for(let i = 0; i < sortedPartition; i++) {
                    if(array[i] > array[i+1]) {     
                       animation.push(animationStep(array, i, 1+i));
                         swap(array, i, i+1);
                    }
                }
            }
            animation.push(animationStep(array, -1, -1));

           for(let j = 0; j < animation.length; j++){
              animateFrame(j, animation[j]);
           }
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
            <div className="block">
                <div className="array-container">
                        {listArray}
                </div>
            </div>
            
            <div className="block">
                <div className="algo-explain">
                    <h2>Bubble Sort</h2>
                    <p><a href="https://medium.com/swlh/back-to-the-basics-bubble-sort-605007e4efa7">Bubble Sort on Medium.</a></p>
                    <p>The <b>bubble sort</b> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
                </div>
            </div>
            <div className='gistlk'>
                <Gist id='f4144dc4863138d5b553290ecd47cd38' />
            </div>
      </div>
        
    )
}
export default SelectionSort;