import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../actions/postAction';

export class AddPost extends Component {
    state = {
        title: '',
        body: ''
    }
    handleBody = e => {
        console.log(e.target.value);
        this.setState({
            body: e.target.value
        })
    }
    handleTitle = e => {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.title, this.state.body);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="row container">
                    <h2>Add New Post</h2>
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input placeholder="Enter Title" id="title" onChange={this.handleTitle} type="text" className="validate"/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12">
                            <textarea id="body" className="materialize-textarea" onChange={this.handleBody} placeholder="Enter post"></textarea>
                            </div>
                        </div>
                        <div className="center">
                            <button className="btn green" type="submit">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, body) => { dispatch(addPost(title, body))}
    }
}

export default connect(()=>{return{}}, mapDispatchToProps)(AddPost);
