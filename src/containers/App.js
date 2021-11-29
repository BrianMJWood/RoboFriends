import React, { useEffect, useState } from "react";
import './App.css';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from "../components/ErrorBoundary";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setRobots(data);
    }

    const onSearchChange = event => {
        setSearchfield(event.target.value)
    }

    return (
         !robots.length
        ? <h1>Loading</h1> 
    
        : <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default App;