import { mutation } from "./_generated/server";

export const seedDemoStudent = mutation({
  args: {},

  handler: async (ctx) => {
    const existing = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", "DEMO2026AI001")
      )
      .first();

    if (existing) {
      return {
        message: "Demo student already exists",
        student: existing,
      };
    }

    const studentId = await ctx.db.insert("students", {
      name: "Yashii",
      rollNumber: "DEMO2026AI001",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      academicYear: "2026–27",

      email: "yashii.demo@shec.ac.in",
      phone: "",

      status: "active",

      createdAt: Date.now(),
    });

    return {
      message: "Demo student added successfully",
      studentId,
    };
  },
});