function EmployeeCard({name,role,department,id,experience}){
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{department}</p>
            <p>{id}</p>
            <p>{experience}</p>
        </div>

    );
}
export default EmployeeCard