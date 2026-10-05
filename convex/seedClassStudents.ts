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

export const seedClassStudents = mutation({
  args: {},
  handler: async (ctx) => {
    let insertedCount = 0;
    let skippedCount = 0;

    for (const [name, rollNumber] of students) {
      const existing = await ctx.db
        .query("students")
        .withIndex("by_rollNumber", (q) =>
          q.eq("rollNumber", rollNumber)
        )
        .first();

      if (existing) {
        skippedCount++;
        continue;
      }

      await ctx.db.insert("students", {
        name,
        rollNumber,
        branch: "CSE – AI & DS",
        year: "2nd Year",
        semester: "2-1",
        section: "A",
        academicYear: "2026–27",
        email: "",
        phone: "",
        status: "active",
        createdAt: Date.now(),
      });

      insertedCount++;
    }

    return {
      message: "Class students seeded successfully",
      insertedCount,
      skippedCount,
      totalStudents: students.length,
    };
  },
});