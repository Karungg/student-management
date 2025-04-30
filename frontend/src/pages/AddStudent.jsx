import React from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import api from "../api";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    api.post("", data).then(() => navigate(""));
  };

  return <StudentForm onSubmit={handleSubmit} />;
};

export default AddStudent;
