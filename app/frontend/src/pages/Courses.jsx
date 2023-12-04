import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { requestCourses } from '../services/requests';
import { Container, Box, Typography, Paper } from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();

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
    const page = queryParams.get('page') || 1;
    const pageSize = queryParams.get('pageSize') || 10;

    getCoursesData(page, pageSize);
  }, [location.search]);

  return (
    <Container maxWidth="md" style={{ marginTop: 300 }}>
      <Paper elevation={3} style={{ backgroundColor: '#ADD8E6', padding: 40 }}>
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
      </Paper>
    </Container>
  );
};

export default Courses;
