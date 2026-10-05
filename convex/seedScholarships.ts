import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedScholarships = mutation({
  args: {},

  handler: async (ctx) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", "DEMO2026AI001")
      )
      .unique();

    if (!student) {
      throw new Error(
        "Demo student not found. Please seed the demo student first."
      );
    }

    const existing = await ctx.db
      .query("scholarships")
      .withIndex("by_student", (q) =>
        q.eq("studentId", student._id)
      )
      .collect();

    if (existing.length > 0) {
      return {
        insertedCount: 0,
        message: "Scholarships already exist for this student",
      };
    }

    const scholarships = [
      {
        scholarshipName: "PM Vidyalaxmi Education Loan",
        provider: "Government of India",
        amount: 460000,
        academicYear: "2026–27",
        category: "Education",
        status: "Approved" as const,
        appliedDate: "2026-08-11",
      },
      {
        scholarshipName: "NSP Scholarship",
        provider: "National Scholarship Portal",
        academicYear: "2026–27",
        category: "Government",
        status: "Applied" as const,
        appliedDate: "2026-09-15",
      },
      {
        scholarshipName: "ONGC Scholarship",
        provider: "ONGC",
        academicYear: "2026–27",
        category: "Merit",
        status: "Under Process" as const,
        appliedDate: "2026-09-20",
      },
      {
        scholarshipName: "Airtel Scholarship",
        provider: "Bharti Airtel Foundation",
        academicYear: "2026–27",
        category: "Private",
        status: "Eligible" as const,
      },
    ];

    for (const scholarship of scholarships) {
      await ctx.db.insert("scholarships", {
        studentId: student._id,
        scholarshipName: scholarship.scholarshipName,
        provider: scholarship.provider,
        amount: scholarship.amount,
        academicYear: scholarship.academicYear,
        category: scholarship.category,
        status: scholarship.status,
        appliedDate: scholarship.appliedDate,
        createdAt: Date.now(),
      });
    }

    return {
      insertedCount: scholarships.length,
      message: "Scholarships seeded successfully",
    };
  },
});