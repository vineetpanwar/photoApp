
import ImageComponent from "../images/Images";

import React, { Component } from 'react';

export default class View extends Component {
 
  render() {
    return (
     <div>
         <h1>Please view all your photos here</h1>
         <ImageComponent></ImageComponent>
     </div>
    );
  }
}
