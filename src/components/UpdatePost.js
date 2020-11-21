import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions/postAction';

export class AddPost extends Component {
    state = {
        title: '',
        body: '',
        id: ''
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
        this.props.updatePost(this.state.id, this.state.title, this.state.body);
        this.props.history.push('/');
    }
    componentDidMount() {
        this.setState({
            title: this.props.post.title,
            body: this.props.post.body ,
            id: this.props.post.id
        })
    }
    render() {
        return (
            <div>
                <div className="row container">
                    <h2>Add New Post</h2>
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input placeholder="Enter Title" id="title" value={this.state.title} onChange={this.handleTitle} type="text" className="validate"/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12">
                            <textarea id="body" className="materialize-textarea" value={this.state.body} onChange={this.handleBody} placeholder="Enter post"></textarea>
                            </div>
                        </div>
                        <div className="center">
                            <button className="btn green" type="submit">Update Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id,title, body) => { dispatch(updatePost(id,title, body))}
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id
    const post = state.posts.find(post => post.id==id)
    return {
        post: post
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
