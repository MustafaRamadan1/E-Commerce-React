import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className="quote">
                <p>Be In Touch With US</p>
            </div>
            <div className="input-form">
                <form>
                    <input type='text' placeholder='Enter Your Email'/>
                    <button type='submit'>Join US</button>
                </form>
            </div>
            <div className="socialIcons">
                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                    <FacebookIcon/>
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                    <InstagramIcon/>
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                    <TwitterIcon/>
                </a>
                <a href='https://google.com' target='_blank' rel='noreferrer'>
                    <GoogleIcon/>
                </a>
                <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
                    <PinterestIcon/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
