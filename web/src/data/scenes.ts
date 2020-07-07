import { Scene, SceneType, ResourceType } from "../types/scene";

const dummyScene1: Scene = {
  type: SceneType.INFORMATION,
  title: "Introduction",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2uCzt?ver=eb50&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
  },
};

const dummyScene2: Scene = {
  type: SceneType.QUESTION,
  title: "Question 1",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2uCzt?ver=eb50&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
  },
  question: "How should you deal with an angry customer?",
  options: [
    { id: 0, option: "fight them" },
    { id: 1, option: "bring the problem to your manager" },
    { id: 2, option: "patiently talk to them, and understand the problem" },
    { id: 3, option: "leave them alone" },
  ],
  correctOption: 2,
};

export { dummyScene1, dummyScene2 };
