import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getStudentAssignments = query({
  args: {
    branch: v.string(),
    semester: v.string(),
  },

  handler: async (ctx, args) => {
    const subjects = await ctx.db
      .query("subjects")
      .withIndex("by_branch_semester", (q) =>
        q
          .eq("branch", args.branch)
          .eq("semester", args.semester)
      )
      .collect();

    const assignments = [];

    for (const subject of subjects) {
      const subjectAssignments = await ctx.db
        .query("assignments")
        .withIndex("by_subject", (q) =>
          q.eq("subjectId", subject._id)
        )
        .collect();

      for (const assignment of subjectAssignments) {
        let facultyName = "CSE Faculty";

        const faculty = await ctx.db.get(assignment.facultyId);

        if (faculty) {
          facultyName = faculty.name;
        }

        assignments.push({
          ...assignment,
          subjectName: subject.name,
          subjectCode: subject.code,
          facultyName,
        });
      }
    }

    return assignments.sort(
      (a, b) => b.createdAt - a.createdAt
    );
  },
});


export const addAssignment = mutation({
  args: {
    subjectId: v.id("subjects"),
    facultyId: v.id("faculty"),

    title: v.string(),
    description: v.optional(v.string()),
    dueDate: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("assignments", {
      subjectId: args.subjectId,
      facultyId: args.facultyId,
      title: args.title,
      description: args.description,
      dueDate: args.dueDate,
      createdAt: Date.now(),
    });
  },
});