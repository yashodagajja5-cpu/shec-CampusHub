import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentFeedback = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("feedback")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .collect();
  },
});

export const addFeedback = mutation({
  args: {
    studentId: v.id("students"),
    category: v.string(),
    message: v.string(),
    rating: v.number(),
    anonymous: v.boolean(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("feedback", {
      studentId: args.studentId,
      category: args.category,
      message: args.message,
      rating: args.rating,
      anonymous: args.anonymous,
      createdAt: Date.now(),
    });
  },
});