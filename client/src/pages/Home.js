import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchEvents } from "../http/eventAPI";
import {
  fetchCategories,
  fetchOrganizations,
  fetchProblems,
  fetchStages,
} from "../http/organizationAPI";
import { fetchVolunteers } from "../http/VolunteersAPI";

import VolunteersList from "../components/DataLists/VolunteersList";
import EventsList from "../components/DataLists/EventsList";
import OrganizationsList from "../components/DataLists/OrganizationsList";
import ProblemsList from "../components/DataLists/ProblemsList";

const Home = observer(() => {
  const { volunteers, orgs, events } = useContext(Context);

  useEffect(() => {
    fetchOrganizations().then((data) => orgs.setOrganizations(data.rows));
    fetchProblems().then((data) => orgs.setProblems(data.rows));
    fetchVolunteers().then((data) => volunteers.setVolunteers(data.rows));
    fetchEvents().then((data) => events.setEvents(data.rows));
    fetchCategories().then((data) => orgs.setCategoriesOfOrganizations(data));
    fetchStages().then((data) => orgs.setStages(data));
  }, []);

  return (
    <div className="container mx-auto px-10 mt-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col">
        <EventsList />
        <ProblemsList />
      </div>
      <div className="span-2">
        <VolunteersList />
        <OrganizationsList />
      </div>
    </div>
  );
});

export default Home;
