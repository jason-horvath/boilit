import RouteCollection from '../routing/RouteCollection';
import Route from '../routing/Route';

const routes = new RouteCollection();

routes.add('home', new Route('home', 'home-view', require('@views/HomeView'), false));
routes.add('about', new Route('about', 'about-view', require('@views/AboutView'), false));

export default routes;
