import React from 'react'
import ThemeToggler from '../ThemeToggler'
import DownloadBtn from './DownloadBtn'

const LeftLayout = ({children}) => {
  const [showMenu, setShowMenu] = React.useState(false)

  const onOpenMenu = () => {
    setShowMenu(true)
  }

  const onCloseMenu = () => {
    setShowMenu(false)
  }

  const eachLink = () => {
    setShowMenu(false)
  }

	return (
		<div className="col-md-6">
      <div className="left-layout">
        <div className="header">
          <div className="left-hd">
            <div className="menu-toggle">
              <button className="menu-toggle-button" onClick={onOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={`menu-links ${showMenu ? 'show' : ''}`}>
              <button className="close-menu" onClick={onCloseMenu}>&times;</button>
              <a href="#about" onClick={eachLink}>About</a>
              <a href="#project" onClick={eachLink}>Projects</a>
              <a href="#contact" onClick={eachLink}>Contact</a>
            </div>
          </div>
          <div className="right-hd">  
            <div className="right-c-wrapper">
              <ThemeToggler/>
              <div className="expand-button">
                <DownloadBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
	)
}

export default LeftLayout