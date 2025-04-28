package com.student.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.model.Student;

public interface StudentRepository extends JpaRepository<Student, UUID> {

}
