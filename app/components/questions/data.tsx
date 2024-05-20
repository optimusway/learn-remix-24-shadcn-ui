import { z } from "zod";
import {
  BeakerIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  UserPlusIcon,
  PauseCircleIcon,
} from "@heroicons/react/16/solid";

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircleIcon,
  },
  {
    value: "paused",
    label: "Paused",
    icon: PauseCircleIcon,
  },
];

export const types = [
  {
    label: "Answer",
    value: "answer",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    label: "Exclusion",
    value: "exclusion",
    icon: UserPlusIcon,
  },
  {
    label: "Scenario",
    value: "scenario",
    icon: BeakerIcon,
  },
];

export const questionSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  type: z.string(),
});

export type Question = z.infer<typeof questionSchema>;

export const intents = [
  {
    id: "Q-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "active",
    type: "answer",
  },
  {
    id: "Q-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "active",
    type: "answer",
  },
  {
    id: "Q-7839",
    title: "We need to bypass the neural TCP card!",
    status: "active",
    type: "scenario",
  },
  {
    id: "Q-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "paused",
    type: "exclusion",
  },
  {
    id: "Q-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "paused",
    type: "exclusion",
  },
  {
    id: "Q-1280",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "active",
    type: "answer",
  },
  {
    id: "Q-7262",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    status: "active",
    type: "answer",
  },
  {
    id: "Q-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "active",
    type: "exclusion",
  },
  {
    id: "Q-7184",
    title: "We need to program the back-end THX pixel!",
    status: "active",
    type: "answer",
  },
  {
    id: "Q-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "paused",
    type: "answer",
  },
];
