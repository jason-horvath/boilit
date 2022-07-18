import routes from '../routing/routes/base';
import Route from '../routing/core/Route';

routes.add('/', new Route('home-view', require('@views/HomeView')));
routes.add('/about', new Route('about-view', require('@views/AboutView')));

export default routes;
