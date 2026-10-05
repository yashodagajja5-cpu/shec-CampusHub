import { mutation } from "./_generated/server";

export const seedDemoAttendance = mutation({
  args: {},

  handler: async (ctx) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", "DEMO2026AI001")
      )
      .first();

    if (!student) {
      throw new Error("Demo student not found.");
    }

    const subjects = await ctx.db.query("subjects").collect();

    if (subjects.length === 0) {
      throw new Error("No subjects found.");
    }

    const attendanceData = [
      { code: "ADS", present: 18, total: 20 },
      { code: "JAVA", present: 22, total: 24 },
      { code: "DBMS", present: 19, total: 23 },
      { code: "MATH", present: 16, total: 20 },
      { code: "CN", present: 17, total: 21 },
      { code: "ENG", present: 19, total: 20 },
    ];

    let insertedCount = 0;

    for (const item of attendanceData) {
      const subject = subjects.find(
        (s) => s.code === item.code
      );

      if (!subject) continue;

      for (let i = 1; i <= item.total; i++) {
        const status =
          i <= item.present ? "present" : "absent";

        await ctx.db.insert("attendance", {
          studentId: student._id,
          subjectId: subject._id,
          date: `2026-09-${String(
            ((i - 1) % 28) + 1
          ).padStart(2, "0")}`,
          status,
          createdAt: Date.now(),
        });

        insertedCount++;
      }
    }

    return {
      message: "Demo attendance seeded successfully",
      insertedCount,
    };
  },
});