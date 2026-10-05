import { mutation } from "./_generated/server";

const timetableData = [
  // =========================
  // MONDAY
  // =========================
  {
    day: "Monday",
    period: "1",
    startTime: "9:20",
    endTime: "10:10",
    subject: "Advanced Data Structures",
  },
  {
    day: "Monday",
    period: "2",
    startTime: "10:10",
    endTime: "11:00",
    subject: "Java Programming",
  },
  {
    day: "Monday",
    period: "3",
    startTime: "11:15",
    endTime: "12:05",
    subject: "Database Management Systems",
  },
  {
    day: "Monday",
    period: "4",
    startTime: "12:05",
    endTime: "12:55",
    subject: "Mathematics",
  },
  {
    day: "Monday",
    period: "5",
    startTime: "1:45",
    endTime: "2:35",
    subject: "Computer Networks",
  },
  {
    day: "Monday",
    period: "6",
    startTime: "2:35",
    endTime: "3:25",
    subject: "English",
  },
  {
    day: "Monday",
    period: "7",
    startTime: "3:25",
    endTime: "4:10",
    subject: "Lab / Activity",
  },

  // =========================
  // TUESDAY
  // =========================
  {
    day: "Tuesday",
    period: "1",
    startTime: "9:20",
    endTime: "10:10",
    subject: "Java Programming",
  },
  {
    day: "Tuesday",
    period: "2",
    startTime: "10:10",
    endTime: "11:00",
    subject: "Mathematics",
  },
  {
    day: "Tuesday",
    period: "3",
    startTime: "11:15",
    endTime: "12:05",
    subject: "Advanced Data Structures",
  },
  {
    day: "Tuesday",
    period: "4",
    startTime: "12:05",
    endTime: "12:55",
    subject: "English",
  },
  {
    day: "Tuesday",
    period: "5",
    startTime: "1:45",
    endTime: "2:35",
    subject: "Database Management Systems",
  },
  {
    day: "Tuesday",
    period: "6",
    startTime: "2:35",
    endTime: "3:25",
    subject: "Computer Networks",
  },
  {
    day: "Tuesday",
    period: "7",
    startTime: "3:25",
    endTime: "4:10",
    subject: "Lab / Activity",
  },

  // =========================
  // WEDNESDAY
  // =========================
  {
    day: "Wednesday",
    period: "1",
    startTime: "9:20",
    endTime: "10:10",
    subject: "Database Management Systems",
  },
  {
    day: "Wednesday",
    period: "2",
    startTime: "10:10",
    endTime: "11:00",
    subject: "Advanced Data Structures",
  },
  {
    day: "Wednesday",
    period: "3",
    startTime: "11:15",
    endTime: "12:05",
    subject: "Java Programming",
  },
  {
    day: "Wednesday",
    period: "4",
    startTime: "12:05",
    endTime: "12:55",
    subject: "Computer Networks",
  },
  {
    day: "Wednesday",
    period: "5",
    startTime: "1:45",
    endTime: "2:35",
    subject: "Mathematics",
  },
  {
    day: "Wednesday",
    period: "6",
    startTime: "2:35",
    endTime: "3:25",
    subject: "English",
  },
  {
    day: "Wednesday",
    period: "7",
    startTime: "3:25",
    endTime: "4:10",
    subject: "Lab / Activity",
  },

  // =========================
  // THURSDAY
  // =========================
  {
    day: "Thursday",
    period: "1",
    startTime: "9:20",
    endTime: "10:10",
    subject: "Computer Networks",
  },
  {
    day: "Thursday",
    period: "2",
    startTime: "10:10",
    endTime: "11:00",
    subject: "Database Management Systems",
  },
  {
    day: "Thursday",
    period: "3",
    startTime: "11:15",
    endTime: "12:05",
    subject: "Java Programming",
  },
  {
    day: "Thursday",
    period: "4",
    startTime: "12:05",
    endTime: "12:55",
    subject: "Advanced Data Structures",
  },
  {
    day: "Thursday",
    period: "5",
    startTime: "1:45",
    endTime: "2:35",
    subject: "English",
  },
  {
    day: "Thursday",
    period: "6",
    startTime: "2:35",
    endTime: "3:25",
    subject: "Mathematics",
  },
  {
    day: "Thursday",
    period: "7",
    startTime: "3:25",
    endTime: "4:10",
    subject: "Lab / Activity",
  },

  // =========================
  // FRIDAY
  // =========================
  {
    day: "Friday",
    period: "1",
    startTime: "9:20",
    endTime: "10:10",
    subject: "Mathematics",
  },
  {
    day: "Friday",
    period: "2",
    startTime: "10:10",
    endTime: "11:00",
    subject: "Computer Networks",
  },
  {
    day: "Friday",
    period: "3",
    startTime: "11:15",
    endTime: "12:05",
    subject: "Database Management Systems",
  },
  {
    day: "Friday",
    period: "4",
    startTime: "12:05",
    endTime: "12:55",
    subject: "Java Programming",
  },
  {
    day: "Friday",
    period: "5",
    startTime: "1:45",
    endTime: "2:35",
    subject: "Advanced Data Structures",
  },
  {
    day: "Friday",
    period: "6",
    startTime: "2:35",
    endTime: "3:25",
    subject: "English",
  },
  {
    day: "Friday",
    period: "7",
    startTime: "3:25",
    endTime: "4:10",
    subject: "Lab / Activity",
  },
];

export const seedTimetable = mutation({
  args: {},

  handler: async (ctx) => {
    const subjects = await ctx.db
      .query("subjects")
      .withIndex("by_branch_semester", (q) =>
        q
          .eq("branch", "CSE – AI & DS")
          .eq("semester", "2-1")
      )
      .collect();

    const inserted = [];

    for (const item of timetableData) {
      const subject = subjects.find(
        (s) => s.name === item.subject
      );

      if (!subject) {
        continue;
      }

      const id = await ctx.db.insert("timetable", {
        day: item.day,
        period: item.period,
        startTime: item.startTime,
        endTime: item.endTime,

        branch: "CSE – AI & DS",
        semester: "2-1",
        section: "A",

        subjectId: subject._id,

        room: undefined,

        createdAt: Date.now(),
      });

      inserted.push(id);
    }

    return {
      message: "Timetable seeded successfully",
      insertedCount: inserted.length,
    };
  },
});