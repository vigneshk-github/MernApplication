const router = require("express").Router();
const Course = require("../Model/Course");

router.post("/entry",async (req,res)=>{
    const newCourse = new Course({
        course_id:req.body.course_id,
        course_name:req.body.course_name
    })

    try{
        const course = new newCourse.save();
        res.send(200).json(course);
    }catch(err){
        res.send(404).json(err);
    }
})

