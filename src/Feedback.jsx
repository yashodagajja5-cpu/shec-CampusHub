import React, { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Feedback.css";

function Feedback({ onBack }) {
  const [category, setCategory] = useState("Academic");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const student = useQuery(api.students.getStudentByRollNumber, {
    rollNumber: "DEMO2026AI001",
  });

  const feedbackData = useQuery(
    api.feedback.getStudentFeedback,
    student ? { studentId: student._id } : "skip"
  );

  const addFeedback = useMutation(api.feedback.addFeedback);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || !feedback.trim()) {
      alert("Please select a rating and enter your feedback.");
      return;
    }

    if (!student) {
      alert("Student profile is still loading. Please try again.");
      return;
    }

    try {
      await addFeedback({
        studentId: student._id,
        category,
        rating,
        message: feedback.trim(),
        anonymous,
      });

      setSubmitted(true);
      setFeedback("");
      setRating(0);
      setAnonymous(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert("Unable to submit feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-page">

      <header className="feedback-header">
        <button onClick={onBack} className="feedback-back-btn">
          ← Back to Dashboard
        </button>

        <div>
          <h1>Student Feedback</h1>
          <p>Share your feedback and suggestions with SHEC</p>
        </div>
      </header>

      <main className="feedback-container">

        {submitted && (
          <div className="feedback-success">
            ✓ Thank you! Your feedback has been submitted successfully.
          </div>
        )}

        <section className="feedback-card">

          <div className="feedback-title">
            <div className="feedback-title-icon">💬</div>

            <div>
              <h2>Share Your Feedback</h2>
              <p>
                Your feedback helps improve the campus experience.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="feedback-form-group">
              <label>Feedback Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Academic</option>
                <option>Faculty</option>
                <option>Library</option>
                <option>Hostel</option>
                <option>Transport</option>
                <option>Campus Facilities</option>
                <option>Events & Workshops</option>
                <option>Student Services</option>
                <option>General</option>
              </select>
            </div>

            <div className="feedback-form-group">

              <label>How would you rate your experience?</label>

              <div className="rating-box">

                {[1, 2, 3, 4, 5].map((number) => (
                  <button
                    type="button"
                    key={number}
                    className={
                      number <= rating
                        ? "rating-star selected"
                        : "rating-star"
                    }
                    onClick={() => setRating(number)}
                  >
                    ★
                  </button>
                ))}

              </div>

              <small>
                {rating === 0
                  ? "Select a rating"
                  : `${rating} out of 5`}
              </small>

            </div>

            <div className="feedback-form-group">

              <label>Your Feedback</label>

              <textarea
                rows="7"
                placeholder="Write your feedback or suggestion here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

            </div>

            <div className="feedback-options">

              <label>
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />

                Submit feedback anonymously
              </label>

            </div>

            <button
              type="submit"
              className="feedback-submit-btn"
            >
              Submit Feedback
            </button>

          </form>

        </section>

        <section className="feedback-info">

          <div>
            <span>💡</span>

            <div>
              <strong>Be Constructive</strong>

              <p>
                Share specific suggestions that can help improve
                the student experience.
              </p>
            </div>
          </div>

          <div>
            <span>🔒</span>

            <div>
              <strong>Student Privacy</strong>

              <p>
                Feedback should be handled through authorized
                college administration.
              </p>
            </div>
          </div>

          <div>
            <span>🏫</span>

            <div>
              <strong>Campus Improvement</strong>

              <p>
                Your suggestions can help identify areas for
                improvement.
              </p>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Feedback;
