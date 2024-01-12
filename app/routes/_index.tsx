import {
  CircleStackIcon,
  HomeIcon,
  PauseIcon,
} from "@heroicons/react/16/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  InboxStackIcon,
  AcademicCapIcon as AcademicCapIconOutline,
  CircleStackIcon as CircleStackIconOutline,
} from "@heroicons/react/24/outline";
import type { MetaFunction } from "@remix-run/node";
import { ComponentPropsWithoutRef } from "react";
import { PageTitle } from "~/components/page-title";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard - Wikibot" },
    { name: "description", content: "Customer support assistant" },
  ];
};

export default function Index() {
  return (
    <section className="px-8 py-6 flex flex-col flex-1 space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Overview</PageTitle>
        </div>
      </header>
      <main className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total questions"
            value={93838}
            description="+20.1% from last month"
            icon={InboxStackIcon}
          />
          <StatCard
            title="Total answers"
            value={42350}
            description="+180.1% from last month"
            icon={ChatBubbleBottomCenterTextIcon}
          />
          <StatCard
            title="L1 answers"
            value={12234}
            description="+19% from last month"
            icon={AcademicCapIconOutline}
          />
          <StatCard
            title="Total pages"
            value={25732}
            description="+21 since last hour"
            icon={CircleStackIconOutline}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 items-start">
          <div className="grid gap-4 col-span-3">
            <DatasetCard
              datasources={[
                {
                  name: "https://wikibot.pro",
                  type: "website",
                  chunkCount: 210,
                },
                { name: "Wikibot API spec", type: "PDF", chunkCount: 5 },
                { name: "Custom answers", type: "Custom", chunkCount: 12 },
              ]}
              icon={CircleStackIcon}
            />
            <IntegrationsCard
              icon={CircleStackIcon}
              integrations={["Telegram", "Usedesk"]}
            />
          </div>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent questions</CardTitle>
              <CardDescription>
                There are 265 inquiries this day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentChats chats={mails.slice(0, 5)} />
            </CardContent>
          </Card>
        </div>
      </main>
    </section>
  );
}

function StatCard(props: {
  title: string;
  value: string | number;
  description: string;
  icon: typeof HomeIcon;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
        <props.icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-2xl font-bold">
          {typeof props.value === "number"
            ? Number(props.value).toLocaleString()
            : props.value}
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </CardContent>
    </Card>
  );
}

function IntegrationsCard(
  props: ComponentPropsWithoutRef<typeof Card> & {
    icon: typeof HomeIcon;
    integrations: string[];
  }
) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>
          You have {props.integrations.length} integrations enabled.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {props.integrations.map((i) => (
          <div key={i} className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1 text-sm leading-none">
              <p className="font-medium">{i}</p>
              <p className="text-sm text-muted-foreground leading-snug">
                {`Answer ${i} user inquiries.`}
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <PauseIcon className="mr-1 h-4 w-4" /> Pause all integrations
        </Button>
      </CardFooter>
    </Card>
  );
}

function DatasetCard(
  props: ComponentPropsWithoutRef<typeof Card> & {
    icon: typeof HomeIcon;
    datasources: { name: string; type: string; chunkCount: number }[];
  }
) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Dataset</CardTitle>
        <CardDescription>
          You have {props.datasources.length} datasources connected.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {props.datasources.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between space-x-2"
          >
            <div className="flex flex-col space-y-1 text-sm leading-none">
              <p className="font-medium">{d.name}</p>
              <p className="text-sm text-muted-foreground leading-snug capitalize">
                {d.type}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-medium">{d.chunkCount}</p>
              <span className="text-sm text-muted-foreground">chunks</span>
            </div>
          </div>
        ))}
      </CardContent>
      {/* <CardFooter>
        <Button variant={"ghost"} className="w-full">
          <DocumentMagnifyingGlassIcon className="mr-1 h-4 w-4" /> Explore
          dataset
        </Button>
      </CardFooter> */}
    </Card>
  );
}

const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    subject: "Weekend Plans",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: "2023-04-10T11:45:00",
    read: true,
    labels: ["personal"],
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2023-03-25T13:15:00",
    read: false,
    labels: ["work", "budget"],
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
    subject: "Important Announcement",
    text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: "2023-03-10T15:00:00",
    read: false,
    labels: ["meeting", "work", "important"],
  },
];

export type Mail = (typeof mails)[number];

function RecentChats(props: { chats: Mail[] }) {
  return (
    <div className="space-y-8">
      {props.chats.map((c) => (
        <div key={c.id} className="text-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <div className="font-semibold capitalize">{c.subject}</div>
              <div className={cn("ml-auto text-xs")}>
                {new Intl.RelativeTimeFormat("en", {
                  localeMatcher: "best fit",
                  numeric: "always",
                  style: "long",
                }).format(
                  Math.round(
                    (new Date(c.date).getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24 * 31)
                  ),
                  "months"
                )}
              </div>
            </div>
            <div className="line-clamp-2 text-sm text-muted-foreground">
              {c.text.substring(0, 300)}
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold capitalize">
                  <Badge variant={"outline"}>
                    {c.labels[0] === "work" ? "mail" : "chat"}
                  </Badge>
                </div>
                {!c.read ? (
                  <Badge variant="destructive" className="bg-destructive/50">
                    Operator
                  </Badge>
                ) : (
                  <Badge variant={"outline"}>L1</Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
