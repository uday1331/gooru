import { ResourceType, Scene, SceneType } from "../types/scene";

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
  type: SceneType.INFORMATION,
  title: "Customer management",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://startupnation.com/wp-content/uploads/2018/01/Screen-Shot-2018-02-08-at-12.23.25-PM.png",
  },
};

const dummyScene3: Scene = {
  type: SceneType.QUESTION,
  title: "Question 1: Angry customers",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://www.achrnews.com/ext/resources/2016/02-2016/02-15-2016/FS-iStock_000062387494_Full.jpg",
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

const dummyScene4: Scene = {
  type: SceneType.INFORMATION,
  title: "Dealing with lazy colleagues",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://www.projectmanager.com/wp-content/uploads/2018/06/lazy-coworker-v3-600x464.png",
  },
};

const dummyScene5: Scene = {
  type: SceneType.QUESTION,
  title: "Question 2: Lazy colleagues",
  resource: {
    type: ResourceType.IMAGE,
    url:
      "https://www.washingtonpost.com/resizer/lDL3l6TDVhQFbjlwvpDLCg8i5NE=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QRTNS4AHTQI6TCKCB32EFZMQSQ.jpg",
  },
  question: "How should you deal with a lazy colleague?",
  options: [
    { id: 0, option: "Let them be" },
    { id: 1, option: "Talk to their manager" },
    { id: 2, option: "Organise office activities, and get them to join" },
    { id: 3, option: "Gossip behind them" },
  ],
  correctOption: 2,
};

export { dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene5 };
