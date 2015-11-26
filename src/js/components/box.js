import React, {Component} from 'react';

export default class Box extends Component {
    componentWillMount() {
        alert("Component is about to mount");
    }
    componentDidMount(){
        alert("Component did mount");
    }
    render() {
        return <div></div>
    }
};
