import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import VolunteerItem from "./VolunteerItem";


const VolunteersList = observer(() => {
  const {volunteers} = useContext(Context)
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl mb-5">Список волонтеров</h2>
      {volunteers.volunteers.length > 0 ? (
        <ul className="max-w-full">
          {volunteers.volunteers.map((item) => (
            <VolunteerItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>Пусто</p>
      )}
    </div>
  );
});

export default VolunteersList;
