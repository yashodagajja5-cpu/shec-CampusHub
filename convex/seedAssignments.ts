import { mutation } from "./_generated/server";

export const seedAssignments = mutation({
  args: {},

  handler: async (ctx) => {
    // Get subjects for CSE – AI & DS 2-1
    const subjects = await ctx.db
      .query("subjects")
      .withIndex("by_branch_semester", (q) =>
        q
          .eq("branch", "CSE – AI & DS")
          .eq("semester", "2-1")
      )
      .collect();

    // Get available faculty
    const faculty = await ctx.db
      .query("faculty")
      .collect();

    // Use first faculty if available
    const facultyMember = faculty[0];

    if (!facultyMember) {
      throw new Error(
        "No faculty found. Please add a faculty member before seeding assignments."
      );
    }

    const findSubject = (name: string) =>
      subjects.find((subject) => subject.name === name);

    const assignments = [
      {
        subject: "Java Programming",
        title: "Object Oriented Programming",
        description:
          "Prepare notes and programs based on OOP concepts.",
        dueDate: "2026-10-03",
      },
      {
        subject: "Database Management Systems",
        title: "SQL Queries Practice",
        description:
          "Write SQL queries for the given database problems.",
        dueDate: "2026-10-05",
      },
      {
        subject: "Advanced Data Structures",
        title: "AVL Tree Implementation",
        description:
          "Implement insertion and deletion operations in AVL trees.",
        dueDate: "2026-10-07",
      },
      {
        subject: "Mathematics",
        title: "Unit 1 Problem Set",
        description:
          "Solve the important problems from Unit 1.",
        dueDate: "2026-10-02",
      },
    ];

    const inserted = [];

    for (const assignment of assignments) {
      const subject = findSubject(assignment.subject);

      if (!subject) {
        continue;
      }

      const id = await ctx.db.insert("assignments", {
        subjectId: subject._id,
        facultyId: facultyMember._id,
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate,
        createdAt: Date.now(),
      });

      inserted.push(id);
    }

    return {
      message: "Assignments seeded successfully",
      insertedCount: inserted.length,
    };
  },
});