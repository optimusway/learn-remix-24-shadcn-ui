import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PauseCircleIcon,
} from "@heroicons/react/16/solid";

export const dataSources = [
  {
    label: "Docs",
    href: "https://wikibot.pro",
    scraper: "default",
    documentCount: 32,
    status: "success",
  },
  {
    label: "Website",
    href: "https://wikibot.pro",
    scraper: "default",
    documentCount: 17,
    status: "success",
  },
  {
    label: "Wikibot API spec",
    href: "https://example.com",
    scraper: "default",
    documentCount: 5,
    status: "paused",
  },
  {
    label: "Custom data",
    href: "https://example.com",
    scraper: "notion",
    documentCount: 12,
    status: "failed",
  },
  {
    label: "Confluence KB",
    href: "https://confluence.example.com",
    scraper: "confluence",
    documentCount: 22,
    status: "success",
  },
];

export const scrapers = [
  { label: "Notion", value: "notion" },
  { label: "Confluence", value: "confluence" },
  { label: "Default", value: "default" },
];

export const statuses = [
  {
    label: "Success",
    value: "success",
    icon: CheckCircleIcon,
  },
  {
    value: "paused",
    label: "Paused",
    icon: PauseCircleIcon,
  },
  {
    value: "failed",
    label: "Failed",
    icon: ExclamationCircleIcon,
  },
];
