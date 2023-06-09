
export const Button = props => {
  return ( 
    <button 
      className={props.className}  
      style={props.style} 
      onClick={props.onClick} 
      disabled={props.disabled}
    >{props.text}</button>
  )
}
