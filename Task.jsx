import PropTypes from 'prop-types'
function Task(props){
  if(props.show==true){
    return(
      <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
      
    );

  }
  else{
    return(
      <div className="card">Product is not Avaliable</div>
    );
  }
    
}
Task.PropTypes={
  name:PropTypes.string,
  price:PropTypes.number,
  show:PropTypes.bool
}
export default Task