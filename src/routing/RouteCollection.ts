import Route from './Route';

export default class RouteCollection {
    routeMap = new Map<String, Route>()

    add(key: string, route: Route) {
        this.routeMap.set(key, route);
    }
}