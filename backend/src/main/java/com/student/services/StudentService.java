package com.student.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(UUID id) {
        return studentRepository.findById(id);
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(UUID id, Student studentDetails) {
        if (studentRepository.existsById(id)) {
            studentDetails.setId(id);
            return studentRepository.save(studentDetails);
        }
        return null;
    }

    public void deleteStudent(UUID id) {
        studentRepository.deleteById(id);
    }
}
