import React, { useState } from 'react';


function Box (props) {
    //  console.log(props.on)

    // const [On, setOn ] = useState("props.on");
    // console.log(props.id)

//    function toggle(){
//     setOn(prevOn => !prevOn)
//    }


const styles = {
    backgroundColor: props.on ? "#222222":"transparent"

}
    return ( 
        <div
        style={styles}
         className="box" 
         onClick={props.toggle}>


        </div>
     );
}

export default Box ;