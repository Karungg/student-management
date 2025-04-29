import React, { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, initialData }) => {
  const [student, setStudent] = useState({
    name: "",
    nim: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    if (initialData) {
      setStudent(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          className="form-control"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>NIM</label>
        <input
          className="form-control"
          name="nim"
          value={student.nim}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          className="form-control"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-success" type="submit">
        Save
      </button>
    </form>
  );
};

export default StudentForm;
