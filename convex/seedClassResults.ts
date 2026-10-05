import { mutation } from "./_generated/server";

const students = [
  ["Bobbepalli Pujitha", "25D31A4501"],
  ["Ch. Yemima", "25D31A4502"],
  ["Dasari Keerthana", "25D31A4503"],
  ["Gajja Yasoda", "25D31A4504"],
  ["G. Amulya", "25D31A4505"],
  ["K. Lakshmi Pavani", "25D31A4506"],
  ["K. Harshinki", "25D31A4507"],
  ["Hema Supraja", "25D31A4508"],
  ["Loukika Kiranmai", "25D31A4509"],
  ["P. Mona", "25D31A4510"],
  ["Sravanthi", "25D31A4511"],
  ["Syed Ishrat Jahan", "25D31A4512"],
  ["SK. Rihana", "25D31A4513"],
  ["G. Manasa", "25D31A4514"],
  ["K. Dwaraka", "25D31A4515"],
  ["M. Yamini", "25D31A4516"],
  ["K. Girija", "25D31A4517"],
  ["L. Naga Akshaya", "25D31A4518"],
  ["Sumalika", "25D31A4519"],
  ["Asini", "25D31A4520"],
  ["P. Mahalakshmi", "25D31A4521"],
  ["SK. Kousar Anujm", "25D31A4522"],
  ["Bhargavi", "25D31A4523"],
  ["Kalyani", "25D31A4524"],
  ["Madhubala", "25D31A4525"],
  ["Y. Mohitha", "25D31A4526"],
];

const sem11Grades = [
  ["S", "S", "B", "A", "S", "S", "S", "S", "S", "S"],
  ["B", "A", "S", "C", "S", "B", "S", "A", "S", "S"],
  ["B", "S", "S", "A", "A", "A", "S", "C", "S", "S"],
  ["B", "S", "B", "B", "S", "B", "S", "S", "S", "S"],
  ["S", "A", "C", "A", "S", "A", "S", "S", "S", "S"],
  ["A", "S", "S", "D", "S", "C", "S", "A", "A", "S"],
  ["D", "A", "B", "B", "A", "D", "S", "D", "A", "S"],
  ["F", "A", "D", "D", "A", "D", "A", "B", "A", "S"],
  ["S", "A", "B", "D", "S", "S", "A", "A", "S", "S"],
  ["C", "A", "S", "C", "A", "C", "S", "S", "A", "S"],
  ["D", "A", "S", "C", "S", "C", "S", "D", "S", "S"],
  ["D", "A", "D", "C", "A", "D", "A", "B", "A", "S"],
  ["S", "S", "B", "A", "S", "S", "S", "S", "S", "S"],
  ["B", "A", "S", "E", "S", "B", "S", "A", "S", "S"],
  ["C", "A", "B", "D", "A", "C", "S", "D", "A", "A"],
  ["D", "A", "B", "E", "A", "B", "A", "A", "A", "S"],
  ["C", "A", "C", "C", "S", "S", "S", "C", "S", "S"],
  ["C", "A", "S", "C", "A", "B", "S", "B", "S", "S"],
  ["B", "A", "C", "B", "S", "B", "S", "B", "S", "S"],
  ["E", "A", "C", "D", "A", "C", "S", "A", "A", "S"],
  ["B", "S", "C", "A", "S", "S", "S", "C", "S", "S"],
  ["C", "A", "A", "C", "S", "A", "S", "A", "S", "S"],
  ["D", "A", "S", "E", "A", "D", "A", "F", "A", "A"],
  ["C", "A", "A", "D", "A", "B", "S", "S", "S", "S"],
  ["A", "S", "C", "S", "S", "S", "S", "A", "S", "S"],
  ["A", "S", "B", "S", "S", "A", "S", "S", "S", "S"],
];

const sem11Sgpa = [
  8.82, 7.79, 8.82, 8.82, 7.54, 7.64, 7.54, 6.15, 6.56,
  7.77, 6.15, 7.59, 8.97, 7.44, 5.44, 8.10, 7.44, 8.51,
  8.36, 7.90, 8.51, 8.05, 6.23, 8.92, 7.90, 8.72,
];

const sem12Grades = [
  ["A", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
  ["B", "C", "B", "D", "D", "S", "S", "S", "S", "S"],
  ["B", "B", "A", "A", "B", "S", "S", "S", "S", "S"],
  ["A", "C", "A", "A", "B", "S", "S", "S", "S", "S"],
  ["D", "D", "B", "C", "C", "S", "A", "A", "S", "S"],
  ["E", "B", "B", "C", "D", "S", "S", "S", "S", "S"],
  ["C", "D", "C", "C", "D", "S", "S", "S", "S", "S"],
  ["F", "D", "C", "E", "D", "S", "S", "S", "S", "S"],
  ["F", "C", "B", "D", "D", "S", "S", "S", "S", "S"],
  ["D", "C", "A", "B", "D", "S", "A", "A", "S", "A"],
  ["F", "D", "C", "E", "D", "S", "S", "S", "S", "S"],
  ["D", "C", "A", "D", "D", "S", "S", "S", "S", "S"],
  ["S", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
  ["C", "C", "A", "E", "E", "S", "S", "S", "S", "S"],
  ["F", "C", "D", "D", "F", "S", "S", "S", "S", "S"],
  ["B", "C", "B", "C", "C", "S", "S", "S", "S", "S"],
  ["E", "C", "A", "D", "D", "S", "S", "S", "S", "S"],
  ["A", "C", "A", "B", "C", "S", "S", "S", "S", "S"],
  ["C", "C", "A", "A", "C", "S", "S", "S", "S", "S"],
  ["D", "C", "A", "B", "D", "S", "S", "S", "S", "S"],
  ["C", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
  ["B", "C", "A", "C", "D", "S", "S", "S", "S", "S"],
  ["E", "E", "D", "E", "E", "A", "A", "A", "A", "A"],
  ["B", "B", "S", "A", "B", "S", "S", "S", "S", "S"],
  ["E", "C", "A", "B", "C", "S", "S", "S", "S", "S"],
  ["A", "C", "B", "A", "B", "S", "S", "S", "S", "S"],
];

const sem12Sgpa = [
  8.82, 7.79, 8.82, 8.82, 7.54, 7.64, 7.54, 6.15, 6.56,
  7.77, 6.15, 7.59, 8.97, 7.44, 5.44, 8.10, 7.44, 8.51,
  8.36, 7.90, 8.51, 8.05, 6.23, 8.92, 7.90, 8.72,
];

const sem11Subjects = [
  ["R231101", "Mathematics-I", 3],
  ["R231102", "Applied Physics", 3],
  ["R231103", "Programming for Problem Solving", 3],
  ["R231104", "Engineering Graphics", 3],
  ["R231105", "English", 3],
  ["R231106", "Programming Lab", 1.5],
  ["R231107", "Physics Lab", 1.5],
  ["R231108", "Engineering Graphics Lab", 1.5],
  ["R231109", "English Lab", 1.5],
  ["R231110", "Skill Development", 0.5],
];

const sem12Subjects = [
  ["R231202", "Digital Electronics & VLSI", 3],
  ["R231205", "Data Structures", 3],
  ["R231207", "Computer Engineering", 3],
  ["R231209", "Chemistry", 3],
  ["R231211", "Business Communication & Management", 3],
  ["R231205L", "Data Structures Lab", 1.5],
  ["R231207L", "Computer Engineering Lab", 1.5],
  ["R231209L", "Chemistry Lab", 1.5],
  ["R231211L", "Environmental & Workplace Skills", 1.5],
  ["R231215L", "Health, Wellness & Yoga Skills", 0.5],
];

export const seedClassResults = mutation({
  args: {},
  handler: async (ctx) => {
    let deletedCount = 0;
    let insertedCount = 0;

    for (let i = 0; i < students.length; i++) {
      const [, rollNumber] = students[i];

      const student = await ctx.db
        .query("students")
        .withIndex("by_rollNumber", (q) =>
          q.eq("rollNumber", rollNumber)
        )
        .first();

      if (!student) {
        continue;
      }

      // Delete old results for this student
      const oldResults = await ctx.db
        .query("results")
        .withIndex("by_student", (q) =>
          q.eq("studentId", student._id)
        )
        .collect();

      for (const result of oldResults) {
        await ctx.db.delete(result._id);
        deletedCount++;
      }

      // Insert 1-1 results
      for (let j = 0; j < sem11Subjects.length; j++) {
        const [code, name, credits] = sem11Subjects[j];

        await ctx.db.insert("results", {
          studentId: student._id,
          academicYear: "2024–25",
          year: "1st Year",
          semester: "1-1",
          subjectCode: code,
          subjectName: name,
          grade: sem11Grades[i][j],
          credits: credits,
          sgpa: sem11Sgpa[i],
          createdAt: Date.now(),
        });

        insertedCount++;
      }

      // Insert 1-2 results
      for (let j = 0; j < sem12Subjects.length; j++) {
        const [code, name, credits] = sem12Subjects[j];

        await ctx.db.insert("results", {
          studentId: student._id,
          academicYear: "2025–26",
          year: "1st Year",
          semester: "1-2",
          subjectCode: code,
          subjectName: name,
          grade: sem12Grades[i][j],
          credits: credits,
          sgpa: sem12Sgpa[i],
          createdAt: Date.now(),
        });

        insertedCount++;
      }
    }

    return {
      message: "Class results reset and seeded successfully",
      deletedCount: deletedCount,
      insertedCount: insertedCount,
    };
  },
});