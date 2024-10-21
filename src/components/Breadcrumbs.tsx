import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  routes: { name: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ routes }) => {
  return (
    <nav className="text-gray-500 text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        {routes.map((route, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            {index !== routes.length - 1 ? (
              <Link to={route.path} className="text-blue-600 hover:underline">
                {route.name}
              </Link>
            ) : (
              <span className="text-gray-600">{route.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
