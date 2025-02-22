import React from "react";

const Button = (props) => {
const handleClick = e => props.history.push(props.route)

return (
    <button onClick={handleClick} role={props.role}>
    {props.children}
</button>
)
}

export default Button