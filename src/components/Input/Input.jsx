import React from 'react';

const Input = (props) => {

    return(
        <input type={props.InputData.type} id={props.InputData.id} placeholder={props.InputData.placeholder} autocomplete={props.InputData.autocomplete} />

    )
}

export default Input;