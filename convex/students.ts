import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getStudents = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("students").collect();
  },
});

export const getStudentByRollNumber = query({
  args: {
    rollNumber: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", args.rollNumber)
      )
      .unique();
  },
});

export const addStudent = mutation({
  args: {
    name: v.string(),
    rollNumber: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    passwordHash: v.optional(v.string()),
    branch: v.string(),
    year: v.string(),
    semester: v.string(),
    section: v.optional(v.string()),
    academicYear: v.string(),
    status: v.union(
      v.literal("active"),
      v.literal("inactive")
    ),
    profilePhoto: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("students", {
      name: args.name,
      rollNumber: args.rollNumber,
      email: args.email,
      phone: args.phone,
      passwordHash: args.passwordHash,
      branch: args.branch,
      year: args.year,
      semester: args.semester,
      section: args.section,
      academicYear: args.academicYear,
      status: args.status,
      profilePhoto: args.profilePhoto,
      createdAt: Date.now(),
    });
  },
});

export const updateStudent = mutation({
  args: {
    studentId: v.id("students"),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    passwordHash: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const { studentId, ...updates } = args;

    await ctx.db.patch(studentId, updates);

    return {
      success: true,
      message: "Student profile updated successfully.",
    };
  },
});

export const setStudentPassword = mutation({
  args: {
    rollNumber: v.string(),
    password: v.string(),
  },

  handler: async (ctx, args) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", args.rollNumber)
      )
      .unique();

    if (!student) {
      throw new Error("Student not found.");
    }

    await ctx.db.patch(student._id, {
      passwordHash: args.password,
    });

    return {
      success: true,
      message: "Student password set successfully.",
    };
  },
});

export const loginStudent = query({
  args: {
    rollNumber: v.string(),
    password: v.string(),
  },

  handler: async (ctx, args) => {
    const student = await ctx.db
      .query("students")
      .withIndex("by_rollNumber", (q) =>
        q.eq("rollNumber", args.rollNumber)
      )
      .unique();

    if (!student) {
      return null;
    }

    if (student.status !== "active") {
      return null;
    }

    if (!student.passwordHash) {
      return null;
    }

    if (student.passwordHash !== args.password) {
      return null;
    }

    return student;
  },
});