import React, { useContext } from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/core";
import { MdImage, MdVideocam } from "react-icons/md";
import { RouteComponentProps } from "react-router-dom";

import { Scene, ResourceType } from "../../types/scene";
import { DataContext } from "../../context";
import { BigButton } from "../reusables/BigButton";

interface CreateInformationProps extends RouteComponentProps<{ id: string }> {
  scene: Scene;
}

export const CreateInformation: React.FC<CreateInformationProps> = ({
  match: {
    params: { id: storyId },
  },
  scene: currentScene,
}) => {
  const { resource } = currentScene;
  const {
    storyHandler: { stories, setStories },
  } = useContext(DataContext);

  const addNewResource = (
    resourceType: ResourceType,
    url: string | ArrayBuffer | null
  ) => {
    const currentStory = stories.find(({ id }) => id === Number(storyId));
    if (currentStory) {
      setStories([
        ...stories.filter(({ id }) => id !== currentStory.id),
        {
          ...currentStory,
          scenes: [
            ...currentStory.scenes.filter(scene => scene !== currentScene),
            {
              ...currentScene,
              resource: {
                type: resourceType,
                url: url && typeof url === "string" ? url : "",
              },
            },
          ],
        },
      ]);
    }
  };

  const handleOnImageInputChange = (files: FileList | null): void => {
    if (!files || files.length < 1) return;
    const imageFile: File = files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event: Event) =>
      addNewResource(ResourceType.IMAGE, fileReader.result);
  };

  if (resource) {
    const { type: resourceType, url: resourceUrl } = resource;
    return (
      <Flex direction="column" align="center" justify="center">
        {resourceType === ResourceType.IMAGE && (
          <Box size="80%">
            <Image
              src={resourceUrl}
              style={{ maxWidth: 400, maxHeight: 800 }}
            />
          </Box>
        )}
        {resourceType === ResourceType.VIDEO && (
          <>Create video frame or something later</>
        )}
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center">
      <Text fontSize="3xl">Looks pretty empty...</Text>
      <Text fontSize="3xl">Insert</Text>
      <Flex mt={3}>
        <label>
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="inputImage"
            type="file"
            onChange={({ target: { files } }) =>
              handleOnImageInputChange(files)
            }
          />
          <BigButton text="Image" onClick={() => {}} icon={MdImage} />
        </label>
        <BigButton text="Video" onClick={() => {}} icon={MdVideocam} />
      </Flex>
    </Flex>
  );
};
