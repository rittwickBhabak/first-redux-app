const initState = {
    posts: [
        {id:1, title:"Description",  body:"This course was crafted to benefit absolutely any level of developer. We will start from scratch and learn how to create a development environment for Angular 5+, Setup Angular CLI and learn all of the fundamentals. We start by building a sandbox application to look at all of the main Angular concepts as well as building a logging application, then move to a much more advanced client management system with authentication and data storing with Firebase\'s new Firestore platform."},
        {id:2, title:"Heading",  body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nam?"},
        {id:3, title:"JavaScript Projects",  body:"This is a fun, practical & project based course for all skill levels. The projects in this course are designed to get you building things using HTML5, CSS &  JavaScript with no frameworks or libraries. Every project is built from scratch and has some kind of dynamic functionality from small games to an expense tracker to a breathing relax app."},
    ],
}

const rootReducer = (state = initState, action) => {
    if(action.type==='DELETE_POST'){
        const newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    if(action.type==='ADD_POST'){
        return {
            ...state,
            posts: [...state.posts, {id: Math.random(), title: action.title, body:action.body}]
        }
    }
    if(action.type==='UPDATE_POST'){
        console.log(action)
        let post = state.posts.find(post => post.id==action.id)
        post.title = action.title;
        post.body = action.body;
        let newPosts = state.posts.filter(post => post.id!=action.id)
        return {
            ...state,
            posts: [...newPosts, post]
        }
    }
    return state
}

export default rootReducer