import React, { useEffect, useState } from 'react';
import { requestCoursesForProfessor } from '../services/requests';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CoursesProfessor = () => {
  const [courses, setCourses] = useState([]);

  const getUserId = () => {
    const userId = localStorage.getItem('userId');
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
    <Container maxWidth="md" style={{ marginTop: 300 }}>
      <Paper elevation={3} style={{ backgroundColor: '#ADD8E6', padding: 40 }}>
        <Box mt={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            Courses for Professor
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {courses.map((course) => (
              <li key={course.id} style={{ marginBottom: 20 }}>
                <Paper elevation={1} style={{ backgroundColor: 'white', padding: 10 }}>
                  <Link to={`/course-details/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h5" gutterBottom>
                      Title: {course.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1">Duration: {course.duration}</Typography>
                </Paper>
              </li>
            ))}
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default CoursesProfessor;
