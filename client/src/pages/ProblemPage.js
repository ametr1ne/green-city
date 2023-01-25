import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  fetchOneOrganization,
  fetchOneProblems,
  fetchOneStage,
} from "../http/organizationAPI";
import { CalendarIcon, PencilIcon } from "@heroicons/react/20/solid";
import { ORGANIZATION_ROUTE } from "../utils/consts";
import UpdateProblem from "../components/modals/UpdateProblem";
import { observer } from "mobx-react-lite";
import { Chip } from "@material-tailwind/react";

const ProblemPage = observer(() => {
  const [problem, setProblem] = useState({});
  const [org, setOrg] = useState({});
  const [problemStage, setProblemStage] = useState('')

  const { id } = useParams();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    async function fetchData() {
      let data = await fetchOneProblems(id);
      setProblem(data);
      if (data.organizationId) {
        let orgData = await fetchOneOrganization(data.organizationId);
        setOrg(orgData);
      }
      if (data.problemSolutionStageId) {
        let stageData = await fetchOneStage(data.problemSolutionStageId);
        setProblemStage(stageData.stage)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-52 mt-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {problem.title}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Created at {new Date(problem.createdAt).toLocaleDateString()}
            </div>
          </div>
          {problemStage && <Chip className="mt-3" value={problemStage}/>}
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              onClick={() => handleOpen()}
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
        <p>{problem.description}</p>
        <div className="rounded-xl bg-blue-gray-100 p-4 mt-10">
          <h3>Привязанная организации</h3>
          <NavLink to={ORGANIZATION_ROUTE + "/" + org.id}>{org.name}</NavLink>
        </div>
      </div>

      <UpdateProblem
        currentData={{ problem, org, problemStage }}
        updateProblemStage={(stage) => setProblemStage(stage)}
        open={open}
        handleOpen={handleOpen}
      />
    </div>
  );
});

export default ProblemPage;
