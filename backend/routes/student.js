import express from 'express';
import {createStudent, editStudent, deleteStudent, getStudents} from '../controllers/student.js'

const router=express.Router();

router.get('/', getStudents )
router.delete('/:id', deleteStudent);
router.put('/:id', createStudent);
router.get('/:id',editStudent);


export default router;