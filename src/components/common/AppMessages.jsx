/**
  AppMessages component
**/

import React from 'react';

const AppMessages = (props) => {
  return (<div className="xd-message msg-danger">
    <div className="xd-message-icon">
      <i className="fa fa-list"></i>
    </div>
    <div className="xd-message-content">
      <p>{props.appMessage}</p>
    </div>
    <a href="#" className="xd-message-close">
      <i className="close-icon ion-close-round"></i>
    </a>
  </div>)
}

export default AppMessages
