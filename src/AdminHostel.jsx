import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminHostel({ onBack }) {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNo: "A-101",
      block: "Block A",
      floor: "Ground Floor",
      type: "4 Sharing",
      capacity: 4,
      occupied: 4,
      warden: "Hostel Warden",
      status: "Full",
    },
    {
      id: 2,
      roomNo: "A-102",
      block: "Block A",
      floor: "Ground Floor",
      type: "4 Sharing",
      capacity: 4,
      occupied: 3,
      warden: "Hostel Warden",
      status: "Available",
    },
    {
      id: 3,
      roomNo: "A-201",
      block: "Block A",
      floor: "First Floor",
      type: "3 Sharing",
      capacity: 3,
      occupied: 2,
      warden: "Hostel Warden",
      status: "Available",
    },
    {
      id: 4,
      roomNo: "B-101",
      block: "Block B",
      floor: "Ground Floor",
      type: "4 Sharing",
      capacity: 4,
      occupied: 4,
      warden: "Hostel Warden",
      status: "Full",
    },
    {
      id: 5,
      roomNo: "B-102",
      block: "Block B",
      floor: "Ground Floor",
      type: "3 Sharing",
      capacity: 3,
      occupied: 1,
      warden: "Hostel Warden",
      status: "Available",
    },
    {
      id: 6,
      roomNo: "B-201",
      block: "Block B",
      floor: "First Floor",
      type: "4 Sharing",
      capacity: 4,
      occupied: 4,
      warden: "Hostel Warden",
      status: "Full",
    },
  ]);

  const [residents, setResidents] = useState([
    {
      id: 1,
      student: "Yashii",
      rollNo: "DEMO2026AI001",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      room: "A-101",
      block: "Block A",
      status: "Active",
    },
    {
      id: 2,
      student: "Rihana",
      rollNo: "DEMO2026AI002",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      room: "A-101",
      block: "Block A",
      status: "Active",
    },
    {
      id: 3,
      student: "Hema",
      rollNo: "DEMO2026AI003",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      room: "A-102",
      block: "Block A",
      status: "Active",
    },
    {
      id: 4,
      student: "Mohitha",
      rollNo: "DEMO2026AI004",
      branch: "CSE – AI",
      year: "2nd Year",
      room: "A-201",
      block: "Block A",
      status: "Active",
    },
    {
      id: 5,
      student: "Student Demo 05",
      rollNo: "DEMO2026AI005",
      branch: "ECE",
      year: "2nd Year",
      room: "B-102",
      block: "Block B",
      status: "Active",
    },
  ]);

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      student: "Yashii",
      room: "A-101",
      category: "Maintenance",
      description: "Room maintenance request",
      date: "2026-09-29",
      status: "Pending",
    },
    {
      id: 2,
      student: "Hema",
      room: "A-102",
      category: "Electrical",
      description: "Light replacement request",
      date: "2026-09-27",
      status: "Resolved",
    },
    {
      id: 3,
      student: "Mohitha",
      room: "A-201",
      category: "General",
      description: "Hostel support request",
      date: "2026-09-26",
      status: "Processing",
    },
  ]);

  const [activeTab, setActiveTab] = useState("Overview");

  const [roomSearch, setRoomSearch] = useState("");
  const [roomBlockFilter, setRoomBlockFilter] = useState("All");
  const [roomStatusFilter, setRoomStatusFilter] = useState("All");

  const [residentSearch, setResidentSearch] = useState("");
  const [residentStatusFilter, setResidentStatusFilter] =
    useState("All");

  const [showRoomForm, setShowRoomForm] = useState(false);
  const [showResidentForm, setShowResidentForm] = useState(false);
  const [showComplaintForm, setShowComplaintForm] =
    useState(false);

  const emptyRoom = {
    roomNo: "",
    block: "Block A",
    floor: "Ground Floor",
    type: "4 Sharing",
    capacity: "4",
    warden: "Hostel Warden",
  };

  const emptyResident = {
    student: "",
    rollNo: "",
    branch: "",
    year: "2nd Year",
    room: "",
    block: "Block A",
  };

  const emptyComplaint = {
    student: "",
    room: "",
    category: "Maintenance",
    description: "",
  };

  const [roomForm, setRoomForm] = useState(emptyRoom);
  const [residentForm, setResidentForm] =
    useState(emptyResident);
  const [complaintForm, setComplaintForm] =
    useState(emptyComplaint);

  const totalCapacity = rooms.reduce(
    (sum, room) => sum + room.capacity,
    0
  );

  const totalOccupied = rooms.reduce(
    (sum, room) => sum + room.occupied,
    0
  );

  const totalVacant = totalCapacity - totalOccupied;

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const search = roomSearch.toLowerCase();

      const matchesSearch =
        room.roomNo.toLowerCase().includes(search) ||
        room.block.toLowerCase().includes(search) ||
        room.type.toLowerCase().includes(search);

      const matchesBlock =
        roomBlockFilter === "All" ||
        room.block === roomBlockFilter;

      const matchesStatus =
        roomStatusFilter === "All" ||
        room.status === roomStatusFilter;

      return (
        matchesSearch &&
        matchesBlock &&
        matchesStatus
      );
    });
  }, [
    rooms,
    roomSearch,
    roomBlockFilter,
    roomStatusFilter,
  ]);

  const filteredResidents = useMemo(() => {
    return residents.filter((resident) => {
      const search = residentSearch.toLowerCase();

      const matchesSearch =
        resident.student.toLowerCase().includes(search) ||
        resident.rollNo.toLowerCase().includes(search) ||
        resident.room.toLowerCase().includes(search) ||
        resident.branch.toLowerCase().includes(search);

      const matchesStatus =
        residentStatusFilter === "All" ||
        resident.status === residentStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [
    residents,
    residentSearch,
    residentStatusFilter,
  ]);

  const handleRoomSubmit = (e) => {
    e.preventDefault();

    if (!roomForm.roomNo) {
      alert("Please enter room number.");
      return;
    }

    const capacity = Number(roomForm.capacity);

    setRooms((prev) => [
      ...prev,
      {
        id: Date.now(),
        roomNo: roomForm.roomNo,
        block: roomForm.block,
        floor: roomForm.floor,
        type: roomForm.type,
        capacity,
        occupied: 0,
        warden: roomForm.warden,
        status: "Available",
      },
    ]);

    setRoomForm(emptyRoom);
    setShowRoomForm(false);
  };

  const handleResidentSubmit = (e) => {
    e.preventDefault();

    if (
      !residentForm.student ||
      !residentForm.rollNo ||
      !residentForm.room
    ) {
      alert("Please fill student and room details.");
      return;
    }

    const selectedRoom = rooms.find(
      (room) => room.roomNo === residentForm.room
    );

    if (!selectedRoom) {
      alert("Selected room does not exist.");
      return;
    }

    if (selectedRoom.occupied >= selectedRoom.capacity) {
      alert("Selected room is full.");
      return;
    }

    setResidents((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...residentForm,
        status: "Active",
      },
    ]);

    setRooms((prev) =>
      prev.map((room) =>
        room.roomNo === residentForm.room
          ? {
              ...room,
              occupied: room.occupied + 1,
              status:
                room.occupied + 1 >= room.capacity
                  ? "Full"
                  : "Available",
            }
          : room
      )
    );

    setResidentForm(emptyResident);
    setShowResidentForm(false);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();

    if (
      !complaintForm.student ||
      !complaintForm.room ||
      !complaintForm.description
    ) {
      alert("Please fill all complaint details.");
      return;
    }

    setComplaints((prev) => [
      {
        id: Date.now(),
        ...complaintForm,
        date: new Date()
          .toISOString()
          .split("T")[0],
        status: "Pending",
      },
      ...prev,
    ]);

    setComplaintForm(emptyComplaint);
    setShowComplaintForm(false);
  };

  const updateComplaintStatus = (id, status) => {
    setComplaints((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  const deleteResident = (id) => {
    const resident = residents.find(
      (item) => item.id === id
    );

    if (!resident) return;

    if (window.confirm("Remove this hostel resident?")) {
      setResidents((prev) =>
        prev.filter((item) => item.id !== id)
      );

      setRooms((prev) =>
        prev.map((room) =>
          room.roomNo === resident.room
            ? {
                ...room,
                occupied: Math.max(
                  0,
                  room.occupied - 1
                ),
                status: "Available",
              }
            : room
        )
      );
    }
  };

  const deleteRoom = (id) => {
    const room = rooms.find(
      (item) => item.id === id
    );

    if (!room) return;

    if (room.occupied > 0) {
      alert(
        "This room has active residents. Reassign them before deleting the room."
      );
      return;
    }

    if (window.confirm("Delete this room?")) {
      setRooms((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-page-header">

        <div>
          <button
            className="admin-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Hostel Management</h1>

          <p>
            Manage hostel rooms, student accommodation,
            facilities and hostel support.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowResidentForm(true)}
        >
          + Allocate Student
        </button>

      </div>

      {/* DEMO BANNER */}

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> Hostel records shown here
        are sample records for SHEC CampusHub development.
        Actual room allocation and student accommodation
        data should be managed by authorized hostel
        administrators.
      </div>

      {/* STATS */}

      <div className="admin-stats-grid hostel-stats">

        <div className="admin-stat-card">

          <div className="admin-stat-icon purple">
            🏠
          </div>

          <div>
            <span>Total Rooms</span>
            <strong>{rooms.length}</strong>
            <small>Across hostel blocks</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon blue">
            👩‍🎓
          </div>

          <div>
            <span>Total Capacity</span>
            <strong>{totalCapacity}</strong>
            <small>Available beds</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon green">
            ✓
          </div>

          <div>
            <span>Occupied</span>
            <strong>{totalOccupied}</strong>
            <small>Currently allocated</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon orange">
            🛏️
          </div>

          <div>
            <span>Vacant Beds</span>
            <strong>{totalVacant}</strong>
            <small>Currently available</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon pink">
            🛠️
          </div>

          <div>
            <span>Open Complaints</span>
            <strong>
              {
                complaints.filter(
                  (c) => c.status !== "Resolved"
                ).length
              }
            </strong>
            <small>Need attention</small>
          </div>

        </div>

      </div>

      {/* TABS */}

      <div className="hostel-tabs">

        {[
          "Overview",
          "Rooms",
          "Residents",
          "Complaints",
          "Facilities",
        ].map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab ? "active" : ""
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* OVERVIEW */}

      {activeTab === "Overview" && (
        <div className="hostel-overview">

          <div className="hostel-overview-grid">

            <div className="admin-panel">

              <div className="admin-panel-header">
                <div>
                  <h2>Hostel Information</h2>
                  <p>
                    Basic residential facility details
                  </p>
                </div>
              </div>

              <div className="hostel-info-grid">

                <div>
                  <span>Hostel Type</span>
                  <strong>Women's Hostel</strong>
                </div>

                <div>
                  <span>Blocks</span>
                  <strong>Block A & Block B</strong>
                </div>

                <div>
                  <span>Accommodation</span>
                  <strong>Room Based</strong>
                </div>

                <div>
                  <span>Student Support</span>
                  <strong>Hostel Administration</strong>
                </div>

              </div>

            </div>

            <div className="admin-panel">

              <div className="admin-panel-header">
                <div>
                  <h2>Occupancy</h2>
                  <p>
                    Current room utilization
                  </p>
                </div>
              </div>

              <div className="hostel-occupancy">

                <div className="hostel-occupancy-number">
                  <strong>
                    {totalOccupied}
                  </strong>

                  <span>
                    / {totalCapacity} beds
                  </span>
                </div>

                <div className="hostel-progress">
                  <div
                    style={{
                      width: `${
                        totalCapacity
                          ? (totalOccupied /
                              totalCapacity) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>

                <p>
                  {totalVacant} beds currently available
                </p>

              </div>

            </div>

          </div>

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>Hostel Services</h2>
                <p>
                  Facilities available for residents
                </p>
              </div>

            </div>

            <div className="hostel-facilities-grid">

              <div className="hostel-facility-card">
                <div>🛏️</div>
                <h3>Accommodation</h3>
                <p>
                  Room-based student accommodation.
                </p>
              </div>

              <div className="hostel-facility-card">
                <div>🍽️</div>
                <h3>Mess & Food</h3>
                <p>
                  Hostel mess and food service information.
                </p>
              </div>

              <div className="hostel-facility-card">
                <div>📚</div>
                <h3>Study Area</h3>
                <p>
                  Dedicated study and academic support space.
                </p>
              </div>

              <div className="hostel-facility-card">
                <div>🔐</div>
                <h3>Safety & Security</h3>
                <p>
                  Hostel safety and administrative support.
                </p>
              </div>

              <div className="hostel-facility-card">
                <div>💧</div>
                <h3>Basic Amenities</h3>
                <p>
                  Essential residential facilities.
                </p>
              </div>

              <div className="hostel-facility-card">
                <div>📞</div>
                <h3>Student Support</h3>
                <p>
                  Hostel-related support and requests.
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ROOMS */}

      {activeTab === "Rooms" && (
        <div>

          <div className="admin-filter-card">

            <div className="admin-search-box">
              <span>🔎</span>

              <input
                type="text"
                placeholder="Search room, block or type..."
                value={roomSearch}
                onChange={(e) =>
                  setRoomSearch(e.target.value)
                }
              />
            </div>

            <select
              value={roomBlockFilter}
              onChange={(e) =>
                setRoomBlockFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Block A</option>
              <option>Block B</option>
            </select>

            <select
              value={roomStatusFilter}
              onChange={(e) =>
                setRoomStatusFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Available</option>
              <option>Full</option>
            </select>

            <button
              className="admin-primary-btn"
              onClick={() => setShowRoomForm(true)}
            >
              + Add Room
            </button>

          </div>

          {showRoomForm && (
            <div className="admin-form-card">

              <div className="admin-form-title">

                <div>
                  <h2>Add Hostel Room</h2>
                  <p>
                    Create a new room record.
                  </p>
                </div>

                <button
                  className="admin-close-btn"
                  onClick={() =>
                    setShowRoomForm(false)
                  }
                >
                  ×
                </button>

              </div>

              <form
                className="admin-form-grid"
                onSubmit={handleRoomSubmit}
              >

                <div className="admin-form-group">
                  <label>Room Number *</label>

                  <input
                    value={roomForm.roomNo}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        roomNo: e.target.value,
                      })
                    }
                    placeholder="Example: A-301"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Block</label>

                  <select
                    value={roomForm.block}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        block: e.target.value,
                      })
                    }
                  >
                    <option>Block A</option>
                    <option>Block B</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Floor</label>

                  <select
                    value={roomForm.floor}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        floor: e.target.value,
                      })
                    }
                  >
                    <option>Ground Floor</option>
                    <option>First Floor</option>
                    <option>Second Floor</option>
                    <option>Third Floor</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Room Type</label>

                  <select
                    value={roomForm.type}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        type: e.target.value,
                      })
                    }
                  >
                    <option>3 Sharing</option>
                    <option>4 Sharing</option>
                    <option>2 Sharing</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Capacity</label>

                  <input
                    type="number"
                    min="1"
                    value={roomForm.capacity}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        capacity: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="admin-form-group">
                  <label>Warden</label>

                  <input
                    value={roomForm.warden}
                    onChange={(e) =>
                      setRoomForm({
                        ...roomForm,
                        warden: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="admin-form-actions">

                  <button
                    type="button"
                    className="admin-secondary-btn"
                    onClick={() =>
                      setShowRoomForm(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    Save Room
                  </button>

                </div>

              </form>

            </div>
          )}

          <div className="admin-table-card">

            <div className="admin-table-header">

              <div>
                <h2>Hostel Rooms</h2>

                <p>
                  Showing {filteredRooms.length} of{" "}
                  {rooms.length} rooms
                </p>
              </div>

            </div>

            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Block</th>
                    <th>Floor</th>
                    <th>Type</th>
                    <th>Occupancy</th>
                    <th>Warden</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredRooms.map((room) => (

                    <tr key={room.id}>

                      <td>
                        <strong>
                          {room.roomNo}
                        </strong>
                      </td>

                      <td>{room.block}</td>

                      <td>{room.floor}</td>

                      <td>
                        <span className="subject-type-badge">
                          {room.type}
                        </span>
                      </td>

                      <td>
                        <strong>
                          {room.occupied} /{" "}
                          {room.capacity}
                        </strong>
                      </td>

                      <td>{room.warden}</td>

                      <td>
                        <span
                          className={`hostel-room-status ${
                            room.status.toLowerCase()
                          }`}
                        >
                          {room.status}
                        </span>
                      </td>

                      <td>

                        <button
                          className="admin-small-btn danger"
                          onClick={() =>
                            deleteRoom(room.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      )}

      {/* RESIDENTS */}

      {activeTab === "Residents" && (
        <div>

          <div className="admin-filter-card">

            <div className="admin-search-box">
              <span>🔎</span>

              <input
                type="text"
                placeholder="Search student, roll number or room..."
                value={residentSearch}
                onChange={(e) =>
                  setResidentSearch(e.target.value)
                }
              />
            </div>

            <select
              value={residentStatusFilter}
              onChange={(e) =>
                setResidentStatusFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button
              className="admin-primary-btn"
              onClick={() =>
                setShowResidentForm(true)
              }
            >
              + Allocate Student
            </button>

          </div>

          {showResidentForm && (
            <div className="admin-form-card">

              <div className="admin-form-title">

                <div>
                  <h2>Allocate Student</h2>
                  <p>
                    Assign a student to an available hostel room.
                  </p>
                </div>

                <button
                  className="admin-close-btn"
                  onClick={() =>
                    setShowResidentForm(false)
                  }
                >
                  ×
                </button>

              </div>

              <form
                className="admin-form-grid"
                onSubmit={handleResidentSubmit}
              >

                <div className="admin-form-group">
                  <label>Student Name *</label>

                  <input
                    value={residentForm.student}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        student: e.target.value,
                      })
                    }
                    placeholder="Student name"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Roll Number *</label>

                  <input
                    value={residentForm.rollNo}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        rollNo: e.target.value,
                      })
                    }
                    placeholder="Roll number"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Branch</label>

                  <input
                    value={residentForm.branch}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        branch: e.target.value,
                      })
                    }
                    placeholder="Example: CSE – AI & DS"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Year</label>

                  <select
                    value={residentForm.year}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        year: e.target.value,
                      })
                    }
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Block</label>

                  <select
                    value={residentForm.block}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        block: e.target.value,
                      })
                    }
                  >
                    <option>Block A</option>
                    <option>Block B</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Room *</label>

                  <select
                    value={residentForm.room}
                    onChange={(e) =>
                      setResidentForm({
                        ...residentForm,
                        room: e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select available room
                    </option>

                    {rooms
                      .filter(
                        (room) =>
                          room.occupied <
                          room.capacity
                      )
                      .map((room) => (
                        <option
                          key={room.id}
                          value={room.roomNo}
                        >
                          {room.roomNo} —{" "}
                          {room.occupied}/
                          {room.capacity}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="admin-form-actions">

                  <button
                    type="button"
                    className="admin-secondary-btn"
                    onClick={() =>
                      setShowResidentForm(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    Allocate Student
                  </button>

                </div>

              </form>

            </div>
          )}

          <div className="admin-table-card">

            <div className="admin-table-header">

              <div>
                <h2>Hostel Residents</h2>

                <p>
                  Current student accommodation records
                </p>
              </div>

            </div>

            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Room</th>
                    <th>Block</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredResidents.map(
                    (resident) => (

                      <tr key={resident.id}>

                        <td>

                          <div className="admin-name-cell">

                            <div className="student-avatar">
                              {resident.student.charAt(
                                0
                              )}
                            </div>

                            <div>
                              <strong>
                                {resident.student}
                              </strong>

                              <span>
                                {resident.rollNo}
                              </span>
                            </div>

                          </div>

                        </td>

                        <td>
                          {resident.branch}
                        </td>

                        <td>
                          {resident.year}
                        </td>

                        <td>
                          <span className="semester-badge">
                            {resident.room}
                          </span>
                        </td>

                        <td>
                          {resident.block}
                        </td>

                        <td>
                          <span className="hostel-resident-status">
                            {resident.status}
                          </span>
                        </td>

                        <td>

                          <button
                            className="admin-small-btn danger"
                            onClick={() =>
                              deleteResident(
                                resident.id
                              )
                            }
                          >
                            Remove
                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      )}

      {/* COMPLAINTS */}

      {activeTab === "Complaints" && (
        <div>

          <div className="admin-filter-card">

            <div>
              <h3 className="hostel-filter-title">
                Hostel Support & Complaints
              </h3>
            </div>

            <button
              className="admin-primary-btn"
              onClick={() =>
                setShowComplaintForm(true)
              }
            >
              + Add Complaint
            </button>

          </div>

          {showComplaintForm && (
            <div className="admin-form-card">

              <div className="admin-form-title">

                <div>
                  <h2>Add Hostel Complaint</h2>
                  <p>
                    Record a hostel support request.
                  </p>
                </div>

                <button
                  className="admin-close-btn"
                  onClick={() =>
                    setShowComplaintForm(false)
                  }
                >
                  ×
                </button>

              </div>

              <form
                className="admin-form-grid"
                onSubmit={handleComplaintSubmit}
              >

                <div className="admin-form-group">
                  <label>Student *</label>

                  <input
                    value={complaintForm.student}
                    onChange={(e) =>
                      setComplaintForm({
                        ...complaintForm,
                        student: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="admin-form-group">
                  <label>Room *</label>

                  <input
                    value={complaintForm.room}
                    onChange={(e) =>
                      setComplaintForm({
                        ...complaintForm,
                        room: e.target.value,
                      })
                    }
                    placeholder="Example: A-101"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Category</label>

                  <select
                    value={complaintForm.category}
                    onChange={(e) =>
                      setComplaintForm({
                        ...complaintForm,
                        category: e.target.value,
                      })
                    }
                  >
                    <option>Maintenance</option>
                    <option>Electrical</option>
                    <option>Water</option>
                    <option>Food / Mess</option>
                    <option>Cleaning</option>
                    <option>General</option>
                  </select>
                </div>

                <div className="admin-form-group admin-form-full">
                  <label>Description *</label>

                  <textarea
                    rows="4"
                    value={complaintForm.description}
                    onChange={(e) =>
                      setComplaintForm({
                        ...complaintForm,
                        description:
                          e.target.value,
                      })
                    }
                    placeholder="Describe the complaint..."
                  />
                </div>

                <div className="admin-form-actions">

                  <button
                    type="button"
                    className="admin-secondary-btn"
                    onClick={() =>
                      setShowComplaintForm(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    Save Complaint
                  </button>

                </div>

              </form>

            </div>
          )}

          <div className="admin-table-card">

            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Room</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {complaints.map((complaint) => (

                    <tr key={complaint.id}>

                      <td>
                        <strong>
                          {complaint.student}
                        </strong>
                      </td>

                      <td>
                        {complaint.room}
                      </td>

                      <td>
                        <span className="subject-type-badge">
                          {complaint.category}
                        </span>
                      </td>

                      <td>
                        {complaint.description}
                      </td>

                      <td>
                        {complaint.date}
                      </td>

                      <td>

                        <select
                          className={`hostel-complaint-status ${complaint.status
                            .toLowerCase()
                            .replaceAll(
                              " ",
                              "-"
                            )}`}
                          value={complaint.status}
                          onChange={(e) =>
                            updateComplaintStatus(
                              complaint.id,
                              e.target.value
                            )
                          }
                        >
                          <option>Pending</option>
                          <option>Processing</option>
                          <option>Resolved</option>
                        </select>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      )}

      {/* FACILITIES */}

      {activeTab === "Facilities" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Hostel Facilities</h2>
              <p>
                Manage and display hostel facility information.
              </p>
            </div>

          </div>

          <div className="hostel-facilities-grid">

            <div className="hostel-facility-card">
              <div>🛏️</div>
              <h3>Accommodation</h3>
              <p>
                Room allocation and residential
                accommodation management.
              </p>
              <span>Available</span>
            </div>

            <div className="hostel-facility-card">
              <div>🍽️</div>
              <h3>Mess & Food</h3>
              <p>
                Hostel mess and dining service information.
              </p>
              <span>Available</span>
            </div>

            <div className="hostel-facility-card">
              <div>📚</div>
              <h3>Study Area</h3>
              <p>
                Dedicated academic and study support areas.
              </p>
              <span>Available</span>
            </div>

            <div className="hostel-facility-card">
              <div>🔐</div>
              <h3>Safety & Security</h3>
              <p>
                Hostel safety and security arrangements.
              </p>
              <span>Available</span>
            </div>

            <div className="hostel-facility-card">
              <div>🧹</div>
              <h3>Housekeeping</h3>
              <p>
                Cleaning and maintenance support.
              </p>
              <span>Available</span>
            </div>

            <div className="hostel-facility-card">
              <div>📞</div>
              <h3>Student Support</h3>
              <p>
                Hostel administration and support services.
              </p>
              <span>Available</span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default AdminHostel;