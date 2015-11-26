import React, {Component} from 'react';

var  Box = React.createClass({
    //Called before component renders
    getDefaultProps(){
        return {
            colorIndex: -1
        }
    },
    getInitialState(){
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },
    update(){
        this.setProps({colorIndex: this.props.colorIndex + 1});
    },
    //It runs in response to a properties update
    componentWillReceiveProps(nextProps){
        var color = this.props.colors.split(',')[nextProps.colorIndex];
        if(!color){this.setProps({colorIndex:0})}
        this.setState({backgroundColor: color});
    },
    render() {
        return <div style={this.state} onClick={this.update}></div>;
    }
});

module.exports = Box;
