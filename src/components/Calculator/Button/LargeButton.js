import React from 'react';


//Bu kısımda Buton compenentini çağırıp boyutlandırma işlemi ile ik, buton yerine "=" simgesi koyulacaktır.
const LargeButton = (props) => (

    <button className="large-btn" onClick= {props.onButtonPress}>
        {props.children}
    </button>


);

export default LargeButton;