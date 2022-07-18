import Route from './Route';

export default class RouteEntry {
  private path: String;
  private route: Route;

  constructor(path: String, route: Route) {
    this.path = path;
    this.route = route;
  }

  getPath() {
    return this.path;
  }

  getRoute() {
    return this.route;
  }
}
