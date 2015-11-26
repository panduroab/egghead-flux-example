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
    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    add(text){
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({notes: arr});
    },
    componentWillMount() {
        var self = this;
        if(this.props.count){
            console.log(this.props.count);
            $.getJSON("http://baconipsum.com/api/?type=all-meat&setences=" + this.props.count + "&start-with-lorem=1&callback=?", function(results){
                //console.log(results.length);
                results.forEach(function(sentence){
                    sentence.split(', ').forEach(function(frase){
                        self.add(frase.substring(0,40));
                    });
                });
            });
        }
    },
    update(newText, i){
        var arr = this.state.notes;
        arr[i].note = newText;
        this.setState({notes: arr});
    },
    remove(i){
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    eachNote(note, i){
        return <Note key={note.id}
                     index={i}
                     onChange={this.update}
                     onRemove={this.remove}>{note.note}</Note>
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
