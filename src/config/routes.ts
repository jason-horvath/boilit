import { baseRoutes as routes, Route } from '@larzilla/boilit-router';

routes.add('/', new Route('home-view', require('@views/HomeView')));
routes.add('/about', new Route('about-view', require('@views/AboutView')));

export default routes;
