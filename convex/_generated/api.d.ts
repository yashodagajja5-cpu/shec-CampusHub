/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as assignments from "../assignments.js";
import type * as attendance from "../attendance.js";
import type * as feedback from "../feedback.js";
import type * as hostel from "../hostel.js";
import type * as notices from "../notices.js";
import type * as opportunities from "../opportunities.js";
import type * as requests from "../requests.js";
import type * as results from "../results.js";
import type * as scholarships from "../scholarships.js";
import type * as seedAssignments from "../seedAssignments.js";
import type * as seedAttendance from "../seedAttendance.js";
import type * as seedClassResults from "../seedClassResults.js";
import type * as seedClassStudents from "../seedClassStudents.js";
import type * as seedFaculty from "../seedFaculty.js";
import type * as seedFeedback from "../seedFeedback.js";
import type * as seedNotices from "../seedNotices.js";
import type * as seedOpportunities from "../seedOpportunities.js";
import type * as seedResults from "../seedResults.js";
import type * as seedScholarships from "../seedScholarships.js";
import type * as seedStudents from "../seedStudents.js";
import type * as seedStudyMaterials from "../seedStudyMaterials.js";
import type * as seedSubjects from "../seedSubjects.js";
import type * as seedTimetable from "../seedTimetable.js";
import type * as students from "../students.js";
import type * as studyMaterials from "../studyMaterials.js";
import type * as timetable from "../timetable.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  assignments: typeof assignments;
  attendance: typeof attendance;
  feedback: typeof feedback;
  hostel: typeof hostel;
  notices: typeof notices;
  opportunities: typeof opportunities;
  requests: typeof requests;
  results: typeof results;
  scholarships: typeof scholarships;
  seedAssignments: typeof seedAssignments;
  seedAttendance: typeof seedAttendance;
  seedClassResults: typeof seedClassResults;
  seedClassStudents: typeof seedClassStudents;
  seedFaculty: typeof seedFaculty;
  seedFeedback: typeof seedFeedback;
  seedNotices: typeof seedNotices;
  seedOpportunities: typeof seedOpportunities;
  seedResults: typeof seedResults;
  seedScholarships: typeof seedScholarships;
  seedStudents: typeof seedStudents;
  seedStudyMaterials: typeof seedStudyMaterials;
  seedSubjects: typeof seedSubjects;
  seedTimetable: typeof seedTimetable;
  students: typeof students;
  studyMaterials: typeof studyMaterials;
  timetable: typeof timetable;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
