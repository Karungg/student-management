import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await api.get("/");
    setStudents(response.data);
  };

  const deleteStudent = async (id) => {
    await api.delete(`/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h2>Student List</h2>
      <Link to="/add" className="btn btn-primary mb-2">
        Add Student
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>NIM</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.nim}</td>
              <td>{s.age}</td>
              <td>{s.email}</td>
              <td>
                <Link
                  to={`/edit/${s.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
