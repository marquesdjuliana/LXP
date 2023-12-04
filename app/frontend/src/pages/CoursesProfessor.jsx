import React, { useEffect, useState } from "react";
import { requestCoursesForProfessor } from "../services/requests";
import { Container, Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImages from "../images/lxp-professor.jpeg";

const CoursesProfessor = () => {
  const [courses, setCourses] = useState([]);

  const getUserId = () => {
    const userId = localStorage.getItem("userId");
    return userId;
  };

  const getCoursesData = async () => {
    try {
      const professorId = getUserId();
      const response = await requestCoursesForProfessor(professorId);
      setCourses(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCoursesData();
  }, []);



  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImages})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            style={{ backgroundColor: "rgba(135, 206, 250, 0.5)", padding: 20 }}

          >
            <Box mt={8} textAlign="center">
              <ul
                style={{ listStyleType: "none", padding: 0, textAlign: "left" }}
              >
                {courses.map((course) => (
                  <li key={course.id} style={{ marginBottom: 20 }}>
                    <Paper elevation={1} style={{ padding: 10 }}>
                      <Link
                        to={`/course-details/${course.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography
                          variant="h5"
                          gutterBottom
                          style={{ fontSize: "1.6rem" }}
                        >
                          Curso: {course.title}
                        </Typography>
                      </Link>
                      <Typography variant="body1">
                        Carga horária: {course.duration}
                      </Typography>
                    </Paper>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        </Container>
    </div>
  );
};

export default CoursesProfessor;
