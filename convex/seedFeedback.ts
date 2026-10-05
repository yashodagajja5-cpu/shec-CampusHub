import { mutation } from "./_generated/server";

export const seedFeedback = mutation({
  args: {},

  handler: async (ctx) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", "DEMO2026AI001")
      )
      .unique();

    if (!student) {
      throw new Error("Demo student not found.");
    }

    const existing = await ctx.db
      .query("feedback")
      .withIndex("by_student", (q) =>
        q.eq("studentId", student._id)
      )
      .collect();

    if (existing.length > 0) {
      return {
        insertedCount: 0,
        message: "Feedback already exists.",
      };
    }

    await ctx.db.insert("feedback", {
      studentId: student._id,
      category: "Academics",
      rating: 5,
      message:
        "The learning environment and academic support are good.",
      anonymous: false,
      createdAt: Date.now(),
    });

    await ctx.db.insert("feedback", {
      studentId: student._id,
      category: "Hostel",
      rating: 4,
      message:
        "Hostel facilities and food can be improved further.",
      anonymous: false,
      createdAt: Date.now(),
    });

    return {
      insertedCount: 2,
      message: "Feedback seeded successfully.",
    };
  },
});