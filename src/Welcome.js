import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
import {Spring} from 'react-spring/renderprops'

const Welcome = ({})=>{
return(
  <Spring
  from={{ number: 0 }}
  to={{ number: 1 }}>
  {props => <div>{props.number}</div>}
</Spring>
)
}


export default Welcome;