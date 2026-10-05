import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getOpportunities = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("opportunities")
      .order("desc")
      .collect();
  },
});

export const getOpportunitiesByType = query({
  args: {
    type: v.union(
      v.literal("Internship"),
      v.literal("Hackathon"),
      v.literal("Workshop"),
      v.literal("Placement"),
      v.literal("Competition"),
      v.literal("Scholarship")
    ),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("opportunities")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .collect();
  },
});

export const addOpportunity = mutation({
  args: {
    title: v.string(),
    type: v.union(
      v.literal("Internship"),
      v.literal("Hackathon"),
      v.literal("Workshop"),
      v.literal("Placement"),
      v.literal("Competition"),
      v.literal("Scholarship")
    ),
    organization: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("Open"),
      v.literal("Available"),
      v.literal("Closed")
    ),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("opportunities", {
      title: args.title,
      type: args.type,
      organization: args.organization,
      description: args.description,
      status: args.status,
      createdAt: Date.now(),
    });
  },
});