import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/postAction';

export class Post extends Component {
    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    handleUpdate = () => {
        
    }
    render() {
        const post = this.props.post ? (
            <div className="container">
                <h4>{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
                <div className="center row">
                    <Link className="btn green col s3" to={ "/update/" + String(this.props.post.id)}>Update post</Link>
                    <button className="btn grey col s3 offset-s3" onClick={ this.handleDelete }>Delete post</button>
                </div>
                

            </div>
        ) : (
            <h4 className="center">Loading Post...</h4>
        )
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    const post = state.posts.find(post => post.id == id)
    return {
        post:post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
