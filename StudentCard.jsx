
function StudentCard({ name, department, year, college }){
    return(
        
         <div className="card">
           
            <h2>{name}</h2>
            <p>{department}</p>
            <p>{year}</p>
            <p>{college}</p>      
        </div>

    );
}
export default StudentCard