import React from "react";
import CursorProvider from "../../Providers/cursorProvider";

const NotFound = () => {
  return (
    <CursorProvider>
      <div className="notFound">
        <h1>The page is not found.</h1>
      </div>
    </CursorProvider>
  );
};

export default NotFound;
