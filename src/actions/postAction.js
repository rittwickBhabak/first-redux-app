export const deletePost = id => {
    return {
        type: 'DELETE_POST',
        id
    }
}
export const addPost = (title, body) => {
    return {
        type: 'ADD_POST',
        body,title
    }
}

export const updatePost = (id, title, body) => {
    return {
        type: 'UPDATE_POST',
        id, title, body
    }
}