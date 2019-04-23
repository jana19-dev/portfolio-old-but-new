import React from 'react'

export default () => (
  <div className='card-wrap'>

    <div className='content about'>

      <div className='title'>About Me</div>

      <div className='row'>
        <div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
          <div className='text-box'>
            <p>
              I am Ryan Adlard, web designer from USA, California. I have rich experience in
              web site design and building and customization, also I am good at wordpress.
              I love to talk with you about our unique.
            </p>
          </div>
          <div className='info-list'>
            <ul>
              <li><strong>Age . . . . .</strong>24</li>
              <li><strong>Residence . . . . .</strong>USA</li>
              <li><strong>Freelance . . . . .</strong>Available</li>
              <li><strong>Address . . . . .</strong>California, USA</li>
            </ul>
          </div>
        </div>
        <div className='clear' />
      </div>

    </div>

    <div className='content services'>

      <div className='title'>My Services</div>

      <div className='row service-items border-line-v'>

        <div className='col col-d-6 col-t-6 col-m-12 border-line-h'>
          <div className='service-item'>
            <div className='icon'><span className='ion ion-code' /></div>
            <div className='name'>Web Development</div>
            <p>
              Modern and mobile-ready website that will help you
              reach all of your marketing.
            </p>
          </div>
        </div>

        <div className='col col-d-6 col-t-6 col-m-12 border-line-h'>
          <div className='service-item'>
            <div className='icon'><span className='ion ion-music-note' /></div>
            <div className='name'>Music Writing</div>
            <p>
              Music copying, transcription, arranging and composition services.
            </p>
          </div>
        </div>

        <div className='col col-d-6 col-t-6 col-m-12'>
          <div className='service-item'>
            <div className='icon'><span className='ion ion-speakerphone' /></div>
            <div className='name'>Advetising</div>
            <p>
              Advertising services include television, radio, print, mail and web.
            </p>
          </div>
        </div>

        <div className='col col-d-6 col-t-6 col-m-12'>
          <div className='service-item'>
            <div className='icon'><span className='ion ion-ios-game-controller-b' /></div>
            <div className='name'>Game Development</div>
            <p>
              Developing memorable and unique mobile android, ios games.
            </p>
          </div>
        </div>

        <div className='clear' />
      </div>

    </div>

    <div className='content pricing'>

      <div className='title'>Pricing</div>

      <div className='row pricing-items'>

        <div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
          <div className='pricing-item'>
            <div className='icon'><i className='ion ion-speedometer speed-basic' /></div>
            <div className='name'>Basic</div>
            <div className='amount'>
              <span className='dollar'>$</span>
              <span className='number'>22</span>
              <span className='period'>hour</span>
            </div>
            <div className='feature-list'>
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li className='disable'>Music Writing</li>
                <li className='disable'>Photography <strong>new</strong></li>
              </ul>
            </div>
            <div className='lnks'>
              <a href='#' className='lnk'>
                <span className='text'>Buy Basic</span>
                <i className='ion ion-speedometer speed-basic' />
              </a>
            </div>
          </div>
        </div>

        <div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
          <div className='pricing-item'>
            <div className='icon'><i className='ion ion-speedometer' /></div>
            <div className='name'>Pro</div>
            <div className='amount'>
              <span className='dollar'>$</span>
              <span className='number'>48</span>
              <span className='period'>hour</span>
            </div>
            <div className='feature-list'>
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li>Music Writing</li>
                <li>Photography <strong>new</strong></li>
              </ul>
            </div>
            <div className='lnks'>
              <a href='#' className='lnk'>
                <span className='text'>Buy Pro</span>
                <i className='ion ion-speedometer' />
              </a>
            </div>
          </div>
        </div>

        <div className='clear' />
      </div>

    </div>

    <div className='content fuct'>

      <div className='title'>Fun Fact</div>

      <div className='row fuct-items'>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='fuct-item'>
            <div className='icon'><span className='ion ion-disc' /></div>
            <div className='name'>80 Albumes Listened</div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='fuct-item'>
            <div className='icon'><span className='ion ion-trophy' /></div>
            <div className='name'>15 Awards Won</div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='fuct-item'>
            <div className='icon'><span className='ion ion-coffee' /></div>
            <div className='name'>1 000 Cups of coffee</div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='fuct-item'>
            <div className='icon'><span className='ion ion-flag' /></div>
            <div className='name'>10 Countries Visited</div>
          </div>
        </div>

        <div className='clear' />
      </div>

    </div>

    <div className='content clients'>

      <div className='title'>Clients</div>

      <div className='row client-items'>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='client-item'>
            <div className='image'>
              <a target='_blank' href='https://www.google.com'>
                <img src='images/bg.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='client-item'>
            <div className='image'>
              <a target='_blank' href='https://www.google.com'>
                <img src='images/bg.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='client-item'>
            <div className='image'>
              <a target='_blank' href='https://www.google.com'>
                <img src='images/bg.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>

        <div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
          <div className='client-item'>
            <div className='image'>
              <a target='_blank' href='https://www.google.com'>
                <img src='images/bg.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>

        <div className='clear' />
      </div>

    </div>

    <div className='content testimonials'>

      <div className='title'>Testimonials</div>

      <div className='row testimonials-items'>

        <div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
          <div className='revs-carousel default-revs'>
            <div className='owl-carousel'>
              <div className='item'>
                <div className='revs-item'>
                  <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className='user'>
                    <div className='img'><img src='images/profile.png' alt='' /></div>
                    <div className='info'>
                      <div className='name'>Helen Floyd</div>
                      <div className='company'>Art Director</div>
                    </div>
                    <div className='clear' />
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='revs-item'>
                  <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className='user'>
                    <div className='img'><img src='images/profile.png' alt='' /></div>
                    <div className='info'>
                      <div className='name'>Robert Chase</div>
                      <div className='company'>CEO</div>
                    </div>
                    <div className='clear' />
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='revs-item'>
                  <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className='user'>
                    <div className='img'><img src='images/profile.png' alt='' /></div>
                    <div className='info'>
                      <div className='name'>Helen Floyd</div>
                      <div className='company'>Art Director</div>
                    </div>
                    <div className='clear' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='clear' />
      </div>

    </div>

  </div>
)
