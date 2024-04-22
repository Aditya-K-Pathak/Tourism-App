import React from "react";
import { Link } from 'react-router-dom';

function Contact({ contacts }) {

    function img(event) {
        event.target.classList.toggle("active");
    }

    return (
        <div className="cont-img">
            <div className="cont-hover">

                <div className="cont-container">
                    <div className="cont-wrap">
                        <div className="cont-title txt-shadow">Jay Jain</div>
                        <div className="cont-place  txt-shadow"><i className="fa-solid fa-location-dot" />Mohali, Punjab</div>
                    </div>
                    <div className="cont-content">
                        <p className="txt-shadow">+919098736865</p>
                        <p className="txt-shadow">talerajay@gmail.com</p>
                        {/* <p className="txt-shadow">{contacts.ctype1}<br />{contacts.ctype2}</p> */}
                        <div className="cont-buttons">
                            <div className="cont-btn">
                                <button><a href='https://www.linkedin.com/in/jayjain6865/'>View here</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
