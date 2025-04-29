import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import api from "../api";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    api.get(`/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  const handleSubmit = (data) => {
    api.put(`/${id}`, data).then(() => navigate("/"));
  };

  return (
    student && <StudentForm onSubmit={handleSubmit} initialData={student} />
  );
};

export default EditStudent;
