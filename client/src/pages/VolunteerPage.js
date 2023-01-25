import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneVolunteer } from "../http/VolunteersAPI";

const VolunteerPage = () => {
  const [volunteer, setVolunteer] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchOneVolunteer(id).then((data) => setVolunteer(data));
  }, []);

  return (
    <div className="container mx-auto my-auto px-4">
      <div className="container mx-auto max-w-xl">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-20">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Личная информация
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Ф.И.О.</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {volunteer.fullname}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {volunteer.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Дата рождения
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {new Date(volunteer.birthDate).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
