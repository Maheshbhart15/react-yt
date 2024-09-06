

function Button(props) {

    const StyleObj={
        color:props.textColor,
        backgroundColor:props.bgColor,
    
    
    }
    return (
        <button style={StyleObj}>{props.name}</button>  // Apply the custom-button CSS class
    );
  }
  
  export default Button;  
  