import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            posts:{},
            comments:[],
            users:{}
   
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const posts=response.data
            console.log(posts)
            axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
            .then(response=>{
                const users=response.data
                this.setState({posts,users})
            })
            
        })
    

        .catch(err=>{
            alert(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{
            const comments=response.data
            
            this.setState({comments})
        })
        .catch(err=>{
            alert(err)
        })
    }
    
    

    render(){
        return(
            <div class='container'>
                <div class="jumbotron">
                <p><b>USER NAME:</b> <span class='text-primary'>{this.state.users.name}</span></p>
                <p ><b >TITLE-</b><span class='text-primary'>{this.state.posts.title}</span></p>
                <p><b>BODY-</b><span class='text-primary'>{this.state.posts.body}</span></p>
                </div>
                <h3><span class='text-primary'>COMMENTS</span></h3>
                <ul>
                <span class='text-warning'>
                    {
                        this.state.comments.map(comment=>{
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                    </span>
                </ul>

                <h3><span class='text-primary'>More posts of author:</span><Link to={`/users/${this.state.users.id}`}>{this.state.users.name}</Link></h3>
            </div>
        )
    }
}
export default PostShow
 