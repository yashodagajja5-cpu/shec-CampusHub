import { mutation } from "./_generated/server";

export const seedDemoResults = mutation({
  args: {},

  handler: async (ctx) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", "DEMO2026AI001")
      )
      .first();

    if (!student) {
      throw new Error("Demo student not found.");
    }

    const existing = await ctx.db
      .query("results")
      .withIndex("by_student", (q) =>
        q.eq("studentId", student._id)
      )
      .collect();

    if (existing.length > 0) {
      return {
        message: "Demo results already exist",
        insertedCount: 0,
      };
    }

    const results = [
      // =========================
      // 1-1 RESULTS
      // =========================

      {
        semester: "1-1",
        subjectCode: "R231101",
        subjectName: "Linear Algebra & Calculus",
        credits: 3,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231102",
        subjectName: "Computer Programming Lab",
        credits: 1.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231103",
        subjectName: "Introduction to Programming",
        credits: 3,
        grade: "A",
        gradePoint: 9,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231104",
        subjectName: "Engineering Physics",
        credits: 3,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231105",
        subjectName: "IT Workshop",
        credits: 1,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231106",
        subjectName:
          "Basic Electrical & Electronics Engineering",
        credits: 3,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231107",
        subjectName: "Engineering Physics Lab",
        credits: 1,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231108",
        subjectName: "Engineering Graphics",
        credits: 3,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231109",
        subjectName:
          "Electrical & Electronics Engineering Workshop",
        credits: 1.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-1",
        subjectCode: "R231110",
        subjectName:
          "NSS/NCC/Scouts & Guides/Community Service",
        credits: 0.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },

      // =========================
      // 1-2 RESULTS
      // =========================

      {
        semester: "1-2",
        subjectCode: "R231202",
        subjectName: "DE & VC",
        credits: 3,
        grade: "A",
        gradePoint: 9,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231205",
        subjectName: "Data Structures",
        credits: 3,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231207",
        subjectName: "Communication English",
        credits: 2,
        grade: "A",
        gradePoint: 9,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231209",
        subjectName: "Chemistry",
        credits: 3,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231211",
        subjectName: "BCME",
        credits: 3,
        grade: "B",
        gradePoint: 8,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231205L",
        subjectName: "Data Structures Lab",
        credits: 1.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231207L",
        subjectName: "Communication English Lab",
        credits: 1,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231209L",
        subjectName: "Chemistry Lab",
        credits: 1,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231211L",
        subjectName: "EWS Lab",
        credits: 1.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
      {
        semester: "1-2",
        subjectCode: "R231215L",
        subjectName: "HWYS Lab",
        credits: 0.5,
        grade: "S",
        gradePoint: 10,
        sgpa: 8.82,
      },
    ];

    let insertedCount = 0;

    for (const result of results) {
      await ctx.db.insert("results", {
        studentId: student._id,
        academicYear: "2025-26",
        year: "1st Year",
        semester: result.semester,
        subjectCode: result.subjectCode,
        subjectName: result.subjectName,
        grade: result.grade,
        credits: result.credits,
        gradePoint: result.gradePoint,
        sgpa: result.sgpa,
        createdAt: Date.now(),
      });

      insertedCount++;
    }

    return {
      message: "Demo results seeded successfully",
      insertedCount,
    };
  },
});