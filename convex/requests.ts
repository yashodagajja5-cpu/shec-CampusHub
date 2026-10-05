import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentRequests = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("requests")
      .withIndex("by_student", (q) =>
        q.eq("studentId", args.studentId)
      )
      .collect();
  },
});

export const addRequest = mutation({
  args: {
    studentId: v.id("students"),

    requestType: v.union(
      v.literal("Leave Request"),
      v.literal("Permission Request"),
      v.literal("Bonafide Certificate"),
      v.literal("Study Certificate"),
      v.literal("Fee / Bank Letter"),
      v.literal("Transfer Certificate"),
      v.literal("General Request")
    ),

    subject: v.string(),
    description: v.string(),

    priority: v.union(
      v.literal("High"),
      v.literal("Medium"),
      v.literal("Low")
    ),
  },

  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("requests", {
      studentId: args.studentId,
      requestType: args.requestType,
      subject: args.subject,
      description: args.description,
      priority: args.priority,
      status: "Pending",
      createdAt: now,
      updatedAt: now,
    });
  },
});