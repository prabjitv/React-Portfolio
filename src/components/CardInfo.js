import React from 'react';
import { useSpring, animated } from 'react-spring';


function CardInfo(props) {

  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <h1 className="g-card-title">{props.title}</h1>
      <h5 className="g-card-sub-title">{props.subTitle}</h5>
      <h5 className="g-card-tech">{props.tech}</h5>
      <div className="g-card-links justify-content-around">
        <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>

      </div>
    </animated.div>
  )
}

export default CardInfo;



