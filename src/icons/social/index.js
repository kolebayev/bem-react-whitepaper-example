import React from "react";

import Facebook from './Facebook';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';


const Icon = props => {
  switch (props.name) {
    case "facebook":
      return <Facebook size={props.size}/>;
    case "twitter":
      return <Twitter size={props.size}/>;
    case "linkedin":
      return <LinkedIn size={props.size}/>;
    default:
      return;
  }
};

export default Icon;
