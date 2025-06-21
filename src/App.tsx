
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import HomeLayout from "./Layout/HomeLayout";
import { useAuth } from "./context/AppNotify";
import Logout from "./components/Logout";
import { AddBlog } from "./components/AddBlog";
import AllBlogs from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import GetContactUs from "./pages/GetContactUs";
import { AddReview } from "./components/AddReview";

import { GetallReviews } from "./components/GetallReviews";
import LandingPage from "./pages/LandingPage";
// import Services from "./pages/Services";
import WebApp from "./components/services/WebApp";
import MobileApp from "./components/services/MobileApp";
import CloudSolutions from "./components/services/CloudSolutions";
import DigitalMarketing from "./components/services/DigitalMarketing";

// Create a ProtectedRoute component
const ProtectedRoute = ({ 
  children, 
  requiredRole 
}: { 
  children: React.ReactNode; 
  requiredRole?: string; 
}) => {
  const { isLogged, user, isLoading } = useAuth();
  
  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <HomeLayout>
        <div className="max-w-4xl mx-auto p-4 md:p-6 text-center">
          <p>Loading...</p>
        </div>
      </HomeLayout>
    );
  }
  
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole) {
    // Check if user has the required role
    const hasRequiredRole = user?.role === requiredRole;
    
    if (!hasRequiredRole) {
      return (
        <HomeLayout>
          <div className="max-w-4xl mx-auto p-4 md:p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-gray-600">You don't have permission to access this page.</p>
            <p className="text-sm text-gray-500 mt-2">Required role: {requiredRole}</p>
            <p className="text-sm text-gray-500">Your role: {user?.role || 'Unknown'}</p>
            <div className="mt-4">
              <button 
                onClick={() => window.location.href = '/allBlogs'} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Go to All Blogs
              </button>
            </div>
          </div>
        </HomeLayout>
      );
    }
  }
  
  return <>{children}</>;
};


const App = () => {
  const { isLogged } = useAuth();

  
  return (
    
    <Router >
      <Routes>
        {/* Public routes - redirect to dashboard if already logged in */}
           <Route path="/" element={
      
            <HomeLayout>
              <LandingPage />
            </HomeLayout>
          
        } />
        <Route path="/register" element={
        
            <HomeLayout>
              <Register />
            </HomeLayout>
        
        } />
        <Route path="/addReview" element={
        
            <HomeLayout>
              <AddReview />
            </HomeLayout>
        
        } />
        <Route path="/webApp" element={
        
            <HomeLayout>
              <WebApp />
            </HomeLayout>
        
        } />
        <Route path="/mobileApp" element={
        
            <HomeLayout>
              <MobileApp />
            </HomeLayout>
        
        } />
        <Route path="/cloudSolutions" element={
        
            <HomeLayout>
              <CloudSolutions />
            </HomeLayout>
        
        } />
        <Route path="/digitalmarketing" element={
        
            <HomeLayout>
              <DigitalMarketing
               />
            </HomeLayout>
        
        } />
        
        <Route path="/login" element={
         
            <HomeLayout>
              <Login />
            </HomeLayout>
    
        } />
      
     
      
        <Route path="/GetallReviews" element={
         
            <HomeLayout>
              <GetallReviews />
            </HomeLayout>
        
        } />
     
        <Route path="/logout" element={


  isLogged && (
    <>
     <HomeLayout>
              <Logout />
            </HomeLayout>
    </>
  )



        }/>

        {/* Contact Us - accessible to everyone */}
        <Route path="/contactUs" element={
          <HomeLayout>
            <ContactUs />
          </HomeLayout>
        } />

     
        <Route path="/allBlogs" element={
        
            <HomeLayout>
              <AllBlogs />
            </HomeLayout>
         
        } />
        
        <Route path="/logout" element={
          <ProtectedRoute>
            <HomeLayout>
              <Logout />
            </HomeLayout>
          </ProtectedRoute>
        } />

        {/* Admin-only routes - These will show "Access Denied" for non-admin users */}
        <Route path="/addBlog" element={
          <ProtectedRoute requiredRole="admin">
            <HomeLayout>
              <AddBlog />
            </HomeLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/allContactUsList" element={
          <ProtectedRoute requiredRole="admin">
            <HomeLayout>
              <GetContactUs />
            </HomeLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/allContacts" element={
          <ProtectedRoute requiredRole="admin">
            <HomeLayout>
              <GetContactUs />
            </HomeLayout>
          </ProtectedRoute>
        } />

     
        {/* Catch-all route */}
        <Route path="*" element={
          <Navigate to="/" replace />
        } />
      </Routes>
    </Router>
  );
};

export default App;