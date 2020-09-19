import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Container, Row, Col} from 'react-bootstrap';
import { useEffect } from 'react';

const Home = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | Home";
    });

    return(
        <div className="main">
            <div className="header">
                <Container>
                    {/* This is where the header profile image will go */}
                    <img className="h-img"/>
                    <h1 className="h-title">Brandon Hogan</h1>
                    <h2 className="h-lead">Programmer, Youtuber, Doer of other stuff</h2>
                </Container>
            </div>
            <div className="sub-cat">
                <Container className="sub-cat-secs">
                    <Row>
                        <Col xs={8} id="about">
                            <h3>About</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere elit. Donec ligula risus, consectetur id faucibus ut, maximus sit amet nunc. In consequat, nunc ac aliquet convallis, mi eros vulputate est, vitae efficitur eros metus at nibh. Donec convallis risus vel tellus tincidunt accumsan. Sed mauris odio, dapibus in rutrum vitae, aliquam quis dui. Vestibulum sit amet cursus nulla. Ut ornare aliquet ipsum vel pharetra. Etiam fringilla sagittis varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis hendrerit tincidunt. Mauris condimentum mi ut magna condimentum, mattis accumsan sapien consequat.</p>
                        </Col>            
                        <Col id="contact">
                            <h3>Contact</h3>
                            {/* This is where the icons will go for contact */}
                            <a href="https://twitter.com/BrandonTheDev" style={{fontSize: "20px"}} target="_blank">
                                <i class="fa fa-twitter-square" style={{fontSize: "2em"}}></i>
                                Twitter
                            </a>
                            <br />
                            <a href="https://www.linkedin.com/in/brandon-hogan-9994b0153/" style={{fontSize: "20px"}} target="_blank">
                                <i class="fa fa-linkedin-square" style={{fontSize: "2em"}}></i>
                                LinkedIn
                            </a>
                            <br />
                            <a href="https://github.com/bhogandev" style={{fontSize: "20px"}} target="_blank">
                                <i class="fa fa-github-square" style={{fontSize: "2em"}}></i>
                                Github
                            </a>
                            <br />
                            <a href="mailto:bhogandev@outlook.com" style={{fontSize: "20px"}} target="_blank">
                                <i class="fa fa-envelope-square" style={{fontSize: "2em"}}></i>
                                Email
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home;