import { useState } from "react";

export default function AllocateExam({ classrooms }) {
  const [students, setStudents] = useState("");
  const [result, setResult] = useState([]);

  const allocateSeats = () => {
    let remaining = Number(students);
    let allocated = [];

    const sorted = [...classrooms].sort(
      (a, b) => a.floorNo - b.floorNo || b.capacity - a.capacity
    );

    for (let room of sorted) {
      if (remaining <= 0) break;
      allocated.push(room);
      remaining -= room.capacity;
    }

    if (remaining > 0) {
      alert("Not enough seats available");
      setResult([]);
    } else {
      setResult(allocated);
    }
  };

  return (
    <div>
      <h2>Allocate Exam</h2>
      <input
        type="number"
        placeholder="Total Students"
        value={students}
        onChange={(e) => setStudents(e.target.value)}
      />
      <button onClick={allocateSeats}>Allocate</button>

      {result.length > 0 && (
        <div>
          <h3>Allocated Classrooms</h3>
          <ul>
            {result.map((room, index) => (
              <li key={index}>
                {room.roomId} (Floor {room.floorNo})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
