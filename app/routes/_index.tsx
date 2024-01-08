import {
  AcademicCapIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  PauseIcon,
  PlusIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/16/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  InboxStackIcon,
  AcademicCapIcon as AcademicCapIconOutline,
  CircleStackIcon as CircleStackIconOutline,
} from "@heroicons/react/24/outline";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { ComponentPropsWithoutRef, ReactNode, SVGProps, useState } from "react";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
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
    <div className="bg-background flex flex-col min-h-screen">
      <header className="px-3 py-4 flex items-center border-b">
        <div className="flex items-center">
          <div className="px-2">
            <Logo className="h-5" />
          </div>
          <div>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
          <div className="px-2">
            <BotSwitcher />
          </div>
        </div>
      </header>
      <main className="flex flex-1">
        <div className="border-r">
          <nav className="px-3 py-4 flex flex-col gap-1 w-56">
            <NavItem to="/" icon={HomeIcon}>
              Dashboard
            </NavItem>
            <NavItem to="/chat" icon={ChatBubbleOvalLeftEllipsisIcon}>
              Chat
            </NavItem>
            <NavItem to="/dataset" icon={CircleStackIcon}>
              Dataset
            </NavItem>
            <NavItem to="/dataset" icon={AcademicCapIcon}>
              L1
            </NavItem>
            <NavItem to="/dataset" icon={PresentationChartBarIcon}>
              Reports
            </NavItem>
            <NavItem to="/settings" icon={Cog6ToothIcon}>
              Settings
            </NavItem>
          </nav>
        </div>
        <section className="px-8 py-6 flex flex-col flex-1 space-y-4">
          <header className="flex items-center justify-between">
            <div>
              <PageTitle>Overview</PageTitle>
            </div>
            <div className="flex gap-2">
              <Button>
                <PlusIcon className="h-4 w-4 mr-1" />
                New bot
              </Button>
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
      </main>
    </div>
  );
}

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 749 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M136.395 113.659c12.553 0 22.73-10.176 22.73-22.73 0-12.553-10.177-22.73-22.73-22.73s-22.73 10.177-22.73 22.73c0 12.554 10.177 22.73 22.73 22.73ZM79.57 113.659c12.554 0 22.73-10.176 22.73-22.73 0-12.553-10.176-22.73-22.73-22.73-12.553 0-22.73 10.177-22.73 22.73 0 12.554 10.177 22.73 22.73 22.73Z"
        fill="currentColor"
      />
      <path
        d="M143.567.01H72.409A15.569 15.569 0 0 0 56.841 15.58v21.515a31.137 31.137 0 0 1-31.137 31.137h-3.373a22.73 22.73 0 1 0 22.636 27.431c.114-.508.208-1.038.28-1.546a24.15 24.15 0 0 0 .208-2.294v-3.84a31.137 31.137 0 0 1 30.96-31.137h67.152a15.57 15.57 0 0 0 15.568-15.568V15.579A15.57 15.57 0 0 0 143.567.01Z"
        fill="currentColor"
      />
      <path
        d="M128.279 36.523a8.116 8.116 0 1 0 0-16.233 8.116 8.116 0 0 0 0 16.233ZM107.988 36.523a8.116 8.116 0 1 0 0-16.233 8.116 8.116 0 0 0 0 16.233ZM95.803 28.407v.311c0 .28 0 .55-.072.82-.073.27-.063.374-.104.55a8.116 8.116 0 1 1-8.085-9.797h.29a8.127 8.127 0 0 1 7.971 7.908v.208Z"
        fill="#fff"
      />
      <path
        d="m293.262 85.118-12.517-43.851a4.646 4.646 0 0 0-4.452-3.363h-16.472a4.62 4.62 0 0 0-4.463 3.404l-12.133 43.81a2.077 2.077 0 0 1-3.348 1.194 2.077 2.077 0 0 1-.72-1.194l-11.51-43.716a4.63 4.63 0 0 0-4.474-3.457h-13.939a4.644 4.644 0 0 0-3.701 1.843 4.641 4.641 0 0 0-.762 4.063l18.89 66.508a4.65 4.65 0 0 0 4.463 3.373h23.986a4.621 4.621 0 0 0 2.834-.967 4.62 4.62 0 0 0 1.649-2.499l11.417-43.374 12.662 43.498a4.638 4.638 0 0 0 4.453 3.342h23.986a4.625 4.625 0 0 0 4.473-3.435l17.821-66.519a4.623 4.623 0 0 0-2.424-5.356 4.626 4.626 0 0 0-2.05-.477h-13.99a4.653 4.653 0 0 0-4.495 3.498L297.32 85.107a2.079 2.079 0 0 1-2.025 1.643 2.077 2.077 0 0 1-2.033-1.632ZM355.816 1.972A13.43 13.43 0 0 0 342.23 15.58a12.858 12.858 0 0 0 3.933 9.549 13.929 13.929 0 0 0 19.253 0 12.855 12.855 0 0 0 3.892-9.55 13.426 13.426 0 0 0-8.293-12.585 13.428 13.428 0 0 0-5.199-1.02ZM362.603 37.883h-13.627a4.629 4.629 0 0 0-4.629 4.63v66.517a4.63 4.63 0 0 0 4.629 4.63h13.627a4.63 4.63 0 0 0 4.629-4.63V42.512a4.629 4.629 0 0 0-4.629-4.629ZM429.506 39.575l-19.803 24.069a2.073 2.073 0 0 1-1.63.768h-1.037a2.075 2.075 0 0 1-2.076-2.076V4.629A4.64 4.64 0 0 0 400.32 0h-13.492a4.64 4.64 0 0 0-4.64 4.629v104.36a4.64 4.64 0 0 0 4.64 4.639h13.492a4.64 4.64 0 0 0 4.64-4.639V89.705a2.077 2.077 0 0 1 2.076-2.076h1.037a2.126 2.126 0 0 1 1.62.758l19.813 23.622a4.648 4.648 0 0 0 3.55 1.661h17.208a4.632 4.632 0 0 0 4.595-5.235 4.624 4.624 0 0 0-1.046-2.373l-24.182-28.936a2.074 2.074 0 0 1 0-2.699l24.182-28.936a4.623 4.623 0 0 0 .652-4.936 4.632 4.632 0 0 0-4.201-2.672h-17.146a4.64 4.64 0 0 0-3.612 1.692ZM488.842 37.883h-13.627a4.629 4.629 0 0 0-4.629 4.63v66.517a4.63 4.63 0 0 0 4.629 4.63h13.627a4.63 4.63 0 0 0 4.629-4.63V42.512a4.629 4.629 0 0 0-4.629-4.629ZM482.034 1.972a13.495 13.495 0 0 0-12.565 8.392 13.492 13.492 0 0 0-1 5.215 12.817 12.817 0 0 0 3.943 9.549 13.92 13.92 0 0 0 19.243 0 12.878 12.878 0 0 0 3.944-9.55 13.492 13.492 0 0 0-13.565-13.564v-.042ZM673.971 43.602c-8.082-7.611-18.032-11.417-29.85-11.417-11.818 0-21.775 3.806-29.871 11.417-8.081 7.68-12.122 17.433-12.122 29.258s4.041 21.588 12.122 29.289c8.082 7.681 18.036 11.521 29.861 11.521s21.775-3.84 29.849-11.521c8.082-7.68 12.123-17.43 12.123-29.248 0-11.818-4.037-21.584-12.112-29.3Zm-17.074 42.242a18.68 18.68 0 0 1-25.563 0 18.682 18.682 0 0 1 0-25.947 18.681 18.681 0 0 1 25.563 0 18.683 18.683 0 0 1 0 25.947ZM580.312 43.654c-8.082-7.68-18.035-11.52-29.861-11.52a44.774 44.774 0 0 0-16.336 2.885 2.077 2.077 0 0 1-2.906-1.952V4.63a4.634 4.634 0 0 0-1.359-3.277A4.63 4.63 0 0 0 526.57 0h-13.493a4.63 4.63 0 0 0-4.639 4.629v68.262c0 11.832 4.044 21.585 12.133 29.258a41.341 41.341 0 0 0 10.648 7.359 43.672 43.672 0 0 0 19.243 4.151c11.832 0 21.785-3.836 29.86-11.51 8.075-7.673 12.119-17.426 12.133-29.258 0-11.818-4.048-21.564-12.143-29.237Zm-17.074 42.231a18.68 18.68 0 0 1-25.563 0 18.682 18.682 0 0 1 0-25.947 18.682 18.682 0 0 1 25.563 0 18.683 18.683 0 0 1 0 25.947ZM727.775 81.526c-.02 1.261.184 2.516.602 3.706a8.418 8.418 0 0 0 1.972 3.113c.511.508 1.091.941 1.723 1.287.217.142.446.263.685.364h.083c1.467.619 3.048.92 4.64.882h6.881A4.641 4.641 0 0 1 749 95.507v13.492a4.64 4.64 0 0 1-4.639 4.629h-10.379c-8.995 0-16.094-2.248-21.298-6.746-5.203-4.497-7.805-10.687-7.805-18.568V61.07a2.073 2.073 0 0 0-2.075-2.076h-6.29a4.63 4.63 0 0 1-4.629-4.64v-11.79a4.63 4.63 0 0 1 4.629-4.629h6.29a2.074 2.074 0 0 0 2.075-2.076V20.903a4.627 4.627 0 0 1 3.706-4.536l13.617-2.791a4.627 4.627 0 0 1 5.563 4.535v17.644a2.077 2.077 0 0 0 2.076 2.076h14.478a4.64 4.64 0 0 1 4.64 4.63v11.8a4.64 4.64 0 0 1-4.64 4.64h-14.478a2.075 2.075 0 0 0-2.076 2.075l.01 20.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NavItem(props: {
  icon: typeof HomeIcon;
  to: string;
  children: ReactNode;
}) {
  return (
    <NavLink to={props.to}>
      {({ isActive }) => (
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className="justify-start w-full cursor-default group"
        >
          <props.icon
            className={cn(
              "h-4 w-4 mr-2 group-hover:text-foreground",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          />
          {props.children}
        </Button>
      )}
    </NavLink>
  );
}

function PageTitle({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="scroll-m-20 text-2xl font-semibold" {...props}>
      {children}
    </h1>
  );
}

const bots = [
  {
    value: "chatru",
    label: "Chat RU",
  },
  {
    value: "mailru",
    label: "Mail RU",
  },
  {
    value: "chaten",
    label: "Chat EN",
  },
  {
    value: "mailen",
    label: "Mail EN",
  },
];

function BotSwitcher() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(bots[0].value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? bots.find((framework) => framework.value === value)?.label
            : "Select bot..."}
          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search bot..." className="h-9" />
          <CommandEmpty>No bot found.</CommandEmpty>
          <CommandGroup>
            {bots.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
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
