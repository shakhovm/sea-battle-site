import React from "react";

const CustomInput = (props) => (
    <div className={"form-element"}>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name} value={props.value} onChange={e => props.onChange(e.target.value)}
        placeholder={props.placeholder} onBlur={e => props.onBlur(e)}/>
        <div className={"errorMessage"} >{props.errorMessage}</div>
    </div>
);

export default CustomInput;