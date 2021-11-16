import React, { Component } from "react";
import './App.css';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => this.setState({robots: response}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length
        ? <h1>Loading</h1> 
    
        
        : <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    }
    }

export default App;