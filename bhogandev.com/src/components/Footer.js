import React from 'react';

const Footer = (props) => {

    return (
        <div className="footer">
             &copy; 2020 Brandon Hogan.
            <div className="f-links">
                <a href="https://twitter.com/BrandonTheDev" target="_blank" className="f-ilink">
                    <i class="fa fa-twitter-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/brandon-hogan-9994b0153/" target="_blank" className="f-ilink">
                    <i class="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/bhogandev" target="_blank" className="f-ilink">
                    <i class="fa fa-github-square"></i>
                </a>
            </div>
        </div>
    )

}

export default Footer;