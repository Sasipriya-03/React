function Result(props){
        if(props.mark>=35){
           return <h2>Pass</h2>;
        }else{
            return<h2>Fail</h2>
        }

    
}
export default Result