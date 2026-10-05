import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentAttendance = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    const records = await ctx.db
      .query("attendance")
      .withIndex("by_student", (q) =>
        q.eq("studentId", args.studentId)
      )
      .collect();

    const result = [];

    for (const record of records) {
      const subject = await ctx.db.get(record.subjectId);

      if (subject) {
        result.push({
          ...record,
          subjectName: subject.name,
          subjectCode: subject.code,
        });
      }
    }

    return result;
  },
});

export const addAttendance = mutation({
  args: {
    studentId: v.id("students"),
    subjectId: v.id("subjects"),
    date: v.string(),
    status: v.union(
      v.literal("present"),
      v.literal("absent")
    ),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("attendance", {
      studentId: args.studentId,
      subjectId: args.subjectId,
      date: args.date,
      status: args.status,
      createdAt: Date.now(),
    });
  },
});