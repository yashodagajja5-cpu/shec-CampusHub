import { mutation } from "./_generated/server";

export const seedFaculty = mutation({
  args: {},

  handler: async (ctx) => {
    const existingFaculty = await ctx.db
      .query("faculty")
      .collect();

    if (existingFaculty.length > 0) {
      return {
        message: "Faculty already exists",
        count: existingFaculty.length,
      };
    }

    const faculty = [
      {
        name: "CSE Faculty",
        facultyId: "FAC001",
        email: "cse.faculty@shec.ac.in",
        phone: "",
        department: "CSE",
        designation: "Assistant Professor",
        status: "active" as const,
        createdAt: Date.now(),
      },
    ];

    const inserted = [];

    for (const member of faculty) {
      const id = await ctx.db.insert("faculty", member);
      inserted.push(id);
    }

    return {
      message: "Faculty seeded successfully",
      insertedCount: inserted.length,
    };
  },
});