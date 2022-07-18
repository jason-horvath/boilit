import RouteCollection from '../core/RouteCollection';
import Route from '../core/Route';

const baseRoutes = new RouteCollection();

baseRoutes.add('/', new Route('default-index-view', require('../views/DefaultIndexView')));
baseRoutes.add('/404', new Route('default-not-found-view', require('../views/DefaultNotFoundView')));
baseRoutes.add('/dynamic/:firstValue/example/:secondValue', new Route('dynamic-example-view', require('../views/DynamicExampleView')));

export default baseRoutes;
