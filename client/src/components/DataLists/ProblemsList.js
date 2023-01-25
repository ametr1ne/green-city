import React, { useState, useEffect, useContext, cloneElement } from "react";
import { PROBLEM_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const ProblemsList = observer(() => {
  const navigate = useNavigate();

  const { orgs } = useContext(Context);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl mb-5">Известные проблемы</h2>
      {orgs.problems.length > 0 ? (
        <ul className="">
          {orgs.problems.map((item, index) => (
            <li
              onClick={() => navigate(PROBLEM_ROUTE + "/" + item.id)}
              key={item.id}
            >
              <Card variant="gradient" className="mb-3 pb-5">
                <CardBody className="max-h-36 overflow-hidden">
                  <Typography
                    variant="h5"
                    className="mb-2 flex justify-between w-full"
                  >
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p>Пусто</p>
      )}
    </div>
  );
});

export default ProblemsList;
