import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.about}</a>
      </li>
      
    </ul>
  
    </div>
    <button type="button" class="btn btn-warning" onClick={props.toggle}>Switch Theme</button>
   </nav>
  
  )
}
navbar.propTypes={title: PropTypes.string,about:PropTypes.string,}
navbar.defaultProps={title:"TextEditor",about:"About Us"}

