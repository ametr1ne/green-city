import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import { EVENT_ROUTE } from "../../utils/consts";

const EventsLIst = observer(() => {
  const navigate = useNavigate();
  const {events} = useContext(Context)
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl mb-5">Мероприятия</h2>
      {events.events.length > 0 ? (
        <ul className="max-w-full divide-y divide-gray-20">
          {events.events.map((item) => (
            <li
              onClick={() => navigate(EVENT_ROUTE + "/" + item.id)}
              key={item.id}
              className="cursor-pointer border-2 border-slate-600 rounded-md mb-3 p-3"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 truncat">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-900 truncat">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-md font-medium text-gray-500 max-h-36 overflow-hidden truncat">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Пусто</p>
      )}
    </div>
  );
});

export default EventsLIst;
