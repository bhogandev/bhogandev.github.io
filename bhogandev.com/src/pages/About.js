import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import Css3 from '@mui/icons-material/Css';
import JavaScript from '@mui/icons-material/Javascript';
import Code from '@mui/icons-material/Code';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import MobileFriendly from '@mui/icons-material/MobileFriendly';
import GitHub from '@mui/icons-material/GitHub';
import Storage from '@mui/icons-material/Storage';
import Create from '@mui/icons-material/Create';
import golf_img from '../assets/imgs/View recent photos.jpeg';
import music_img from '../assets/imgs/IMG_1300.jpg';
import gaming_img from '../assets/imgs/IMG_1187.jpg';

export default function About(props) {
    useEffect(() => {
        document.title = "Brandon Hogan | About";
    });

    return (
        <div className="">
            <Container className="hero" style={{color: '#FFFFFF'}}>
                <Row className='justify-content-center'>
                    <h2 className='h-title'>About <span style={{color: '#007BFF'}}>Me</span></h2>
                </Row>
                <Row className='justify-content-center'>
                    <h3 className='lead'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
                </Row>
                <Row>
                    <Col>
                        <Row className='justify-content-center sub-row'>
                            <Face6OutlinedIcon style={{fontSize: '20vw', marginTop: 5}} />
                        </Row>
                        <Row className='justify-content-center sub-row'>
                            <h3 className='sub-col-header'>Get to know me!</h3>
                            <p>I'm a Full Stack Developer who enjoys building the Web & Mobile Applications. Check out some of my work in the Projects section.</p>
                            <p>In order to benefit other members of the developer community, I also enjoy contributing content that is linked to the knowledge I have acquired over the years in web development. Please feel free to connect with me or follow me on Linkedin, where I share relevant Web Development and Programming stuff.</p>
                            <p>I'm interested in employment possibilities where I can grow, learn, and contribute. Please get in touch with me if you have a suitable opportunity that matches my qualifications and expertise.</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='justify-content-center sub-row'>
                            <Col className='sub-col'>
                                <h3 className='sub-col-header'>Skills</h3>
                                <div className='skill-badge'><FontAwesomeIcon icon="fa-brands fa-html5" /> HTML</div>
                                <div className='skill-badge'><Css3 /> CSS</div>
                                <div className='skill-badge'><JavaScript /> JavaScript</div>
                                <div className='skill-badge'><Code /> C#</div>
                                <div className='skill-badge'><Create /> .NET</div>
                                <div className='skill-badge'><FontAwesomeIcon icon="fa fa-solid fa-circle-nodes" /> ERP Integration</div>
                                <div className='skill-badge'><FontAwesomeIcon icon="fa fa-solid fa-cloud" /> AWS</div>
                                <div className='skill-badge'><FontAwesomeIcon icon="fa fa-brands fa-python" /> Python</div>
                                <br />
                                <div className='skill-badge'><FontAwesomeIcon icon="fa fa-brands fa-react" /> React JS</div>
                                <div className='skill-badge'><MobileFriendly /> React Native</div>
                                <div className='skill-badge'><GitHub /> Git</div>
                                <div className='skill-badge'><Storage /> SQL</div>
                                <div className='skill-badge'><Create /> Responsive Design</div>
                                <div className='skill-badge'><Create /> SASS</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className='justify-content-center'>
                    <h3 className='sub-col-header'>Hobbies <span style={{color: '#007BFF'}}>&</span> Interest</h3>
                </Row>
                <Row className='justify-content-left sub-row'>
    <Col>
        <img className='hobbie_img' src={golf_img} alt="Golf" />
    </Col>
    <Col>
        <p>Golf? It's my ongoing comedy act! With each swing, I redefine the meaning of "fore"! I might not be a pro yet, but hey, every missed shot is just another opportunity for a good laugh. Here's to chasing that hole-in-one while dodging embarrassment – one mishap at a time!</p>
    </Col>
</Row>
<Row className='justify-content-left'>
    <Col>
        <img className='hobbie_img' src={music_img} alt="Music" />
    </Col>
    <Col>
        <p>When it comes to music, I'm all about that jam session life. Piano, guitar, drums – you name it, I'll play it! Now, I won't promise I'll always hit the right notes or keep perfect time, but hey, who needs perfection when you're having a blast, right? Let's crank up the volume and rock out with some good vibes!</p>
    </Col>
</Row>
<Row className='justify-content-left'>
    <Col>
        <img className='hobbie_img' src={gaming_img} alt="Gaming" />
    </Col>
    <Col>
        <p>VR gaming is my escape, where reality blurs and fantasy comes alive. From battling dragons to exploring galaxies, each adventure fuels my imagination. While I haven't developed my own game yet, my curiosity for game creation adds a new layer of appreciation. Gaming isn't just a pastime; it's a journey of endless discovery.</p>
    </Col>
</Row>

            </Container>
        </div>
    )
}
