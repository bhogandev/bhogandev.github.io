import React from 'react';
import { Route, Switch } from 'react-router';
import Main from '../pages/Main';
import NavBar from './NavBar';
import Footer from './Footer';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../pages/404';
import BackgroundAnimation from './BackgroundAnimation';

class App extends React.Component {
    render() {
        return (
            <div>
                <script src="https://kit.fontawesome.com/4c3b8dfe4c.js" crossorigin="anonymous"></script>
                <BackgroundAnimation />
                <div className="content">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
