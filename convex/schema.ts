import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // =========================
  // STUDENTS
  // =========================
  students: defineTable({
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
    createdAt: v.number(),
  })
    .index("by_rollNumber", ["rollNumber"])
    .index("by_branch", ["branch"])
    .index("by_semester", ["semester"]),

  // =========================
  // FACULTY
  // =========================
  faculty: defineTable({
    name: v.string(),
    facultyId: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),

    department: v.string(),
    designation: v.string(),

    status: v.union(
      v.literal("active"),
      v.literal("inactive")
    ),

    createdAt: v.number(),
  })
    .index("by_facultyId", ["facultyId"])
    .index("by_department", ["department"]),

  // =========================
  // DEPARTMENTS
  // =========================
  departments: defineTable({
    name: v.string(),
    code: v.string(),
    description: v.optional(v.string()),

    hodName: v.optional(v.string()),

    status: v.union(
      v.literal("active"),
      v.literal("inactive")
    ),

    createdAt: v.number(),
  })
    .index("by_code", ["code"]),

  // =========================
  // SUBJECTS
  // =========================
  subjects: defineTable({
    code: v.string(),
    name: v.string(),

    branch: v.string(),
    semester: v.string(),
    year: v.string(),

    type: v.union(
      v.literal("Theory"),
      v.literal("Lab"),
      v.literal("Workshop"),
      v.literal("Activity")
    ),

    credits: v.number(),

    facultyId: v.optional(v.id("faculty")),

    status: v.union(
      v.literal("active"),
      v.literal("inactive")
    ),

    createdAt: v.number(),
  })
    .index("by_branch_semester", ["branch", "semester"])
    .index("by_code", ["code"]),

  // =========================
  // ATTENDANCE
  // =========================
  attendance: defineTable({
    studentId: v.id("students"),
    subjectId: v.id("subjects"),

    date: v.string(),

    status: v.union(
      v.literal("present"),
      v.literal("absent")
    ),

    markedBy: v.optional(v.id("faculty")),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_subject", ["subjectId"])
    .index("by_date", ["date"]),

  // =========================
  // RESULTS
  // =========================
  results: defineTable({
    studentId: v.id("students"),

    academicYear: v.string(),
    year: v.string(),
    semester: v.string(),

    subjectCode: v.string(),
    subjectName: v.string(),

    grade: v.string(),
    credits: v.number(),
    gradePoint: v.optional(v.number()),

    sgpa: v.optional(v.number()),
    cgpa: v.optional(v.number()),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_semester", ["semester"]),

  // =========================
  // TIMETABLE
  // =========================
  timetable: defineTable({
    day: v.string(),
    period: v.string(),
    startTime: v.string(),
    endTime: v.string(),

    branch: v.string(),
    semester: v.string(),
    section: v.optional(v.string()),

    subjectId: v.id("subjects"),
    facultyId: v.optional(v.id("faculty")),

    room: v.optional(v.string()),

    createdAt: v.number(),
  })
    .index("by_branch_semester", ["branch", "semester"])
    .index("by_day", ["day"]),

  // =========================
  // NOTICES
  // =========================
  notices: defineTable({
    title: v.string(),
    description: v.string(),

    category: v.union(
      v.literal("Academic"),
      v.literal("Examinations"),
      v.literal("Events"),
      v.literal("Scholarships"),
      v.literal("General")
    ),

    audience: v.union(
      v.literal("All"),
      v.literal("Students"),
      v.literal("Faculty"),
      v.literal("Students & Faculty")
    ),

    priority: v.union(
      v.literal("High"),
      v.literal("Medium"),
      v.literal("Low")
    ),

    status: v.union(
      v.literal("Published"),
      v.literal("Draft")
    ),

    publishDate: v.string(),

    createdBy: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_category", ["category"]),

  // =========================
  // EVENTS & WORKSHOPS
  // =========================
  events: defineTable({
    title: v.string(),

    type: v.union(
      v.literal("Event"),
      v.literal("Workshop"),
      v.literal("Hackathon"),
      v.literal("Seminar"),
      v.literal("FDP"),
      v.literal("Competition")
    ),

    date: v.string(),
    time: v.string(),
    venue: v.string(),

    organizer: v.string(),
    audience: v.string(),

    registrationOpen: v.boolean(),

    status: v.union(
      v.literal("Upcoming"),
      v.literal("Completed")
    ),

    description: v.optional(v.string()),

    createdAt: v.number(),
  })
    .index("by_date", ["date"])
    .index("by_status", ["status"]),

  // =========================
  // OPPORTUNITIES
  // =========================
  opportunities: defineTable({
    title: v.string(),

    type: v.union(
      v.literal("Internship"),
      v.literal("Hackathon"),
      v.literal("Workshop"),
      v.literal("Placement"),
      v.literal("Competition"),
      v.literal("Scholarship")
    ),

    organization: v.string(),
    description: v.string(),

    status: v.union(
      v.literal("Open"),
      v.literal("Available"),
      v.literal("Closed")
    ),

    createdAt: v.number(),
  })
    .index("by_type", ["type"])
    .index("by_status", ["status"]),

  // =========================
  // SCHOLARSHIPS
  // =========================
  scholarships: defineTable({
    studentId: v.id("students"),

    scholarshipName: v.string(),
    provider: v.string(),

    amount: v.optional(v.number()),
    academicYear: v.string(),

    category: v.optional(v.string()),

    status: v.union(
      v.literal("Applied"),
      v.literal("Under Process"),
      v.literal("Approved"),
      v.literal("Eligible"),
      v.literal("Rejected")
    ),

    appliedDate: v.optional(v.string()),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_status", ["status"]),

  // =========================
  // LETTERS & CERTIFICATE REQUESTS
  // =========================
  requests: defineTable({
    studentId: v.id("students"),

    requestType: v.union(
      v.literal("Leave Request"),
      v.literal("Permission Request"),
      v.literal("Bonafide Certificate"),
      v.literal("Study Certificate"),
      v.literal("Fee / Bank Letter"),
      v.literal("Transfer Certificate"),
      v.literal("General Request")
    ),

    subject: v.string(),
    description: v.string(),

    priority: v.union(
      v.literal("High"),
      v.literal("Medium"),
      v.literal("Low")
    ),

    status: v.union(
      v.literal("Pending"),
      v.literal("Approved"),
      v.literal("Rejected"),
      v.literal("Processing")
    ),

    reviewedBy: v.optional(v.string()),
    response: v.optional(v.string()),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_status", ["status"]),

  // =========================
  // HOSTEL ROOMS
  // =========================
  hostelRooms: defineTable({
    roomNumber: v.string(),
    block: v.string(),
    floor: v.string(),

    sharingType: v.string(),
    capacity: v.number(),
    occupied: v.number(),

    status: v.union(
      v.literal("Available"),
      v.literal("Full")
    ),

    createdAt: v.number(),
  })
    .index("by_block", ["block"])
    .index("by_status", ["status"]),

  // =========================
  // HOSTEL RESIDENTS
  // =========================
  hostelResidents: defineTable({
    studentId: v.id("students"),
    roomId: v.id("hostelRooms"),

    joiningDate: v.string(),

    status: v.union(
      v.literal("Active"),
      v.literal("Inactive")
    ),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_room", ["roomId"]),

  // =========================
  // HOSTEL COMPLAINTS
  // =========================
  hostelComplaints: defineTable({
    studentId: v.id("students"),

    category: v.union(
      v.literal("Maintenance"),
      v.literal("Electrical"),
      v.literal("Food"),
      v.literal("General")
    ),

    description: v.string(),

    status: v.union(
      v.literal("Pending"),
      v.literal("Processing"),
      v.literal("Resolved")
    ),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_status", ["status"]),

  // =========================
  // ASSIGNMENTS
  // =========================
  assignments: defineTable({
    subjectId: v.id("subjects"),
    facultyId: v.id("faculty"),

    title: v.string(),
    description: v.optional(v.string()),

    dueDate: v.string(),

    createdAt: v.number(),
  })
    .index("by_subject", ["subjectId"])
    .index("by_faculty", ["facultyId"]),

  // =========================
  // STUDY MATERIALS
  // =========================
  studyMaterials: defineTable({
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

    createdAt: v.number(),
  })
    .index("by_subject", ["subjectId"]),

  // =========================
  // FEEDBACK
  // =========================
  feedback: defineTable({
    studentId: v.id("students"),

    category: v.string(),
    rating: v.number(),
    message: v.string(),

    anonymous: v.boolean(),

    createdAt: v.number(),
  })
    .index("by_student", ["studentId"]),

  // =========================
  // USERS / ROLES
  // =========================
  users: defineTable({
    userId: v.string(),

    name: v.string(),
    email: v.optional(v.string()),

    role: v.union(
      v.literal("student"),
      v.literal("faculty"),
      v.literal("hod"),
      v.literal("admin")
    ),

    status: v.union(
      v.literal("active"),
      v.literal("inactive")
    ),

    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_role", ["role"]),
});

