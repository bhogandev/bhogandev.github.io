import React from 'react';
import {Route, Switch} from 'react-router'
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import NavBar from './NavBar';
import Footer from './Footer';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../pages/404';
import Wrapper from './Wrapper';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';


class App extends React.Component {
    constructor(props){
        super(props)
    }

render(){
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    )
}

}

export default App;