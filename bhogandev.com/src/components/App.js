import React from 'react';
import {Route, Switch} from 'react-router'
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props){
        super(props)
    }

render(){
    return (
        <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
        </Switch>
        <hr />
        <Footer />
        </div>
    )
}

}

export default App;