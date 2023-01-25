import React from "react";
import { useNavigate } from "react-router-dom";
import { VOLUNTEER_ROUTE } from "../../utils/consts";

const VolunteerItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(VOLUNTEER_ROUTE + "/" + item.id)}
      key={item.id}
      className="p-3 cursor-pointer rounded-md hover:shadow-md mb-2 transition-all duration-500 border-2"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/user.png"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncat">
            {item.fullname}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {item.email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-90">
          {new Date(item.birthDate).toLocaleDateString()}
        </div>
      </div>
    </li>
  );
};

export default VolunteerItem;
