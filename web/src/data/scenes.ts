import { Scene, SceneType, ResourceType } from "../types/scene";

const dummyScene1: Scene = {
  type: SceneType.INFORMATION,
  title: "Office",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2uCzt?ver=eb50&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
  },
};

export { dummyScene1 };
