import React from 'react'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import UserShow from './UsersShow'
import PostShow from './PostsShow'



function App(props){
  return(
    <BrowserRouter>
    <div>
        <h1><span class='text-primary'>BLOG UI</span></h1>
         <Link to='/'>Home|</Link> 
         <Link to='/Users'>Users|</Link> 
         <Link to='/Posts'>Posts</Link> 


         <Route path='/' component={Home} exact={true}/>
         <Route path='/Users' component={Users}exact={true}/>
         <Route path='/Posts' component={Posts}exact={true}/>
         <Route path='/users/:id' component={UserShow}/>
         <Route path='/posts/:id' component={PostShow}/>

    </div>
    </BrowserRouter>
  )
}

export default App
