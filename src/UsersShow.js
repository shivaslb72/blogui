import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log('id',id)
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const users=response.data
            console.log(users)
            
            this.setState({users})
        })
        .catch(err=>{
            alert(err)
        })
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            const posts=response.data
            console.log('posts',posts)
            this.setState({posts})
        })
        .catch(err=>{
            alert(err)
        })
    }
    
    render(){
        console.log(this.props)
        console.log(this.state.users.name)
        return(
            <div>
                <h2><span class='text-danger'>USER NAME-{this.state.users.name}</span></h2>
                <p>{this.state.posts.name}</p>
                <h3><span class='text-warning'>POSTS WRITTEN BY USER</span></h3>
                <ul>
                
                    {
                        this.state.posts.map(post=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                   
                </ul>
                
                     
            </div>
        )
    }
}
export default UserShow