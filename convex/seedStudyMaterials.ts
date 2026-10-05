import { mutation } from "./_generated/server";

export const seedStudyMaterials = mutation({
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

    const findSubject = (name: string) =>
      subjects.find((subject) => subject.name === name);

    const materials = [
      {
        subject: "Advanced Data Structures",
        type: "Notes" as const,
        title: "Trees and AVL Trees",
      },
      {
        subject: "Advanced Data Structures",
        type: "PDF" as const,
        title: "Heap and Priority Queue",
      },
      {
        subject: "Java Programming",
        type: "Notes" as const,
        title: "Object Oriented Programming",
      },
      {
        subject: "Java Programming",
        type: "PDF" as const,
        title: "Inheritance and Polymorphism",
      },
      {
        subject: "Database Management Systems",
        type: "Notes" as const,
        title: "SQL and Relational Algebra",
      },
      {
        subject: "Mathematics",
        type: "PDF" as const,
        title: "Unit 1 Important Problems",
      },
    ];

    const inserted = [];

    for (const material of materials) {
      const subject = findSubject(material.subject);

      if (!subject) {
        continue;
      }

      const id = await ctx.db.insert("studyMaterials", {
        subjectId: subject._id,
        title: material.title,
        type: material.type,
        createdAt: Date.now(),
      });

      inserted.push(id);
    }

    return {
      message: "Study materials seeded successfully",
      insertedCount: inserted.length,
    };
  },
});