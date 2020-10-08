import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import React from 'react'
import Home from "../Pages/Home/Home"
import Projects from "../Pages/Projects/Projects"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Experience from "../Pages/Experience/Experience";
import Project from "../Pages/Projects/Project";

const createHistory = createBrowserHistory
const history = createHistory()

const AppRouter = () => {
    //auth
    //default
    return (
        <Router history={history}>
            <UnauthenticatedRoutes />
        </Router>

    )
}

const UnauthenticatedRoutes:React.FC = () => {
    return (
        <>
        <Switch>
            <Route path="/projects/:id"
                   render={(props)=>{
                       if (props.match.params.id === undefined)
                           return <Projects />
                       return <Project projectId={props.match.params.id}/>
                   }}
            />
            <Route path="/home" render={()=> <Home />} />
            <Route path="/projects" render={()=> <Projects />} />
            <Route path="/experience" render={()=> <Experience />} />
            <Route path="/about" render={()=> <About />} />
            <Route path="/contact" render={()=> <Contact />} />
            <Route path="" render={()=> <Home />} />
            <Route path="*" exact={true} render={() => <Redirect to="/home" />} />
        </Switch>
        </>
    )
}

export default AppRouter