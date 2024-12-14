import React from "react";
import { useLocation } from "react-router-dom";

const RouteTitle = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(x => x);

  return (
    <h2 className="text-2xl font-semibold mb-4">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index < pathSegments.length - 1 ? (
            <span className="text-gray-600 capitalize">{segment}/</span>
          ) : (
            <span className="text-[#0EA5E9] font-bold capitalize">{segment}</span>
          )}
        </React.Fragment>
      ))}
    </h2>
  );
};

export default RouteTitle;
