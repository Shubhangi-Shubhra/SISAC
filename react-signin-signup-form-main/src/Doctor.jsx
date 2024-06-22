import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import * as Components from './Components';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Doctor() {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        yearsOfService: '',
        password: '',
        confirmPassword: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault(); 
        console.log('Registration Form Data:', registrationData);

        navigate('/success');

        setRegistrationData({
            name: '',
            email: '',
            phoneNumber: '',
            location: '',
            yearsOfService: '',
            password: '',
            confirmPassword: ''
        });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault(); 
        console.log('Login Form Data:', loginData);

        navigate('/successlogin');

        setLoginData({
            email: '',
            password: ''
        });
    };

    const handleInputChange = (event, formType) => {
        const { name, value } = event.target;
        if (formType === 'registration') {
            setRegistrationData({ ...registrationData, [name]: value });
        } else if (formType === 'login') {
            setLoginData({ ...loginData, [name]: value });
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form style={{ width: '320px' }} onSubmit={handleRegistrationSubmit}>
                    <Components.Title>Registration form Doctor</Components.Title>
                    <Components.Input
                        type='text'
                        name='name'
                        value={registrationData.name}
                        placeholder='Name'
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(e, 'registration')}
                    />
                    <Components.Input
                        type='email'
                        name='email'
                        value={registrationData.email}
                        placeholder='Email'
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(e, 'registration')}
                    />
                    <Components.Input
                        type='tel'
                        name='phoneNumber'
                        value={registrationData.phoneNumber}
                        placeholder='Phone Number'
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(e, 'registration')}
                    />
                    <Components.Input
                        type='text'
                        name='location'
                        value={registrationData.location}
                        placeholder='Location'
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(e, 'registration')}
                    />
                    <Components.Input
                        type='text'
                        name='yearsOfService'
                        value={registrationData.yearsOfService}
                        placeholder='Years of Service'
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(e, 'registration')}
                    />
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={registrationData.password}
                            placeholder='Password'
                            style={{ width: '100%' }}
                            onChange={(e) => handleInputChange(e, 'registration')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            value={registrationData.confirmPassword}
                            placeholder='Confirm Password'
                            style={{ width: '100%' }}
                            onChange={(e) => handleInputChange(e, 'registration')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Button type='submit' style={{ width: '100%' }}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleLoginSubmit}>
                    <Components.Title>Log in</Components.Title>
                    <Components.Input
                        type='email'
                        name='email'
                        value={loginData.email}
                        placeholder='Email'
                        onChange={(e) => handleInputChange(e, 'login')}
                    />
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={loginData.password}
                            placeholder='Password'
                            style={{ width: '100%' }}
                            onChange={(e) => handleInputChange(e, 'login')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type='submit'>Submit</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back To SISAC!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Doctor!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton> 
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Doctor;
