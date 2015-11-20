import React from 'react';

export default class App extends React.Component {
    render(){
        return <div>
            <h1>{this.props.text}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}
