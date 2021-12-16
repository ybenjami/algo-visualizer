import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CreateIcon from '@material-ui/icons/Create';
import InsertionSort from './SortingVisualizer/InsertionSortRedux';
import BubbleSort from './SortingVisualizer/BubbleSortRedux';
import SelectionSort from "./SortingVisualizer/SelectionSort";
import QuickSort from "./SortingVisualizer/QuickSort";
 

const SortingVisualizer = () => {
    const maxAllowedArraySize = 50;
    const [randomArray, setRandomArray] = useState([]);
    const [count, setCount] = useState(maxAllowedArraySize);
    const [algo, setAlgo] = useState('');
    

    const randomInt = () => {
        const min = Math.ceil(5);
        const max = Math.floor(99);
        return Math.floor(Math.random() * (max - min + 1) + min)
        
    }

    const handleIncrement = () => {
        if(count < maxAllowedArraySize){
            setCount(count + 5);
        }
    };

    const handleDecrement = () => {
        if(count > 5){
            setCount(count -5);
        }
       
    };

    const listArray = randomArray.map((val, index) =>{
        return <div className={`array-bar ${index}`} style={{height: `${val}px`}}><span>{val}</span></div>;
      });

    const genArray = () => {
        setAlgo('');
        let rando = [];
        for(let i=0; i < count; i++){
            rando.push(randomInt());
        }  
        setRandomArray(rando);
    };

    return(
        <div>
           
            <p>Start By Generating an array of size 5 - {maxAllowedArraySize}</p>
              <div class="array-sizer">
                  <p class='array-index'>Array size:</p>
                  <span><AddIcon color="secondary" onClick={handleIncrement} /></span>
                  <span class='counter'>{count}</span>
                  <span><RemoveIcon color="secondary" onClick={handleDecrement} /></span>
                  <p><Button variant="contained" startIcon={<CreateIcon />} color="primary" onClick={genArray}>Generate Random Array</Button></p>
              </div>
              
    

         <h3>Pick the Sorting Algorithm</h3>
            <Button onClick={() => setAlgo('bubble')}  color="primary">Bubble Sort</Button>
            <Button onClick={() => setAlgo('insertion')} color="primary">Insertion Sort</Button>
            <Button onClick={() => setAlgo('selection')} color="primary">Selection Sort</Button>
           
            <Button  color="primary">Merge Sort</Button>
            <Button  color="primary">Heap Sort</Button>
            <Button onClick={() => setAlgo('quick')} color="primary">Quick Sort</Button>
            
            { !algo && listArray.length > 0 &&
            <div>
                <h3>Unsorted Array</h3>
                <div className="array-container" >
                {listArray}
             </div>
            </div>
            
            }
           <div>
               {algo === 'insertion' && <InsertionSort input={randomArray} />}
           </div>
           
           <div>
               {algo === 'bubble' && <BubbleSort input={randomArray} />}
           </div>

           <div>
               {algo === 'selection' && <SelectionSort input={randomArray} />}
           </div>
           <div>
               {algo === 'quick' && <QuickSort input={randomArray} />}
           </div>
          
        </div>
    )
}

export default SortingVisualizer;
//Function to create a random Gen