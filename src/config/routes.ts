import { baseRoutes as routes } from '../routing';
import { Route } from '../routing';

routes.add('/', new Route('home-view', require('@views/HomeView')));
routes.add('/about', new Route('about-view', require('@views/AboutView')));

export default routes;
