import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import './purple.css'
import SEO from './seo'
import Background from './background'

const Layout = ({ children, title, activePage }) => (
  <div className='page'>
    <link href='https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' rel='stylesheet' />
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.9/css/all.css' integrity='sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1' crossOrigin='anonymous' />
    <SEO title={title} keywords={[`jana rajakumar`, `jana`, `jana19`, `developer`, `web developer`, `reactJS`]} />
    <Background />
    <div className='container opened' data-animation-in='fadeInLeft' data-animation-out='fadeOutLeft'>
      {children}
    </div>
  </div>
)

Layout.defaultProps = {
  title: 'Home',
  activePage: '/'
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
