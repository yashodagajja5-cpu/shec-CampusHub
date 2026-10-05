import { mutation } from "./_generated/server";

export const seedNotices = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("notices").collect();

    if (existing.length > 0) {
      return {
        insertedCount: 0,
        message: "Notices already exist",
      };
    }

    const notices = [
      {
        title: "Mid Examination Schedule",
        description:
          "The mid examination schedule for the current semester has been published.",
        category: "Examinations" as const,
        audience: "Students" as const,
        priority: "High" as const,
        status: "Published" as const,
        publishDate: "Sep 30, 2026",
        createdBy: "CampusHub Admin",
      },
      {
        title: "Attendance Review Notice",
        description:
          "Students are advised to regularly check their subject-wise attendance.",
        category: "Academic" as const,
        audience: "Students" as const,
        priority: "High" as const,
        status: "Published" as const,
        publishDate: "Sep 29, 2026",
        createdBy: "CSE Faculty",
      },
      {
        title: "AI & ML Workshop",
        description:
          "A technical workshop on Artificial Intelligence and Machine Learning is scheduled for students.",
        category: "Events" as const,
        audience: "Students" as const,
        priority: "Medium" as const,
        status: "Published" as const,
        publishDate: "Sep 28, 2026",
        createdBy: "CampusHub Admin",
      },
      {
        title: "Scholarship Renewal – 2026–27",
        description:
          "Students eligible for scholarship renewal are requested to complete the required process.",
        category: "Scholarships" as const,
        audience: "Students" as const,
        priority: "High" as const,
        status: "Published" as const,
        publishDate: "Sep 26, 2026",
        createdBy: "CampusHub Admin",
      },
      {
        title: "Campus Holiday Notice",
        description:
          "Students are requested to check the academic calendar for upcoming holidays.",
        category: "General" as const,
        audience: "All" as const,
        priority: "Low" as const,
        status: "Published" as const,
        publishDate: "Sep 25, 2026",
        createdBy: "CampusHub Admin",
      },
    ];

    for (const notice of notices) {
      await ctx.db.insert("notices", {
        ...notice,
        createdAt: Date.now(),
      });
    }

    return {
      insertedCount: notices.length,
      message: "Notices seeded successfully",
    };
  },
});