export default function ClassroomList({ classrooms }) {
  return (
    <div>
      <h2>Classroom List</h2>
      {classrooms.length === 0 && <p>No classrooms added</p>}
      <ul>
        {classrooms.map((room, index) => (
          <li key={index}>
            {room.roomId} | Capacity: {room.capacity} | Floor: {room.floorNo}
          </li>
        ))}
      </ul>
    </div>
  );
}
