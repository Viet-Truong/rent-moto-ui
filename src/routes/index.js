import config from "~/config";
import Home from "~/pages/Home/Home";

// public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

export { publicRoutes };
