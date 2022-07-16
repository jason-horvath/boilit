export default class RouteLinkEvent extends Event {
  uri: string = '';
  constructor(uri: string) {
    super('route-navigate');
    this.uri = uri;
  }
}