import React from "react";
import "./TimeTable.css";

function TimeTable({ onBack }) {
  const timetable = [
    {
      day: "Monday",
      periods: [
        ["9:20–10:10", "Advanced Data Structures"],
        ["10:10–11:00", "Java Programming"],
        ["11:15–12:05", "Database Management Systems"],
        ["12:05–12:55", "Mathematics"],
        ["1:45–2:35", "Computer Networks"],
        ["2:35–3:25", "English"],
        ["3:25–4:10", "Lab / Activity"],
      ],
    },
    {
      day: "Tuesday",
      periods: [
        ["9:20–10:10", "Java Programming"],
        ["10:10–11:00", "Mathematics"],
        ["11:15–12:05", "Advanced Data Structures"],
        ["12:05–12:55", "English"],
        ["1:45–2:35", "DBMS"],
        ["2:35–3:25", "Computer Networks"],
        ["3:25–4:10", "Lab / Activity"],
      ],
    },
    {
      day: "Wednesday",
      periods: [
        ["9:20–10:10", "Database Management Systems"],
        ["10:10–11:00", "Advanced Data Structures"],
        ["11:15–12:05", "Java Programming"],
        ["12:05–12:55", "Computer Networks"],
        ["1:45–2:35", "Mathematics"],
        ["2:35–3:25", "English"],
        ["3:25–4:10", "Lab / Activity"],
      ],
    },
    {
      day: "Thursday",
      periods: [
        ["9:20–10:10", "Computer Networks"],
        ["10:10–11:00", "DBMS"],
        ["11:15–12:05", "Java Programming"],
        ["12:05–12:55", "Advanced Data Structures"],
        ["1:45–2:35", "English"],
        ["2:35–3:25", "Mathematics"],
        ["3:25–4:10", "Lab / Activity"],
      ],
    },
    {
      day: "Friday",
      periods: [
        ["9:20–10:10", "Mathematics"],
        ["10:10–11:00", "Computer Networks"],
        ["11:15–12:05", "DBMS"],
        ["12:05–12:55", "Java Programming"],
        ["1:45–2:35", "Advanced Data Structures"],
        ["2:35–3:25", "English"],
        ["3:25–4:10", "Lab / Activity"],
      ],
    },
  ];

  return (
    <div className="timetable-page">

      <header className="timetable-header">

        <div>
          <button className="timetable-back" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <p>ACADEMICS</p>

          <h1>Time Table</h1>

          <span>
            2-1 • CSE – AI & DS • Section A • 2026–27
          </span>
        </div>

        <div className="timetable-info">
          <strong>College Timings</strong>
          <span>9:20 AM – 4:10 PM</span>
        </div>

      </header>

      <section className="timetable-card">

        <div className="timetable-title">
          <div>
            <p>WEEKLY SCHEDULE</p>
            <h2>Class Time Table</h2>
          </div>
        </div>

        <div className="timetable-wrapper">

          <table>

            <thead>
              <tr>
                <th>Day</th>
                <th>Period 1</th>
                <th>Period 2</th>
                <th>Period 3</th>
                <th>Period 4</th>
                <th>Period 5</th>
                <th>Period 6</th>
                <th>Period 7</th>
              </tr>
            </thead>

            <tbody>

              {timetable.map((day) => (
                <tr key={day.day}>

                  <td className="day-cell">
                    <strong>{day.day}</strong>
                  </td>

                  {day.periods.map((period, index) => (
                    <td key={index}>
                      <div className="period-cell">
                        <strong>{period[1]}</strong>
                        <span>{period[0]}</span>
                      </div>
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      <section className="timetable-note">

        <strong>📌 Timetable Information</strong>

        <span>
          The displayed schedule is a development placeholder.
          The final CampusHub timetable will use the official
          college timetable data for the selected branch, year,
          semester and section.
        </span>

      </section>

    </div>
  );
}

export default TimeTable;