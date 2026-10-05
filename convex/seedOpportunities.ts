import { mutation } from "./_generated/server";

export const seedOpportunities = mutation({
  args: {},

  handler: async (ctx) => {
    const existing = await ctx.db
      .query("opportunities")
      .collect();

    if (existing.length > 0) {
      return {
        insertedCount: 0,
        message: "Opportunities already exist.",
      };
    }

    const opportunities = [
      {
        title: "Internship Opportunities",
        type: "Internship" as const,
        organization: "Industry & Training Partners",
        description:
          "Explore internship opportunities suitable for students from different branches and semesters.",
        status: "Open" as const,
      },
      {
        title: "Hackathons",
        type: "Hackathon" as const,
        organization: "College / External Platforms",
        description:
          "Find upcoming hackathons, team-based competitions and innovation challenges.",
        status: "Open" as const,
      },
      {
        title: "Workshops",
        type: "Workshop" as const,
        organization: "SHEC Campus",
        description:
          "Participate in technical workshops, seminars and skill-development sessions.",
        status: "Open" as const,
      },
      {
        title: "Placement Training",
        type: "Placement" as const,
        organization: "SHEC Training Cell",
        description:
          "Access placement preparation activities including aptitude, coding and communication training.",
        status: "Available" as const,
      },
      {
        title: "Coding Competitions",
        type: "Competition" as const,
        organization: "Technical Community",
        description:
          "Participate in coding contests and technical competitions to improve problem-solving skills.",
        status: "Open" as const,
      },
      {
        title: "Scholarship Opportunities",
        type: "Scholarship" as const,
        organization: "Government / Private Organizations",
        description:
          "View scholarship opportunities and eligibility information available for students.",
        status: "Open" as const,
      },
    ];

    for (const opportunity of opportunities) {
      await ctx.db.insert("opportunities", {
        ...opportunity,
        createdAt: Date.now(),
      });
    }

    return {
      insertedCount: opportunities.length,
      message: "Opportunities seeded successfully.",
    };
  },
});