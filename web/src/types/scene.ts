export enum SceneType {
  QUESTION = "question",
  INFORMATION = "information",
}

export enum ResourceType {
  VIDEO = "video",
  IMAGE = "image",
}

interface OptionType {
  id: number;
  option: string;
}

export interface Scene {
  type: SceneType;
  title: string;
  resource: {
    type: ResourceType;
    url: string;
  };
  question?: string;
  options?: OptionType[];
  correctOption?: number;
}
