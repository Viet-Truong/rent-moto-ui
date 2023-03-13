import config from "~/config";
import Home from "~/pages/Home";

// public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

export { publicRoutes };
