import React from 'react'

export default ({ active, onHeaderItemClick, isMobile }) => (
  <header className='header'>
    <div className='top-menu'>
      <ul>
        {isMobile &&
          <li className={active === 'home' ? 'active' : ''}>
            <a style={{ cursor: 'pointer' }} onClick={(e) => onHeaderItemClick(e, 'home')} >
              <span className='icon ion-person' />
              <span className='link'>Home</span>
            </a>
          </li>
        }
        <li className={active === 'about' ? 'active' : ''}>
          <a style={{ cursor: 'pointer' }} onClick={(e) => onHeaderItemClick(e, 'about')} >
            <span className='icon ion-person' />
            <span className='link'>About</span>
          </a>
        </li>
        <li className={active === 'resume' ? 'active' : ''}>
          <a style={{ cursor: 'pointer' }} onClick={(e) => onHeaderItemClick(e, 'resume')} >
            <span className='icon ion-android-list' />
            <span className='link'>Resume</span>
          </a>
        </li>
        <li className={active === 'projects' ? 'active' : ''}>
          <a style={{ cursor: 'pointer' }} onClick={(e) => onHeaderItemClick(e, 'projects')} >
            <span className='icon ion-paintbrush' />
            <span className='link'>Projects</span>
          </a>
        </li>
        <li className={active === 'contacts' ? 'active' : ''}>
          <a style={{ cursor: 'pointer' }} onClick={(e) => onHeaderItemClick(e, 'contacts')} >
            <span className='icon ion-at' />
            <span className='link'>Contacts</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
)
