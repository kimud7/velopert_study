import React from 'react';


const chapter = (props) => {
    return (
        <h1 style={{color: props.color}}>{props.test}</h1>
      );
}
 
chapter.defaultProps = {
    color: 'red'
}
export default chapter;