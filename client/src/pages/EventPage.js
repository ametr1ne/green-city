import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CalendarIcon,
  CheckIcon,
  PencilIcon
} from "@heroicons/react/20/solid";
import { ORGANIZATION_ROUTE } from "../utils/consts";
import { fetchEvents, fetchOneEvent } from "../http/eventAPI";

const EventPage = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {

    fetchOneEvent(id).then(data => {
      setEvent(data)
    }).catch((e) => alert(e.message))

  }, []);

  return (
    <div className="container mx-auto px-52 mt-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {event.title}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Starting {new Date(event.date).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </span>
        </div>
      </div>
      <div className="mt-12">
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventPage;
