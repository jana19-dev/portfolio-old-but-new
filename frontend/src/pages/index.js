import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Main from '../components/main'
import About from '../components/about'
import Resume from '../components/resume'
import Projects from '../components/projects'
import Contacts from '../components/contacts'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    const isMobile = window.innerWidth < 1023
    this.state = {
      active: isMobile ? 'home' : 'about'
    }
  }

  onHeaderItemClick = (e, active) => {
    this.setState({ active }, () => {
      const isMobile = window.innerWidth < 1023
      if (isMobile) {
        const activeElement = document.getElementById(active)
        window.scrollTo({
          behavior: 'smooth',
          top: activeElement.offsetTop
        })
      }
    })
  }

  render () {
    const { active } = this.state
    const isMobile = window.innerWidth < 1023
    const activeClasses = isMobile ? 'card-inner' : 'card-inner animated fadeInLeft active'
    const inactiveClasses = isMobile ? 'card-inner' : 'card-inner animated fadeOutLeft hidden'

    return (
      <Layout title={active.replace(/^\w/, c => c.toUpperCase())}>
        <Header active={active} onHeaderItemClick={this.onHeaderItemClick} isMobile={isMobile} />
        {isMobile
          ? <div className={active === 'home' ? activeClasses : inactiveClasses} id='home'>
            <Main />
          </div>
          : <Main />
        }
        <div className={active === 'about' ? activeClasses : inactiveClasses} id='about'>
          <About />
        </div>
        <div className={active === 'resume' ? activeClasses : inactiveClasses} id='resume'>
          <Resume />
        </div>
        <div className={active === 'projects' ? activeClasses : inactiveClasses} id='projects'>
          <Projects />
        </div>
        <div className={active === 'contacts' ? activeClasses : inactiveClasses} id='contacts'>
          <Contacts />
        </div>
      </Layout>
    )
  }
}
