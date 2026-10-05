import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./TimeTable.css";

function TimeTable({ onBack }) {
  const timetableData = useQuery(
    api.timetable.getStudentTimetable,
    {
      branch: "CSE – AI & DS",
      semester: "2-1",
      section: "A",
    }
  );

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timetable = days.map((day) => {
    const dayRecords =
      timetableData?.filter((record) => record.day === day) || [];

    const sortedRecords = [...dayRecords].sort((a, b) => {
      return Number(a.period) - Number(b.period);
    });

    return {
      day,
      periods: sortedRecords.map((record) => [
        `${record.startTime}–${record.endTime}`,
        record.subjectName,
      ]),
    };
  });

  if (timetableData === undefined) {
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
            <p>Loading timetable...</p>
          </div>
        </section>
      </div>
    );
  }

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

                  {Array.from({ length: 7 }).map((_, index) => {
                    const period = day.periods[index];

                    return (
                      <td key={index}>
                        {period ? (
                          <div className="period-cell">
                            <strong>{period[1]}</strong>
                            <span>{period[0]}</span>
                          </div>
                        ) : (
                          <div className="period-cell">
                            <strong>—</strong>
                            <span>Not scheduled</span>
                          </div>
                        )}
                      </td>
                    );
                  })}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      <section className="timetable-note">

        <strong>📌 Timetable Information</strong>

        <span>
          The displayed schedule is fetched from the CampusHub
          database for the selected branch, year, semester and section.
        </span>

      </section>

    </div>
  );
}

export default TimeTable;