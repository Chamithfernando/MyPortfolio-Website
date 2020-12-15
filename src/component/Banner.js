import React from 'react'
import {FaFacebookSquare,FaTwitter,FaPinterest,FaInstagramSquare,FaBehanceSquare,FaPlay} from "react-icons/fa"   /* fa for fontawsome*/
import img from '../images/man.png'



const Banner = () => {

    const [state] = React.useState({
        title : "I am Chamith Fernando",
        text : "I am Chamith trainee fullstack developer from SriLanka"
    });

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div className="header__content">
                    <div className="header__section">
                        <ul className="header__ul">
                            <li><FaFacebookSquare/></li>
                            <li><FaTwitter/></li>
                            <li><FaPinterest/></li>
                            <li><FaInstagramSquare/></li>
                            <li><FaBehanceSquare/></li>
                        </ul>
                        <h1>{state.title}</h1>
                        <p>{state.text}</p>
                        <div className="header__buttons">
                        <a href="" className="btn btn-outline">
                            My Portfolio
                            </a>
                        &nbsp; &nbsp; &nbsp;
                        <a href="" className="btn btn-smart"><FaPlay/></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="banner__img">
                        <img src={img} alt="img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
