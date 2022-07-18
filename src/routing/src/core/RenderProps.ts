import RenderData from "../types/RenderData";

export default class RenderProps {
  
  private data: RenderData;

  constructor(data: RenderData) {
    this.data = data;
  }

  getTitle() {
    return this.data?.title ?? '';
  }

  getDescription() {
    return this.data?.description ?? '';
  }

  getParam(key: String) {
    return this?.data?.params?.get(key) ?? '';
  }

  getVar(key: String) {
    return this?.data?.vars?.get(key) ?? '';
  }

  getData(): RenderData {
    return this.data;
  }
}
