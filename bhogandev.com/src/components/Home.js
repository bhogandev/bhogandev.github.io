import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Container, Row, Col} from 'react-bootstrap'

const Home = (props) => {
    return(
        <div className="main">
            <div className="header">
                <Container>
                    {/* This is where the header profile image will go */}
                    <img className="h-img" src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg" />
                    <h1 className="h-title">Brandon Hogan</h1>
                    <h2 className="h-lead">Programmer, Youtuber, Doer of other stuff</h2>
                </Container>
            </div>
            <Container className="sub-cat" fluid="md">
                <Row>
                    <Col md={10} id="about">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae posuere elit. Donec ligula risus, consectetur id faucibus ut, maximus sit amet nunc. In consequat, nunc ac aliquet convallis, mi eros vulputate est, vitae efficitur eros metus at nibh. Donec convallis risus vel tellus tincidunt accumsan. Sed mauris odio, dapibus in rutrum vitae, aliquam quis dui. Vestibulum sit amet cursus nulla. Ut ornare aliquet ipsum vel pharetra. Etiam fringilla sagittis varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis hendrerit tincidunt. Mauris condimentum mi ut magna condimentum, mattis accumsan sapien consequat.</p>
                    </Col>            
                    <Col id="contact">
                        <h3>Contact</h3>
                        {/* This is where the icons will go for contact */}
                        <p>Donec id euismod sem, ac dictum arcu. Pellentesque ullamcorper tortor nec maximus aliquet. Suspendisse aliquam lacus vel neque venenatis faucibus. Vivamus vestibulum sodales augue, et hendrerit nunc aliquam in. Cras ornare eget felis et posuere. Donec a commodo enim. In eu iaculis lorem, nec facilisis nunc. Aliquam et lorem ut dolor volutpat blandit in a nibh. Proin eu risus faucibus, sodales urna a, sollicitudin sem.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;