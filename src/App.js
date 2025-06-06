import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/forgotpassword';
import ResetPassword from './pages/resetpassword';
import Home from './pages/home';
import Create from './pages/create';
import Topics from './pages/topics';
import Course from './pages/course';
import Profile from './pages/profile';
import About from './pages/about';
import Contact from './pages/contact';
import DashBoard from './admin/dashboard';
import Users from './admin/users';
import Courses from './admin/courses';
import Admins from './admin/admins';
import Contacts from './admin/contacts';
import Error from './pages/error';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleClientId } from './constants';
import Shareable from './pages/shareable';
import Exam from './pages/exam';
import AllCourser from './pages/allcourses';
import CollegePage from './pages/collegePage';
import DepartmentPage from './pages/departmentPage';
import ProgramPage from './pages/programPage';
import CoursePage from './pages/coursePage';
import ReviewSection from './components/ReviewSection';

function App() {

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
    <Router>
      <div>
        <ToastContainer
          limit={3}
          progressClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastProgressDark" : "toastProgress"}
          bodyClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastBodyDark" : "toastBody"}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={sessionStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'}
        />
        <Routes>
          {/* Main App */}
          <Route path="/" exact element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/course' element={<Course />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shareable' element={<Shareable />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/allcourses' element={<AllCourser/>} />
          <Route path="/college/:collegeId" element={<CollegePage />} />
          <Route path="/college/:collegeId/:departmentId" element={<DepartmentPage />} />
          <Route path="/college/:collegeId/:departmentId/:programId" element={<ProgramPage />} />
          <Route path="/college/:collegeId/:departmentId/:programId/:courseId" element={<CoursePage />} />
          <Route path="/courses/:collegeId/:departmentId/:programId/:courseId/reviews" element={<ReviewSection />} />
          <Route
  path="/college/:collegeId/:departmentId/:programId/:courseId"
  element={<CoursePage />}
/>

          {/* Admin Panel */}
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/admins' element={<Admins />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
