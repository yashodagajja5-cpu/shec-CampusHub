import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminUsers({ onBack }) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Yashii",
      userId: "DEMO2026AI001",
      email: "student.demo@shec.ac.in",
      role: "Student",
      department: "CSE – AI & DS",
      status: "Active",
      lastLogin: "Today, 09:12 AM",
    },
    {
      id: 2,
      name: "Demo Faculty",
      userId: "FAC-DEMO-001",
      email: "faculty.demo@shec.ac.in",
      role: "Faculty",
      department: "CSE – AI & DS",
      status: "Active",
      lastLogin: "Today, 08:45 AM",
    },
    {
      id: 3,
      name: "Demo HOD",
      userId: "HOD-DEMO-001",
      email: "hod.demo@shec.ac.in",
      role: "HOD",
      department: "CSE – AI & DS",
      status: "Active",
      lastLogin: "Yesterday, 04:20 PM",
    },
    {
      id: 4,
      name: "System Admin",
      userId: "ADMIN-DEMO-001",
      email: "admin.demo@shec.ac.in",
      role: "Admin",
      department: "Administration",
      status: "Active",
      lastLogin: "Today, 09:30 AM",
    },
    {
      id: 5,
      name: "Student Demo 02",
      userId: "DEMO2026AI002",
      email: "student02@shec.ac.in",
      role: "Student",
      department: "CSE – AI",
      status: "Inactive",
      lastLogin: "2026-09-25",
    },
  ]);

  const roles = [
    "Student",
    "Faculty",
    "HOD",
    "Admin",
  ];

  const departments = [
    "CSE – AI",
    "CSE – AI & DS",
    "CSE – AI & ML",
    "CSE General",
    "ECE",
    "MBA",
    "MCA",
    "Administration",
  ];

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    userId: "",
    email: "",
    role: "Student",
    department: "CSE – AI & DS",
  });

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const query = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(query) ||
        user.userId.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query);

      const matchesRole =
        roleFilter === "All" ||
        user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" ||
        user.status === statusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [users, search, roleFilter, statusFilter]);

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const studentUsers = users.filter(
    (user) => user.role === "Student"
  ).length;

  const staffUsers = users.filter(
    (user) =>
      user.role === "Faculty" ||
      user.role === "HOD"
  ).length;

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );
  };

  const changeRole = (id, role) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, role }
          : user
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.userId ||
      !form.email
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const exists = users.some(
      (user) => user.userId === form.userId
    );

    if (exists) {
      alert("This User ID already exists.");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...form,
        status: "Active",
        lastLogin: "Never",
      },
    ]);

    setForm({
      name: "",
      userId: "",
      email: "",
      role: "Student",
      department: "CSE – AI & DS",
    });

    setShowForm(false);
  };

  const deleteUser = (id) => {
    const user = users.find(
      (item) => item.id === id
    );

    if (!user) return;

    if (user.role === "Admin") {
      alert(
        "Admin accounts should not be deleted from this demo screen."
      );
      return;
    }

    if (
      window.confirm(
        `Delete account for ${user.name}?`
      )
    ) {
      setUsers((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const resetPassword = (user) => {
    alert(
      `Password reset request created for ${user.userId}. In production, this will use the secure backend authentication system.`
    );
  };

  const roleClass = (role) =>
    role.toLowerCase();

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

          <h1>User & Role Management</h1>

          <p>
            Manage portal accounts, roles, access and
            account status.
          </p>

        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(true)}
        >
          + Create User
        </button>

      </div>

      {/* SECURITY NOTICE */}

      <div className="admin-demo-banner">
        <strong>Security:</strong> These are development
        accounts only. Real passwords and authentication
        credentials must be handled by the secure backend
        authentication system.
      </div>

      {/* STATISTICS */}

      <div className="admin-stats-grid user-stats">

        <div className="admin-stat-card">

          <div className="admin-stat-icon purple">
            👥
          </div>

          <div>
            <span>Total Users</span>
            <strong>{totalUsers}</strong>
            <small>All portal accounts</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon green">
            ✓
          </div>

          <div>
            <span>Active Users</span>
            <strong>{activeUsers}</strong>
            <small>Login access enabled</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon orange">
            ⏸
          </div>

          <div>
            <span>Inactive Users</span>
            <strong>{inactiveUsers}</strong>
            <small>Access disabled</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon blue">
            👩‍🎓
          </div>

          <div>
            <span>Students</span>
            <strong>{studentUsers}</strong>
            <small>Student accounts</small>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon pink">
            👩‍🏫
          </div>

          <div>
            <span>Faculty / HOD</span>
            <strong>{staffUsers}</strong>
            <small>Academic accounts</small>
          </div>

        </div>

      </div>

      {/* FILTERS */}

      <div className="admin-filter-card">

        <div className="admin-search-box">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search name, user ID or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(e.target.value)
          }
        >
          <option>All</option>

          {roles.map((role) => (
            <option key={role}>{role}</option>
          ))}

        </select>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* CREATE USER FORM */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-form-title">

            <div>
              <h2>Create User Account</h2>

              <p>
                Add a new portal account.
              </p>
            </div>

            <button
              className="admin-close-btn"
              onClick={() =>
                setShowForm(false)
              }
            >
              ×
            </button>

          </div>

          <form
            className="admin-form-grid"
            onSubmit={handleSubmit}
          >

            <div className="admin-form-group">

              <label>Name *</label>

              <input
                type="text"
                value={form.name}
                placeholder="Full name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

            </div>

            <div className="admin-form-group">

              <label>User ID *</label>

              <input
                type="text"
                value={form.userId}
                placeholder="Unique user ID"
                onChange={(e) =>
                  setForm({
                    ...form,
                    userId: e.target.value,
                  })
                }
              />

            </div>

            <div className="admin-form-group">

              <label>Email *</label>

              <input
                type="email"
                value={form.email}
                placeholder="official email"
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

            </div>

            <div className="admin-form-group">

              <label>Role</label>

              <select
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value,
                  })
                }
              >

                {roles.map((role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                ))}

              </select>

            </div>

            <div className="admin-form-group">

              <label>Department</label>

              <select
                value={form.department}
                onChange={(e) =>
                  setForm({
                    ...form,
                    department: e.target.value,
                  })
                }
              >

                {departments.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}

              </select>

            </div>

            <div className="admin-form-note">

              🔐 Password setup and authentication
              will be handled securely by the backend.

            </div>

            <div className="admin-form-actions">

              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-btn"
              >
                Create User
              </button>

            </div>

          </form>

        </div>
      )}

      {/* USER TABLE */}

      <div className="admin-table-card">

        <div className="admin-table-header">

          <div>

            <h2>Portal Users</h2>

            <p>
              Showing {filteredUsers.length} of{" "}
              {users.length} users
            </p>

          </div>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table user-table">

            <thead>

              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr key={user.id}>

                  <td>

                    <div className="admin-name-cell">

                      <div className="user-avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div>

                        <strong>
                          {user.name}
                        </strong>

                        <span>
                          {user.userId}
                        </span>

                        <small>
                          {user.email}
                        </small>

                      </div>

                    </div>

                  </td>

                  <td>

                    <select
                      className={`user-role-select ${roleClass(
                        user.role
                      )}`}
                      value={user.role}
                      onChange={(e) =>
                        changeRole(
                          user.id,
                          e.target.value
                        )
                      }
                    >

                      {roles.map((role) => (
                        <option
                          key={role}
                          value={role}
                        >
                          {role}
                        </option>
                      ))}

                    </select>

                  </td>

                  <td>
                    {user.department}
                  </td>

                  <td>

                    <span
                      className={`user-status ${
                        user.status.toLowerCase()
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td>
                    <span className="last-login">
                      {user.lastLogin}
                    </span>
                  </td>

                  <td>

                    <div className="admin-action-buttons">

                      <button
                        className="admin-edit-btn"
                        onClick={() =>
                          resetPassword(user)
                        }
                      >
                        Reset Password
                      </button>

                      <button
                        className="admin-toggle-btn"
                        onClick={() =>
                          toggleStatus(user.id)
                        }
                      >
                        {user.status === "Active"
                          ? "Disable"
                          : "Enable"}
                      </button>

                      <button
                        className="admin-delete-btn"
                        onClick={() =>
                          deleteUser(user.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredUsers.length === 0 && (
          <div className="admin-empty">
            No users found.
          </div>
        )}

      </div>

      {/* ROLE PERMISSIONS */}

      <div className="admin-panel">

        <div className="admin-panel-header">

          <div>

            <h2>Role Permissions</h2>

            <p>
              High-level access structure for SHEC CampusHub.
            </p>

          </div>

        </div>

        <div className="role-permission-grid">

          <div className="role-permission-card">

            <div className="role-permission-icon student">
              👩‍🎓
            </div>

            <h3>Student</h3>

            <p>
              Access personal academic information,
              attendance, timetable, materials, results,
              requests and opportunities.
            </p>

          </div>

          <div className="role-permission-card">

            <div className="role-permission-icon faculty">
              👩‍🏫
            </div>

            <h3>Faculty</h3>

            <p>
              Manage assigned classes, attendance,
              subjects, assignments, materials and notices.
            </p>

          </div>

          <div className="role-permission-card">

            <div className="role-permission-icon hod">
              🏛️
            </div>

            <h3>HOD</h3>

            <p>
              Manage department-level academic,
              faculty, attendance, timetable and reports.
            </p>

          </div>

          <div className="role-permission-card">

            <div className="role-permission-icon admin">
              ⚙️
            </div>

            <h3>Admin</h3>

            <p>
              Manage institution-wide users, departments,
              academics, notices, events and reports.
            </p>

          </div>

        </div>

      </div>

      {/* SECURITY */}

      <div className="user-security-card">

        <div className="user-security-icon">
          🔐
        </div>

        <div>

          <h3>Authentication & Security</h3>

          <p>
            Production authentication should use secure
            password hashing, session/token management,
            role-based access control and server-side
            authorization. Passwords should never be stored
            directly in React frontend code.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminUsers;