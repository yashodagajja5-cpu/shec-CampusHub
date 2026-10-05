import { query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentHostelInfo = query({
  args: {
    studentId: v.id("students"),
  },

  handler: async (ctx, args) => {
    const resident = await ctx.db
      .query("hostelResidents")
      .filter((q) => q.eq(q.field("studentId"), args.studentId))
      .first();

    return resident;
  },
});