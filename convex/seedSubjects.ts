import { mutation } from "./_generated/server";

export const seedDemoSubjects = mutation({
  args: {},

  handler: async (ctx) => {
    const subjects = [
      {
        code: "ADS",
        name: "Advanced Data Structures",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 3,
        status: "active" as const,
      },
      {
        code: "JAVA",
        name: "Java Programming",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 3,
        status: "active" as const,
      },
      {
        code: "DBMS",
        name: "Database Management Systems",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 3,
        status: "active" as const,
      },
      {
        code: "MATH",
        name: "Mathematics",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 3,
        status: "active" as const,
      },
      {
        code: "CN",
        name: "Computer Networks",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 3,
        status: "active" as const,
      },
      {
        code: "ENG",
        name: "English",
        branch: "CSE – AI & DS",
        semester: "2-1",
        year: "2nd Year",
        type: "Theory" as const,
        credits: 2,
        status: "active" as const,
      },
    ];

    const inserted = [];

    for (const subject of subjects) {
      const existing = await ctx.db
        .query("subjects")
        .withIndex("by_code", (q) =>
          q.eq("code", subject.code)
        )
        .first();

      if (!existing) {
        const id = await ctx.db.insert("subjects", {
          ...subject,
          createdAt: Date.now(),
        });

        inserted.push(id);
      }
    }

    return {
      message: "Demo subjects seeded successfully",
      insertedCount: inserted.length,
      subjectIds: inserted,
    };
  },
});