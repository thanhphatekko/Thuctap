import React from 'react';
import './register.css';

function Register() {
    return (
        <div>
            <div>
                <div className='hi mt-2'>
                    <a href="/">Home </a> / <a href="">Register</a>
                    <h1 className='mt-4'>Register</h1>
                </div>
            </div>
            <div className="register-container">
                <div className="register-options">
                    <button>Register with Facebook</button>
                    <button>Register with Google+</button>
                    <button>Register with Instagram</button>
                </div>
                <div className="profile-picture">
                    <img src="https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_cb380b99-8d17-42c8-99e1-f18517ac8d54.jpg" alt="Profile Picture" />
                    <button>Upload Image</button>
                </div>
                <form>
                    <div className="form-group">
                        <label form="first-name">First Name*</label>
                        <input type="text" id="first-name" required />
                    </div>

                    <div className="form-group">
                        <label form="last-name">Last Name*</label>
                        <input type="text" id="last-name" required />
                    </div>

                    <div className="form-group">
                        <label form="email">Email Address*</label>
                        <input type="email" id="email" required />
                    </div>

                    <div className="form-group">
                        <label form="mobile-number">Mobile Number*</label>
                        <input type="tel" id="mobile-number" required />
                    </div>
                    <div className="form-group">
                        <label form="street">Street</label>
                        <input type="street" id="street" required />
                    </div>

                    <div className="form-group">
                        <label form="Area">Area</label>
                        <input type="Area" id="Area" required />
                    </div>

                    <div className="form-group">
                        <label form="Emirate">Emirate</label>
                        <input type="Emirate" id="Emirate" required />
                    </div>

                    <button type="submit" className="register-button">REGISTER</button>
                </form>
            </div>
        </div>
    );
}

export default Register;