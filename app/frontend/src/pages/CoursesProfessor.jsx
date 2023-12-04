import React, { useEffect, useState } from 'react';
import { requestCoursesForProfessor } from '../services/requests';
import { Container, Box, Typography } from '@mui/material';

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
      console.log(response);
      setCourses(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Courses for Professor
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: 20 }}>
              <Typography variant="h6" gutterBottom>
                Title: {course.title}
              </Typography>
              <Typography variant="body1">Duration: {course.duration}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default CoursesProfessor;
