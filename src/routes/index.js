import config from "~/config";
import MotoDetail from "~/pages/MotoDetail";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Register from "~/pages/Register/Register";

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.moto, component: MotoDetail },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

export { publicRoutes };
