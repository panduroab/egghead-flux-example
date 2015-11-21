var React = require('react');
import Note from '../components/note';

var Board = React.createClass({
    propTypes: {
        count(props, propName){
            if(typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if(props[propName] > 100){
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState(){
        return {
            notes:[]
        };
    },
    add(text){
        var arr = this.state.notes;
        arr.push(text);
        this.setState({notes: arr});
    },
    update(newText, i){
        var arr = this.state.notes;
        arr[i] = newText;
        this.setState({notes: arr});
    },
    remove(i){
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    eachNote(note, i){
        return <Note key={i}
                     index={i}
                     onChange={this.update}
                     onRemove={this.remove}>{note}</Note>
    },
    render(){
        return <div className="board">
            {this.state.notes.map(this.eachNote)}
            <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                    onClick={this.add.bind(null, 'New Note')}/>
        </div>
    }
});

module.exports = Board;
