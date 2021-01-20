import React, { useState } from "react";

const SelectionSort = ({input}) => {
    const [randomArray, setRandomArray] = useState(input);
    const [frame, setFrame] = useState({array: input, a: 0, b: 0, c: 0});
    const [run, setRun] = useState(true);


    const listArray = frame.array.map((val, index) =>{
        if((frame.a === index) || (frame.b === index)) {
            return <div className={`array-bar-working ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }

        if(frame.c === index){
            return <div className={`array-bar-swapping ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
        }
        return <div className={`array-bar ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
      });


    const swap = (array,  leftValue,  rightValue) =>{
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
            for(let lastUnsortedIndex = array.length -1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
                let large = 0;
                 animation.push(animationStep(array, large, lastUnsortedIndex, lastUnsortedIndex));
                 for(let i = 1; i <= lastUnsortedIndex; i++) {
                    if(array[i] > array[large]) {
                        large = i;      
                        animation.push(animationStep(array, large, lastUnsortedIndex, i));
                    }
                    animation.push(animationStep(array, large, lastUnsortedIndex, i));
                }
                  swap( array, large, lastUnsortedIndex, 0);
                  animation.push(animationStep(array, large, lastUnsortedIndex, lastUnsortedIndex));

            }
            animation.push(animationStep(array, -1, -1, -1));

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

    const animationStep = (array, largest, index, current)=>{
        return {
           array: array.slice(0),
           a: largest,
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
            <h2>Selection Sort</h2>
            <p>The <b>selection sort</b> algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.</p>
            </div>
           
      </div>
        
    )
}
export default SelectionSort;