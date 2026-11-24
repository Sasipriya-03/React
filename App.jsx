import './App.css'
import Task from './Task';
import Course from './Course';
import StudentCard from './StudentCard';
import Cotton from './assets/Cotton saree.jpg';
import Skill from './assets/Skill Saree.jpg';
import Pattu from './assets/Pattu Saree.jpg';
import EmployeeCard from './EmployeeCard';
import Result from './Result';
import HTML from './assets/HTML.jpg';
import CSS from './assets/CSS.jpg';
import JS from './assets/JS.jpg';
function App() {
  return (
    <>
{/*     
    <Course name="HTML" price="$199" image={HTML}/>
    <Course name="CSS" price="$199" image={CSS}/>
    <Course name="JS" price="$299" image={JS}/> */}

    <Task name="Cotton Saree" price="$300" image={Cotton} show={true}/>
    <Task name="Skill Saree" price="$500" image={Skill} show={true}/>
    <Task name="Pattu Saree" price="$700" image={Pattu}show={true}/>

    {/* <StudentCard name="Sasi" department="ECE" year="Final year" college="Sengunthar Engineering College"/>
    <StudentCard name="Jeevitha" department="Cyber" year="Second year" college="Kumarasamy Engineering College"/>
    <StudentCard name="priya" department="IT" year="First year" college="Sengunthar Engineering College"/> */}

    {/* <EmployeeCard name="Sasi" role="Frontend Developer" department="IT" id="EMP101" experience="Fresher"/>
    <EmployeeCard name="Priya" role="Java Developer" department="Software" id="EMP102" experience="1 Year"/>
    <EmployeeCard name="Jeevitha" role="UI Developer" department="Design" id="EMP103" experience="2 Year"/> */}
    {/* <Result mark={10}/> */}
    </>
    
  );
}

export default App
