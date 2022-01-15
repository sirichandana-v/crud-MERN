import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';


export default function ShowStudents() {

    const [studentsList,setStudentsList]=useState([]);

    const deleteStudent=(id)=>{
        axios.delete(`http://localhost:5000/students/${id}`)
    }

    useEffect(()=>{
        
      const getStudentData=async()=>{
        await axios.get('http://localhost:5000/students').then(allStudents=>setStudentsList(allStudents.data))
        console.log("hello")
      }
      getStudentData();
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">Registration Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{student.regNo}</TableCell>
              <TableCell align="right">{student.studentName}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
                  <Button onClick={()=>deleteStudent(student._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}