import { useState } from 'react';
import './style.css';
import { Plus } from 'phosphor-react';
import {CardUser} from '../../Components/CardUser'

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState ([]);

  function handleAddStudent() {
    if(studentName !== '') {
    const newStudent = {
      name: studentName
      
    }

      setStudents ( [...students,newStudent]);

      setStudentName('');

  } else{
    alert('Digite um nome 😄');

  } 

  }

  function handleRemoveStudent(idStudent) {
      setStudents(students.filter((e, index) => index !==  idStudent));
  }
  return (
    <div className="container">
      
      <h1>List of course students</h1>
      <div className="input-container">
        <input 
        type="text" 
        placeholder="Student's name" 
        onChange={e => setStudentName(e.target.value)}
        value={studentName}
        />
        <button title="Adicionar aluno" onClick={handleAddStudent}>
          <Plus size={26} weight="bold" color='#FFF' />
        </button>
      </div>
      <div className="container-list">
        {
           students.map((student, index) => <CardUser key={index} name= {student.name} idStudent={index} onDeleteStudent={handleRemoveStudent}/> )
        }
        
      </div>
    </div>
  )
}