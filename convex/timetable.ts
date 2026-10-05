import { query } from "./_generated/server";
import { v } from "convex/values";

export const getStudentTimetable = query({
  args: {
    branch: v.string(),
    semester: v.string(),
    section: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const records = await ctx.db
      .query("timetable")
      .withIndex("by_branch_semester", (q) =>
        q
          .eq("branch", args.branch)
          .eq("semester", args.semester)
      )
      .collect();

    const filtered = args.section
      ? records.filter((record) => record.section === args.section)
      : records;

    const result = [];

    for (const record of filtered) {
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