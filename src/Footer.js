import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <a href='/'>
              <img src={logo} alt='logo'/>
            </a>

            <ul>
                <lh>Doormat Navigation</lh>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>

            <ul>
                <lh>Contact</lh>
                <li>
                    <a href='/'>Address</a>
                </li>
                <li>
                    <a href='/'>Phone Number</a>
                </li>
                <li>
                    <a href='/'>Email</a>
                </li>
            </ul>

            <ul>
                <lh>Social Media Links</lh>
                <li>
                    <a href='/'>Address</a>
                </li>
                <li>
                    <a href='/'>Phone Number</a>
                </li>
                <li>
                    <a href='/'>Email</a>
                </li>
            </ul>
        </footer>
    )
}