package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entites.Student;
import com.example.services.studentService;

@RequestMapping("/students")
@RestController
@CrossOrigin
public class studentController {
	
	@Autowired
	private studentService studentService;
		
	
	@GetMapping("/data")
	public List<Student> getStudent( ){
		return studentService.getAllStudent();	
	}
	
	@PostMapping("/add")
	public Student addData(@RequestBody Student st){
		return studentService.saveData(st.getName(), st.getContactDetails(), st.getAddress(), st.getPinCode());
	}


}
