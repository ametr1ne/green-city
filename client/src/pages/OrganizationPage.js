import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneCategories, fetchOneOrganization } from "../http/organizationAPI";
import { CalendarIcon, PencilIcon } from "@heroicons/react/20/solid";
import { Chip } from "@material-tailwind/react";

const OrganizationPage = () => {
  const [orgData, setOrgData] = useState({})
  const [catData, setCatData] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    async function fetchData() {  
      let data = await fetchOneOrganization(id)
      setOrgData(data)
      if (data.categoryOfOrganizationId) {
        let category = await fetchOneCategories(data.categoryOfOrganizationId)
        console.log(category)
        setCatData(category)
      }
    }

    fetchData()
  }, [])

  console.log(orgData, catData);

  return (
    <div className="container mx-auto px-52 mt-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {orgData.name}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Created at {new Date(orgData.createdAt).toLocaleDateString()}
            </div>
          </div>
          {catData && <Chip className="mt-3" value={catData.name}/>}
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              // onClick={() => handleOpen()}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Изменить
            </button>
          </span>
        </div>
      </div>
      <div className="mt-12">
        {/* <p>{problem.description}</p> */}
        <div className="rounded-xl bg-blue-gray-100 p-4 mt-10">
          <h3>Привязанная организации</h3>
          {/* <NavLink to={ORGANIZATION_ROUTE + "/" + org.id}>{org.name}</NavLink> */}
        </div>
      </div>

      {/* <UpdateProblem
        currentData={{ problem, org, problemStage }}
        open={open}
        handleOpen={handleOpen}
      /> */}
    </div>
  );
};

export default OrganizationPage;
