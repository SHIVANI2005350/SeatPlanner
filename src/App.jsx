import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";

export default function App() {
  const [classrooms, setClassrooms] = useState([]);

  const addClassroom = (room) => {
    setClassrooms([...classrooms, room]);
  };

  return (
    <div className="container">
      <h1>College Exam Seat Planner</h1>

      <AddClassroom addClassroom={addClassroom} />

      <div className="section">
        <ClassroomList classrooms={classrooms} />
      </div>

      <div className="section">
        <AllocateExam classrooms={classrooms} />
      </div>
    </div>
  );
}
