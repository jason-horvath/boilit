import RouteMetaData from './RouteMetaData';
type RenderData = RouteMetaData & {
  params?: Map<String, String>;
}

export default RenderData;
