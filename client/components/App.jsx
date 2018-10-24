import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div> 
                <Board />
            </div>
        )
    }
}