import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { requestCourses } from "../services/requests";
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import backgroundImage from "../images/lxp-student.jpg";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const getCoursesData = async (page, pageSize) => {
    try {
      const coursesData = await requestCourses(page, pageSize);
      setCourses(coursesData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page") || 1;
    const pageSize = queryParams.get("pageSize") || 10;

    setCurrentPage(page);
    getCoursesData(page, pageSize);
  }, [location.search]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      const pageSize = 10;
      setCurrentPage(prevPage);
      getCoursesData(prevPage, pageSize);
    }
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const pageSize = 10;
    setCurrentPage(nextPage);
    getCoursesData(nextPage, pageSize);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
       style={{
        marginRight: 0,
        marginLeft: "auto",
      }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            style={{ backgroundColor: "rgba(173, 216, 230, 0.3)", padding: 40 }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {courses.map((course) => (
                <li key={course.id} style={{ marginBottom: 20 }}>
                  <Paper
                    elevation={1}
                    style={{
                      padding: 10,
                      backgroundColor: "rgba(173, 216, 230, 0.5)",
                    }}
                  >
                    <Link
                      to={`/course-details/${course.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography variant="h5" gutterBottom>
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
            <Box mt={4} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePreviousPage}
              >
                voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextPage}
                style={{ marginLeft: 10 }}
              >
                próximo
              </Button>
            </Box>
          </Paper>
        </Container>
      </Container>
    </div>
  );
};

export default Courses;
