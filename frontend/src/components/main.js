import React from 'react'

export default () => (
  <div className='card-started' id='home-card'>
    <div className='profile'>
      <div className='slide' style={{ backgroundimage: 'url(images/bg.jpg)' }} />

      <div className='image'>
        <img src='images/profile.png' alt='' />
      </div>

      <div className='title'>Ryan Adlard</div>
      <div className='subtitle'>Web Designer</div>

      <div className='social'>
        <a target='_blank' href='https://dribbble.com/'><span className='fab fa-dribbble' /></a>
        <a target='_blank' href='https://twitter.com/'><span className='fab fa-twitter' /></a>
        <a target='_blank' href='https://github.com/'><span className='fab fa-github' /></a>
        <a target='_blank' href='https://www.spotify.com/'><span className='fab fa-spotify' /></a>
        <a target='_blank' href='https://stackoverflow.com/'><span className='fab fa-stack-overflow' /></a>
      </div>

      <div className='lnks'>
        <a href='#' className='lnk'>
          <span className='text'>Download CV</span>
          <span className='ion ion-archive' />
        </a>
        <a href='#' className='lnk discover'>
          <span className='text'>Contacts Me</span>
          <span className='arrow' />
        </a>
      </div>

    </div>
  </div>
)
