import { useState } from "react";

export default function AddClassroom({ addClassroom }) {
  const [roomId, setRoomId] = useState("");
  const [capacity, setCapacity] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [nearWashroom, setNearWashroom] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!roomId || capacity <= 0 || floorNo < 0) {
      alert("Invalid classroom details");
      return;
    }

    addClassroom({
      roomId,
      capacity: Number(capacity),
      floorNo: Number(floorNo),
      nearWashroom,
    });

    setRoomId("");
    setCapacity("");
    setFloorNo("");
    setNearWashroom(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add Classroom</h2>
      <input placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <input type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
      <input type="number" placeholder="Floor No" value={floorNo} onChange={(e) => setFloorNo(e.target.value)} />
      <label>
        <input type="checkbox" checked={nearWashroom} onChange={(e) => setNearWashroom(e.target.checked)} />
        Near Washroom
      </label>
      <button>Add</button>
    </form>
  );
}
