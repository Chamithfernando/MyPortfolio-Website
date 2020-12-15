import React from 'react'
import {FaGithub, FaCameraRetro,FaConnectdevelop,FaAppleAlt,FaPhotoVideo,FaCheckCircle} from 'react-icons/fa'
import aos from 'aos'

function Services() {

  
const [header] = React.useState({
    mainheader : "SERVICES",
    subheading : "MyServices",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Error possimus quae quaerat,"
});

const [state] = React.useState([
    {
        id:1,
        icon : FaGithub,
        heading : "Web development",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    },
    {
        id:2,
        icon : FaCameraRetro,
        heading : "Photography",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    },
    {
        id:3,
        icon : FaConnectdevelop,
        heading : "Connecting developers",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    },
    {
        id:4,
        icon : FaAppleAlt,
        heading : "IOS development",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    },
    {
        id:5,
        icon : FaPhotoVideo,
        heading : "Video Editing",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    },
    {
        id:6,
        icon : FaCheckCircle,
        heading : "Success Rate Of development",
        text : "  Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Magnam libero amet commodi temporibus minima earum sint eligendi voluptatum repudiandae voluptate ad, "

    }

]);

    return (
        <div className="services">
            <div className="container  container aos-init aos-animate">
                <div className="services__header">
                    <div className="common">
                    <h3 className="heading">{header.mainheader}</h3>
                    <h1 className="mainHeader">
                        {header.subheading}
                    </h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain" >

                      { /*

                        {state.map(info => (
                            
                        <div className="col-4">
                        <div className="services__box">
                          <FaAppleAlt className="commonIcons"/>
                         
                        <div className="services__box-header">{info.heading}</div>
                        <div className="services__box-p">{info.text}</div>
                        </div>
                    </div>

                        ))}

                        
                        */ }   
                        <div className="col-4">
                        <div className="services__box">
                          <FaGithub className="commonIcons"/>
                         
                        <div className="services__box-header">Web development</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>   

                        <div className="col-4">
                        <div className="services__box">
                          <FaCameraRetro className="commonIcons"/>
                         
                        <div className="services__box-header">Photography</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>

                        <div className="col-4">
                        <div className="services__box"  data-aos="fade-up" data-aos-delay="100">
                          <FaConnectdevelop className="commonIcons"/>
                        <div className="services__box-header">Connecting developers</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>

                        <div className="col-4">
                        <div className="services__box">
                          <FaAppleAlt className="commonIcons"/>
                         
                        <div className="services__box-header">IOS Development</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>  

                        <div className="col-4">
                        <div className="services__box">
                          <FaPhotoVideo className="commonIcons"/>
                        <div className="services__box-header">Video Editing</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>

                        <div className="col-4">
                        <div className="services__box">
                          < FaCheckCircle className="commonIcons"/>
                        <div className="services__box-header">Success Rate Of development</div>
                        <div className="services__box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam libero amet commodi temporibus minima earum sint eligendi
                        voluptatum repudiandae voluptate ad</div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
