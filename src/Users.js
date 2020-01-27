import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
           
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            this.setState({users})
        })
        .catch(err=>{
            alert(err)
        })
    }
    render(){
        return(
            <div >
                <h1><span class='text-warning'>Listing Users-{this.state.users.length}</span></h1>
                <ul className='list-group'>
                    {
                        this.state.users.map(user=>{
                            return <li key={user.id} className='list-group-item'><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Users