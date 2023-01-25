import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import EventPage from "./pages/EventPage"
import Home from "./pages/Home"
import OrganizationPage from "./pages/OrganizationPage"
import ProblemPage from "./pages/ProblemPage"
import VolunteerPage from "./pages/VolunteerPage"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, EVENT_ROUTE, ORGANIZATION_ROUTE, VOLUNTEER_ROUTE, PROBLEM_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: EVENT_ROUTE + '/:id',
        Component: EventPage
    },
    {
        path: ORGANIZATION_ROUTE + '/:id',
        Component: OrganizationPage
    },
    {
        path: VOLUNTEER_ROUTE + '/:id',
        Component: VolunteerPage
    },
    {
        path: PROBLEM_ROUTE + '/:id',
        Component: ProblemPage
    },
]