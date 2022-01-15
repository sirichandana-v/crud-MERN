import StudentData from '../models/student.js'

export const getStudents=async (req,res)=>{
    try{
console.log("hello get")
        const allStudents=await StudentData.find();
        res.status(200).json(allStudents);

    }catch(e){
        res.status(404).json({message:error.message})

    }
}

export const createStudent=async (req,res)=>{
    
    const student=req.body;
    
    const newStudent=new StudentData(student);
    try{
        await newStudent.save();
        
        res.status(201).json(newStudent);

    }catch(e){
        res.status(409).json({message:e.message});

    }
}

export const deleteStudent=async (req,res)=>{
    
    const id=req.params.id;
    try{
        await StudentData.findByIdAndRemove(id).exec();
        res.send("successfully deleted")

    }catch(e){
        res.status(409).json({message:e.message});

    }
}
export const editStudent=async (req,res)=>{
    
    const id=req.params.id;
    try{
        const aStudent=await StudentData.findById(id);
        res.status(200).json(aStudent);

    }catch(e){
        res.status(409).json({message:e.message});

    }
}