import { Routes , Route, Navigate } from "react-router-dom";
import NASAImage from 'modules/NASAImage'


/**
 * Common Router file for whole application
 * @returns {Object} - Routing list component
 */
const AppRoutes = () => {
  return (
    
      <Routes>
        <Route
          path="/Images"
          element={<NASAImage></NASAImage>}
        />
        <Route
          path="/othermodule"
          element={<div className="alert alert-primary" role="alert"> Welcome to Sales Dashboard</div>}
        />
        <Route path="*" element={<Navigate to="/Images" />} />
      </Routes>
  );
};

export default AppRoutes;
