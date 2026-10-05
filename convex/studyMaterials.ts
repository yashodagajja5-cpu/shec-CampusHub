import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get study materials for a student's subjects
export const getStudentStudyMaterials = query({
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

    const materials = [];

    for (const subject of subjects) {
      const subjectMaterials = await ctx.db
        .query("studyMaterials")
        .withIndex("by_subject", (q) =>
          q.eq("subjectId", subject._id)
        )
        .collect();

      for (const material of subjectMaterials) {
        let facultyName = "CSE Faculty";

        if (material.facultyId) {
          const faculty = await ctx.db.get(material.facultyId);

          if (faculty) {
            facultyName = faculty.name;
          }
        }

        materials.push({
          ...material,
          subjectName: subject.name,
          subjectCode: subject.code,
          facultyName,
        });
      }
    }

    return materials.sort(
      (a, b) => b.createdAt - a.createdAt
    );
  },
});


// Add a study material
export const addStudyMaterial = mutation({
  args: {
    subjectId: v.id("subjects"),
    facultyId: v.optional(v.id("faculty")),

    title: v.string(),

    type: v.union(
      v.literal("Notes"),
      v.literal("PDF"),
      v.literal("PPT"),
      v.literal("Video"),
      v.literal("Link")
    ),

    fileUrl: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("studyMaterials", {
      subjectId: args.subjectId,
      facultyId: args.facultyId,
      title: args.title,
      type: args.type,
      fileUrl: args.fileUrl,
      createdAt: Date.now(),
    });
  },
});