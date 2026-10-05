import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentResults = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("results")
      .withIndex("by_student", (q) =>
        q.eq("studentId", args.studentId)
      )
      .collect();
  },
});

export const addResult = mutation({
  args: {
    studentId: v.id("students"),
    academicYear: v.string(),
    year: v.string(),
    semester: v.string(),
    subjectCode: v.string(),
    subjectName: v.string(),
    grade: v.string(),
    credits: v.number(),
    gradePoint: v.optional(v.number()),
    sgpa: v.optional(v.number()),
    cgpa: v.optional(v.number()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("results", {
      studentId: args.studentId,
      academicYear: args.academicYear,
      year: args.year,
      semester: args.semester,
      subjectCode: args.subjectCode,
      subjectName: args.subjectName,
      grade: args.grade,
      credits: args.credits,
      gradePoint: args.gradePoint,
      sgpa: args.sgpa,
      cgpa: args.cgpa,
      createdAt: Date.now(),
    });
  },
});