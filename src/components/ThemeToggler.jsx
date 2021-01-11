import {React, useState, useEffect, useCallback} from 'react'

const [html] = document.getElementsByTagName('html')

const Toggler = () => {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = useCallback(() => {
		setIsDark(!isDark)
	}, [isDark])

	useEffect(() => {
		if (isDark) html.setAttribute('dark', 'true')
		else html.removeAttribute('dark')
	}, [isDark])

	return (
		<div className="toggle-theme">
      <input type="checkbox" id="toggle" checked={isDark} value={isDark} onChange={toggleTheme} />
      <label htmlFor="toggle">
        <span className="toggle_BsTx_moon">🌜</span>
        <span className="toggle_BsTx_sun">🌞</span>
        <div className="toggleThumb"></div>
      </label>
    </div>
	)
}

export default Toggler