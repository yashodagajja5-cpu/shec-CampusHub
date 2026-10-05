import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPublishedNotices = query({
  args: {},
  handler: async (ctx) => {
    const notices = await ctx.db
      .query("notices")
      .withIndex("by_status", (q) => q.eq("status", "Published"))
      .collect();

    return notices.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const addNotice = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.union(
      v.literal("Academic"),
      v.literal("Examinations"),
      v.literal("Events"),
      v.literal("Scholarships"),
      v.literal("General")
    ),
    audience: v.union(
      v.literal("All"),
      v.literal("Students"),
      v.literal("Faculty"),
      v.literal("Students & Faculty")
    ),
    priority: v.union(
      v.literal("High"),
      v.literal("Medium"),
      v.literal("Low")
    ),
    status: v.union(
      v.literal("Published"),
      v.literal("Draft")
    ),
    publishDate: v.string(),
    createdBy: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("notices", {
      title: args.title,
      description: args.description,
      category: args.category,
      audience: args.audience,
      priority: args.priority,
      status: args.status,
      publishDate: args.publishDate,
      createdBy: args.createdBy,
      createdAt: Date.now(),
    });
  },
});