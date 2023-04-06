import config from "~/config";
import MotoDetail from "~/pages/MotoDetail";
import Home from "~/pages/Home/Home";

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.moto, component: MotoDetail },
];

export { publicRoutes };
