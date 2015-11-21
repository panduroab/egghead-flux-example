import React from 'react';

var Note =  React.createClass({
    getInitialState(){
        return {editing: false}
    },

    edit() {
        this.setState({editing: true})
    },

    save() {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index)
        this.setState({editing: false})
    },
    
    remove() {
        this.props.onRemove(this.props.index)
    },

    renderDisplay() {
        return <div className="note">
            <p>{this.props.children}</p>
            <span>
                <button onClick={this.edit}
                        className="btn btn-primary glyphicon glyphicon-pencil"/>
                <button onClick={this.remove}
                        className="btn btn-danger glyphicon glyphicon-trash"/>
            </span>
        </div>
    },

    renderForm() {
        return <div className="note">
            <textarea ref="newText"
                      defaultValue={this.props.children}
                      className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
        </div>
    },

    render() {
        if(this.state.editing){
            return this.renderForm();
        } else {
            return this.renderDisplay();
        }
    }
});
module.exports = Note;
