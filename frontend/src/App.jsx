import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecentFeedbacks from './components/RecentFeedbacks';
import FeedbackForm from './components/FeedbackForm';

// Lazy-loaded components
import Navbar from './components/shared/Navbar';
const Login = lazy(() => import('./components/auth/Login'));
const Signup = lazy(() => import('./components/auth/Singup'));
const Home = lazy(() => import('./components/Home'));
const Jobs = lazy(() => import('./components/Jobs'));
const Browse = lazy(() => import('./components/Browse'));
const Profile = lazy(() => import('./components/Profile'));
const JobDetail = lazy(() => import('./components/JobDetail'));
const Companies = lazy(() => import('./components/recruiter/Companies'));
const CompanyCreate = lazy(() => import('./components/recruiter/CompanyCreate'));
const CompanySetup = lazy(() => import('./components/recruiter/CompanySetup'));
const AdminJobs = lazy(() => import('./components/recruiter/AdminJobs'));
const PostJob = lazy(() => import('./components/recruiter/PostJob'));
const Applicants = lazy(() => import('./components/recruiter/Applicants'));
const ProtectedRoute = lazy(() => import('./components/recruiter/ProtectedRoute'));
const DashBoard = lazy(() => import('./components/Admin/DashBoard'));
const AboutUs = lazy(() => import('./components/ui/AboutUs'));
const Contact = lazy(() => import('./components/Concact'));
const Footer = lazy(() => import('./components/Footer'));
const NewsList = lazy(() => import('./components/NewsList'));
const ReferralPage = lazy(() => import('./components/GetReferralPage'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ChatPage = lazy(() => import('./ChatPage'));
const AdminAddReferral = lazy(() => import('./components/Admin/AdminAddReferral'));


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/description/:id',
    element: <JobDetail />
  },
  {
    path: '/recentFeedbaks',
    element: <RecentFeedbacks/>
  },
  {
    path: '/feedback',
    element: <FeedbackForm/>
  },
  {
    path: '/admin/dashboard',
    element: <DashBoard />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/contactForm',
    element: <ContactForm />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/admin/companies',
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },
  {
    path: '/admin/companies/:id',
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },
  {
    path: '/admin/jobs',
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: '/messages',
    element: <ChatPage />
  },
  {
    path: '/admin/jobs/create',
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/:id/edit',
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },
  {
    path: '/addRef',
    element: <AdminAddReferral />
  },
  {
    path: '/newsList',
    element: <NewsList />
  },
  {
    path: '/referral',
    element: <ReferralPage />
  }
]);

//  Loading spinner
const Loader = () => (
  <div className="flex items-center justify-center h-screen text-xl font-semibold">
    Loading...
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
}

export default App;
