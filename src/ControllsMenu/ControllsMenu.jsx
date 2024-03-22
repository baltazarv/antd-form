import * as React from 'react'
import PropTypes from 'prop-types'
import './ControllsMenu.scss'

const ControllsMenu = ({
  title = "Controls",
  className,
  children,
}) => {
  return <div className={`controls-menu${className ? ' ' + className : ''}`}>
    <div className="controls-menu-title">{title}:</div>
    <div className="controls-menu-content">{children}</div>
  </div>
}

ControllsMenu.propTypes = {}

export default ControllsMenu