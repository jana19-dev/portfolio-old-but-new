import React from 'react'

export default () => (
  <div className='card-wrap'>

    <div className='content contacts'>

      <div className='title'>Get in Touch</div>

      <div className='row'>
        <div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
          <div className='map' id='map' />
          <div className='info-list'>
            <ul>
              <li><strong>Address . . . . .</strong>California, USA</li>
              <li><strong>Email . . . . .</strong>adlard@example.com</li>
              <li><strong>Phone . . . . .</strong>+123 654 78900</li>
              <li><strong>Freelance . . . . .</strong>Available</li>
            </ul>
          </div>
        </div>
        <div className='clear' />
      </div>

    </div>

    <div className='content contacts'>

      <div className='title'>Contacts Form</div>

      <div className='row'>
        <div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
          <div className='contact_form'>
            <form id='cform' method='post'>
              <div className='row'>
                <div className='col col-d-6 col-t-6 col-m-12'>
                  <div className='group-val'>
                    <input type='text' name='name' placeholder='Full Name' />
                  </div>
                </div>
                <div className='col col-d-6 col-t-6 col-m-12'>
                  <div className='group-val'>
                    <input type='text' name='email' placeholder='Email Address' />
                  </div>
                </div>
                <div className='col col-d-12 col-t-12 col-m-12'>
                  <div className='group-val'>
                    <textarea name='message' placeholder='Your Message' />
                  </div>
                </div>
              </div>
              <div className='align-left'>
                <a href='#' className='button'>
                  <span className='text'>Send Message</span>
                  <span className='arrow' />
                </a>
              </div>
            </form>
            <div className='alert-success'>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className='clear' />
      </div>

    </div>

  </div>
)
