package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entites.Student;

@Repository
public interface studentRepo extends JpaRepository<Student, Integer> {
	

}
