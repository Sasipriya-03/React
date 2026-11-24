import HTML from './assets/Html.jpg'

const Course1="HTML";
function Course(props){
    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            
            
        </div>
    );
}


export default Course