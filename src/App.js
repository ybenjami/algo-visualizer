import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import Grid from '@material-ui/core/Grid';
import BackspaceIcon from '@material-ui/icons/Backspace';
import "./App.css";
import SortingVisualizer from "./SortingVisualizer";
import Kadane from "./Kadane"
import sortImage from "./image/sort.jpg";
import bellImage from "./image/Bell_Shaped_Graph.jpg";
import mazeImage from "./image/maze.jpg";

const App = () => {
    const [topic, setTopic] = useState('default');
    const topicState = (val) => {
        setTopic(val);
    }
    return (
        <div className="App">
             
                <header className="App-header"></header>
                <h1>Algorithm Visualizer</h1>
                
                {topic !== 'default' &&
                <Button variant="contained" startIcon={<BackspaceIcon />} color="primary" onClick={() => topicState('default')}>Back</Button>}

            {topic === 'default' &&
            <div>
                <Grid container spacing={8}>
                    <Grid container item xs={2} spacing={1}>
                        <img src={sortImage} alt="Sorting image" width={200} />
                    </Grid>
                    
                    <Grid container item xs={5} spacing={3}>
                        <h3>Interested in different Sorting Algorithms? </h3>
                        <p>Did you know not all sorting Algorithms are created equal? Some algorithms are better than others in terms of Time and/or Space complexity.</p>
                        
                        <p><Button variant="contained" startIcon={<SortIcon />} color="primary" onClick={() => topicState('sort')}>Let's get Sorting</Button></p>

                    </Grid>
                </Grid> 

                <Grid container spacing={8}>
                <Grid container item xs={2} spacing={2}>
                    <img src={bellImage} alt="Sorting image" width={200} />
                </Grid>
                <Grid container item xs={5} spacing={2}>
                    <h3>Famous Algorithms</h3>
                    <p> Find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.</p>
              
                    <p><Button variant="contained" startIcon={<SortIcon />} color="primary" onClick={() => topicState('kadane')}>Learn More</Button></p>
                </Grid>
            </Grid>

            <Grid container spacing={8}>
                <Grid container item xs={2} spacing={2}>
                    <img src={mazeImage} alt="Sorting image" width={200} />
                </Grid>
                <Grid container item xs={5} spacing={2}>
                        <h3>Coming Soon Search Algorithms</h3>
                       <p> Comming soon - Search algorithm visualizer</p>     
                </Grid>
          </Grid>
          </div>}

            {topic === 'sort' &&
            <SortingVisualizer/>}
             {topic === 'kadane' &&
            <Kadane/>} 
        </div>
       
    )
};
export default App;