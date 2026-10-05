import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentScholarships = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("scholarships")
      .withIndex("by_student", (q) =>
        q.eq("studentId", args.studentId)
      )
      .collect();
  },
});

export const addScholarship = mutation({
  args: {
    studentId: v.id("students"),
    scholarshipName: v.string(),
    provider: v.string(),
    amount: v.optional(v.number()),
    academicYear: v.string(),
    category: v.optional(v.string()),
    status: v.union(
      v.literal("Applied"),
      v.literal("Under Process"),
      v.literal("Approved"),
      v.literal("Eligible"),
      v.literal("Rejected")
    ),
    appliedDate: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("scholarships", {
      studentId: args.studentId,
      scholarshipName: args.scholarshipName,
      provider: args.provider,
      amount: args.amount,
      academicYear: args.academicYear,
      category: args.category,
      status: args.status,
      appliedDate: args.appliedDate,
      createdAt: Date.now(),
    });
  },
});