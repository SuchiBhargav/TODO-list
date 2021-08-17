import React from 'react';

const Sresult=(props)=>{
    //del last end of url size decrease we can use back ` ${} es6 feature to pass props
    const img=`https://source.unsplash.com/600x300/?${props.name}`
    return(
        <>
        <img src={img} alt="images-result"/>
        </>

    );
}
export default Sresult;