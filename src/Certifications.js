import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Certifications.css";

const Certifications = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [courses, setCourses] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // YouTube API Key

  // Fetching courses' video data from YouTube API   https://www.youtube.com/watch?v=xWLxhF3b5P8 "RBSGKlAvoiM" G3e-cpL7ofc
  useEffect(() => {
    const fetchVideos = async () => {
      const courseIds = [
        { id: "dsa", title: "Data Structures and Algorithms (DSA)", videoIds: ["RBSGKlAvoiM", "MtVZAXepMPM",  "xWLxhF3b5P8", "ekqP9BpkP9U"] },
        { id: "webtech", title: "Web Development", videoIds: [ "G3e-cpL7ofc", "CgkZ7MvWUAA", "w_L5XMp44tc", "nu_pCVPKzTk"] },
        { id: "App Development", title: "Mobile App Development", videoIds: [ "2esQdKzRUCw", "K0t-RCSlasE", "BxM2DayeOBE", "u64gyCdqawU"] },
        { id: "CloudComputing", title: "Cloud Computing", videoIds: [ "EN4fEbcFZ_E", "2LaAJq1lB1Q", "IUU6OR8yHCc", "RLd_XTyt-w8"] },
        { id: "Github", title: "Git/GitHub", videoIds: [ "RGOj5yH7evk", "Ez8F0nW6S-w", "8JJ101D3knE", "vwj89i2FmG0"] },
      ];

      const updatedCourses = await Promise.all(
        courseIds.map(async (course) => {
          const videos = await Promise.all(
            course.videoIds.map(async (videoId) => {
              try {
                const response = await axios.get(
                  `https://www.googleapis.com/youtube/v3/videos`,
                  {
                    params: {
                      part: "snippet",
                      id: videoId,
                      key: apiKey,
                    },
                  }
                );
                if (response.data.items && response.data.items.length > 0) {
                  const video = response.data.items[0];
                  return {
                    title: video.snippet.title,
                    url: `https://www.youtube.com/watch?v=${video.id}`,
                    thumbnail: video.snippet.thumbnails.medium.url,
                  };
                } else {
                  return null; // Handle case where no video is found
                }
              } catch (error) {
                console.error("Error fetching video data", error);
                return null; // Handle error
              }
            })
          );
          // Filter out any null values
          const validVideos = videos.filter((video) => video !== null);
          return { ...course, videos: validVideos };
        })
      );
      setCourses(updatedCourses); // Set courses with video data
    };

    fetchVideos();
  }, [apiKey]);

  const closeModal = () => setSelectedVideo(null); // Function to close the modal.

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page reload on form submission.
    const query = searchQuery.toLowerCase().trim();
    const courseElement = document.getElementById(query);
    if (courseElement) {
      courseElement.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No matching course found. Please check your search term.");
    }
  };

  const handleDropdownClick = (id) => {
    const courseElement = document.getElementById(id);
    if (courseElement) {
      courseElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="project-title">Project X</h1>
        <div className="explore-container">
          <button
            className="dropdown-btn"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            Explore <span className="down-arrow">&#9660;</span>
          </button>
          {dropdownVisible && (
            <div className="dropdown-content">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => {
                    handleDropdownClick(course.id);
                    setDropdownVisible(false);
                  }}
                  className="dropdown-item"
                >
                  {course.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </nav>

      {/* Main Content */}
      <div className="certifications-container">
        <h2 className="courses-title">Courses</h2>
        {courses.map((course) => (
          <div className="course-row" id={course.id} key={course.id}>
            <h2 className="course-title">{course.title}</h2>
            <div className="video-container">
              {course.videos.map((video, videoIndex) => (
                <div
                  key={videoIndex}
                  className="video-box"
                  onClick={() => setSelectedVideo(video.url)}
                >
                  <img
                    className="video-thumbnail"
                    src={video.thumbnail}
                    alt={video.title}
                  />
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {selectedVideo && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <iframe
                className="video-player"
                width="560"
                height="315"
                src={selectedVideo.replace("watch?v=", "embed/")}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
              ></iframe>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;