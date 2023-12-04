// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { requestCourses } from '../services/requests';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const location = useLocation();

//   const getCoursesData = async (page, pageSize) => {
//     try {
//       const coursesData = await requestCourses(page, pageSize);
//       setCourses(coursesData);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const page = queryParams.get('page') || 1;
//     const pageSize = queryParams.get('pageSize') || 10;

//     getCoursesData(page, pageSize);
//   }, [location.search]);

//   return (
//     <div>
//       <h2>Courses</h2>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.id}>
//             <p>Title: {course.title}</p>
//             <p>Duration: {course.duration}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Courses;
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { requestCourses } from '../services/requests';
import { Container, Box, Typography } from '@mui/material';

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
    <Container maxWidth="md">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Courses
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: 20 }}>
              <Link to={`/course-details/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" gutterBottom>
                  Title: {course.title}
                </Typography>
              </Link>
              <Typography variant="body1">Duration: {course.duration}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Courses;
