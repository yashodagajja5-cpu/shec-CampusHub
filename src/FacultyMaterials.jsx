import React, { useState } from "react";

function FacultyMaterials({ onBack }) {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Advanced Data Structures Notes",
      subject: "Advanced Data Structures",
      type: "PDF",
      date: "01 Oct 2026",
    },
    {
      id: 2,
      title: "Java OOP Concepts",
      subject: "Java Programming",
      type: "Notes",
      date: "29 Sep 2026",
    },
    {
      id: 3,
      title: "SQL Important Queries",
      subject: "Database Management Systems",
      type: "PDF",
      date: "27 Sep 2026",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    subject: "Advanced Data Structures",
    type: "PDF",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMaterial = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter material title.");
      return;
    }

    const newMaterial = {
      id: Date.now(),
      title: form.title,
      subject: form.subject,
      type: form.type,
      date: "02 Oct 2026",
    };

    setMaterials([newMaterial, ...materials]);

    setForm({
      title: "",
      subject: "Advanced Data Structures",
      type: "PDF",
    });

    setShowForm(false);

    alert("Study material added successfully.");
  };

  const deleteMaterial = (id) => {
    setMaterials(
      materials.filter((material) => material.id !== id)
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#f7f5fa",
        color: "#302a3a",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          gap: "20px",
        }}
      >

        <div>

          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "#6847c7",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            ← Back to Dashboard
          </button>

          <h1 style={{ margin: "0 0 6px" }}>
            Study Materials
          </h1>

          <p
            style={{
              margin: 0,
              color: "#817b88",
              fontSize: "13px",
            }}
          >
            Upload and manage learning materials for students.
          </p>

        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            border: "none",
            borderRadius: "10px",
            padding: "12px 18px",
            background: "#6847c7",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          + Add Material
        </button>

      </div>

      {/* ADD FORM */}

      {showForm && (
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #e8e3ee",
            marginBottom: "25px",
            boxShadow: "0 8px 25px rgba(50,40,70,.06)",
          }}
        >

          <h2 style={{ marginTop: 0 }}>
            Add Study Material
          </h2>

          <form onSubmit={handleAddMaterial}>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "16px",
              }}
            >

              <div>
                <label>Material Title</label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter material title"
                  style={inputStyle}
                />
              </div>

              <div>
                <label>Subject</label>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>
                    Advanced Data Structures
                  </option>

                  <option>
                    Java Programming
                  </option>

                  <option>
                    Database Management Systems
                  </option>

                  <option>
                    Computer Networks
                  </option>
                </select>
              </div>

              <div>
                <label>Material Type</label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>PDF</option>
                  <option>Notes</option>
                  <option>Video</option>
                  <option>Link</option>
                </select>
              </div>

            </div>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "10px",
              }}
            >

              <button
                type="submit"
                style={primaryButton}
              >
                Add Material
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={secondaryButton}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      {/* MATERIAL LIST */}

      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #e8e3ee",
          overflow: "hidden",
        }}
      >

        <div style={{ padding: "22px" }}>

          <h2 style={{ margin: "0 0 5px" }}>
            My Materials
          </h2>

          <p
            style={{
              margin: 0,
              color: "#898390",
              fontSize: "12px",
            }}
          >
            Materials shared with your students.
          </p>

        </div>

        {materials.map((material) => (

          <div
            key={material.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "18px 22px",
              borderTop: "1px solid #eeeaf2",
            }}
          >

            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                background: "#f0ebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              📚
            </div>

            <div style={{ flex: 1 }}>

              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "14px",
                }}
              >
                {material.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#85808b",
                  fontSize: "11px",
                }}
              >
                {material.subject} · {material.type} ·{" "}
                {material.date}
              </p>

            </div>

            <button
              onClick={() => deleteMaterial(material.id)}
              style={{
                border: "1px solid #eadfe6",
                background: "#fff7fa",
                color: "#a04d70",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "11px",
              }}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "7px",
  padding: "11px",
  border: "1px solid #ddd7e5",
  borderRadius: "9px",
  outline: "none",
  background: "#fff",
};

const primaryButton = {
  border: "none",
  borderRadius: "9px",
  padding: "11px 18px",
  background: "#6847c7",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};

const secondaryButton = {
  border: "1px solid #ddd7e5",
  borderRadius: "9px",
  padding: "11px 18px",
  background: "#fff",
  color: "#5f5868",
  cursor: "pointer",
};

export default FacultyMaterials;