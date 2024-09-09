package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entites.Student;
import com.example.repo.studentRepo;

@Service
public class studentService {
	
	@Autowired
	private studentRepo  studentRepo;
	
	//Send all the Data Frontend to DB
	public Student saveData(String name,String contactDetails,String address,Integer pinCode) {
		Student st = new Student();
		st.setName(name);
		st.setContactDetails(contactDetails);
		st.setAddress(address);
		st.setPinCode(pinCode);
		return studentRepo.save(st);
		
	}
	
	//Get all Student Data
	public List<Student> getAllStudent(){
		return studentRepo.findAll();
	}

}
