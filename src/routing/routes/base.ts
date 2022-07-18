import RouteCollection from '../core/RouteCollection';
import Route from '../core/Route';

const baseRoutes = new RouteCollection();

baseRoutes.add('/', new Route('default-index-view', require('../views/DefaultIndexView')));
baseRoutes.add('/404', new Route('default-not-found-view', require('../views/DefaultNotFoundView')));

export default baseRoutes;
