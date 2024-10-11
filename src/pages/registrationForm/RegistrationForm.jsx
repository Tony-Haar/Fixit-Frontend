import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import "./registrationForm.css";

const RegistrationForm = () => {
  const [page, setPage] = React.useState(1);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [yearsOfExperience, setYearsOfExperience] = React.useState("");
  const [workedAt, setWorkedAt] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          location,
          domain,
          about,
          title,
          yearsOfExperience,
          workedAt,
          duration,
          video,
          password,
          password2,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.message);
      }
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="registration-form-container">
        <div className="registration-page-logo">
          <img src={Logo} alt="Registration Page Logo" />
        </div>
        <div className="registration-main-container">
          <div className="card">
            <div className="card-body">
              <div className="card-body-header">
                {page === 1 && (
                  <>
                    <h2>Create Professional Account</h2>
                  </>
                )}

                {page === 2 && (
                  <>
                    <h2>Profile</h2>
                  </>
                )}

                {page === 3 && (
                  <>
                    <h2>Experience</h2>
                  </>
                )}

                {page === 4 && (
                  <>
                    <h2>Video</h2>
                  </>
                )}

                {page === 5 && (
                  <>
                    <h2>Create Password</h2>
                  </>
                )}
              </div>
              <div className="card-body-content">
                {page === 1 && (
                  <div>
                    <div className="input-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>Locatin</label>
                      <input
                        type="text"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>Domain</label>
                      <input
                        type="text"
                        placeholder="Enter your domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {page === 2 && (
                  <div>
                    <div className="input-group">
                      <label>About</label>
                      <textarea
                        name=""
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Enter something about yourself"
                      ></textarea>
                    </div>
                    <div className="input-group">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder="Enter your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>Years Of Experience</label>
                      <select
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        className="about-us-form-input"
                      >
                        <option value="">Select years of experience</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                      </select>
                    </div>
                  </div>
                )}

                {page === 3 && (
                  <div>
                    <div className="input-group">
                      <label>Worked At</label>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        value={workedAt}
                        onChange={(e) => setWorkedAt(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>Duration</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="about-us-form-input"
                      >
                        <option value="">Select Duration</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder="Enter your previous title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {page === 4 && (
                  <div>
                    <div className="input-group">
                      <label>Upload Your Videos</label>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleVideoUpload(e)}
                      />
                    </div>
                  </div>
                )}

                {page === 5 && (
                  <div>
                    <div className="input-group">
                      <label>Submit</label>
                    </div>
                  </div>
                )}

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                {loading && <p className="loading">Loading...</p>}
              </div>
              <div className="card-body-footer">
                {page > 1 && <button onClick={prevPage}>Previous</button>}
                {page < 5 && <button onClick={nextPage}>Next</button>}
                {page === 5 && <button onClick={handleSubmit}>Submit</button>}
              </div>
            </div>
          </div>

          <div className="card-image">
            <img src={Profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
