import React, { useContext, useEffect, useState } from "react";
import { ORGANIZATION_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const OrganizationsList = observer(() => {
  const { orgs } = useContext(Context);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([])

  useEffect(() => {
      setCategories(orgs.categories_of_organizations)
  }, [orgs.categories_of_organizations])

  function selectCategory(id) {
    categories.forEach(item => {
      if (item.id === id) {
        console.log(item.name)
        return item.name
      }
    })
  }

  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl mb-5">Список организаций</h2>
      <div className="flex gap-2 flex-wrap">
        {categories.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      {orgs.organizations.length > 0 ? (
        <ul className="mt-4">
          {orgs.organizations.map((item) => (
            <li
              onClick={() => navigate(ORGANIZATION_ROUTE + "/" + item.id)}
              key={item.id}
              className="px-5 py-2 cursor-pointer border-2 border-slate-900 mb-2 w-full rounded-md hover:shadow transition duration-500"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-md font-bold text-gray-900">
                    {item.name}
                  </h3>
                  {item.categoryOfOrganizationId && (
                    <p className="text-sm font-medium text-gray-500 truncat">
                    {selectCategory(item.categoryOfOrganizationId)}
                  </p>
                  )}
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

export default OrganizationsList;
