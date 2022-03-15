import React, { Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './Searchbox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state =  {
            robots: robots,
            searchfield: '',
        };
    }

    onSearchChange = (event) => {
        /// changing the state so the searchfield always gets updated
        this.setState({ searchfield: event.target.value })
    }

    render() {
        /// filter the array based on the searchfield
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App; 