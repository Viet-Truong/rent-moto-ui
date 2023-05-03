import config from "~/config";
import MotoDetail from "~/pages/MotoDetail";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Register from "~/pages/Register/Register";
import HomeAdmin from "~/pages/Admin/HomeAdmin";
import Profile from "~/pages/Profile/Profile";

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.moto, component: MotoDetail },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.admin, component: HomeAdmin, layout: null },
    { path: config.routes.profile, component: Profile, layout: null },
];

export { publicRoutes };
