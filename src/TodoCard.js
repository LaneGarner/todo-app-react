import react from 'react'

const buttonStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontSize: "14px",
    padding: "5px 30px",
    borderRadius: "5px",
    border: "none",
    margin: "10px 5px",
    cursor: "pointer"
}

function TodoCard(props) {
    const {title, clickToRemove, index } = props
    return (
        <div>
            <li style={{color: "#61DAFB"}}>{title}</li>
            <button style={ buttonStyle } onClick={()=>{clickToRemove(index)}}>Remove</button>
        </div>
    )
}

export default TodoCard