import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <nav />
                <Navigation />
            </div>
        );
    }
}

export default Home;