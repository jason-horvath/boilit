import Route from './Route';
export default class RouteCollection {

  private routeMap = new Map<String, Route>()

  constructor() {
    this.routeMap = new Map<String, Route>();
  }

  add(key: string, route: Route) {
    this.routeMap.set(key, route);
  }

  get(uri: string) {
    const matchedKey = this.matchRouteKey(uri);
    console.log(matchedKey);
    console.log(this.routeMap.get(matchedKey));
    return this.routeMap.get(matchedKey);
  }

  matchRouteKey(uri: string): String {
    const matches = [...this.routeMap.keys()].filter((item: String) => {
      const uriPattern = item.replace('/', '\/').replace(/:[a-zA-Z0-9]+/, '[a-zA-Z0-9]+');
      const regex = new RegExp(uriPattern);

      return regex.test(uri) && (uri.split('/').length === item.split('/').length);
    });
    console.log(matches);
    const match = matches.includes(uri) ? uri : matches.pop() ?? '/404';
    console.log(match);
    return match;
  }

  setRouteMap(routeMap: Map<string, Route>) {
    this.routeMap = routeMap;
  }
  getRouteMap(): Map<String, Route> {
    return this.routeMap;
  }
}
