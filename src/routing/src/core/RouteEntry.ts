import Route from './Route';

export default class RouteEntry {
  private path: String;
  private route: Route | undefined;

  constructor(path: String, route: Route | undefined) {
    this.path = path;
    this.route = route;
  }

  getPath(): String {
    return this.path;
  }

  getRoute(): Route | undefined  {
    return this.route;
  }

  getParams(): Map<String , number> {
    let params: Map<String, number> = new Map();
    
    this.path.split('/').map((param, key) => {
      if (param.startsWith(':')) {
        params.set(param, key);
      }
    })

    return params;
  }

  hasParams(): boolean {
    return [...this.getParams().keys()].length > 0;
  }
}
