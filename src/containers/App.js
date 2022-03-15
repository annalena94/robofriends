import React, { Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super();
        this.state =  {
            robots: [],
            searchfield: '',
        };
    }

    // we don't need arrow functions here as it's internal React functions
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    // we need arrow functions here as it's a custom function and to correctly bind 'this'
    onSearchChange = (event) => {
        /// changing the state so the searchfield always gets updated
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        /// filter the array based on the searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
}

export default App; 