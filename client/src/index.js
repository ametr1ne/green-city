import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminStore from './store/AdminStore';
import OrganizationStore from './store/OrganizationStore';
import './index.css'
import VolunteerStore from './store/VolunteerStore';
import EventStore from './store/EventStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      admin: new AdminStore(),
      orgs: new OrganizationStore(),
      volunteers: new VolunteerStore(),
      events: new EventStore()
    }}>
      <App />
    </Context.Provider>
);
