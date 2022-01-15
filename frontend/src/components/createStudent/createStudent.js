import  {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../styles.js';
import axios from 'axios';



export default function CreateStudent() {
  const classes=useStyles();
  const [student,setStudent]=useState({
    regNo:'',
    studentName:'',
    grade:'',
    section:''
  });

  const createStudent=()=>{
    console.log(student)
    axios.post('http://localhost:5000/students', student);

  }
  return (
      <>
      <h2>Create student</h2>
      <Box
      className={classes.root}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registration number" variant="outlined" value={student.regNo} onChange={e=>setStudent({...student,regNo:e.target.value})}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={e=>setStudent({...student,studentName:e.target.value})}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={e=>setStudent({...student,grade:e.target.value})}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={e=>setStudent({...student,section:e.target.value})}/>
      <Button variant="contained" onClick={createStudent}>Create</Button>
    </Box>

      </>
    
  );
}