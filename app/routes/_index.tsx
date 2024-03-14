import { CircleStackIcon, HomeIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  InboxStackIcon,
  AcademicCapIcon as AcademicCapIconOutline,
  CircleStackIcon as CircleStackIconOutline,
} from "@heroicons/react/24/outline";
import { CopyIcon } from "@radix-ui/react-icons";
import type { MetaFunction } from "@remix-run/node";
import { ComponentPropsWithoutRef } from "react";
import { PageTitle } from "~/components/page-title";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Overview",
    },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-5">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Overview</PageTitle>
        </div>
        <div className="flex gap-2"></div>
      </header>
      <main className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <GeneralCard />
          <div className="grid gap-4 md:grid-cols-2">
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
              title="Credits remain"
              value={1986}
              description="-21 since today"
              icon={CircleStackIconOutline}
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <DatasetCard
            datasources={[
              {
                name: "https://wikibot.pro",
                type: "Default",
                chunkCount: 210,
              },
              { name: "Wikibot API spec", type: "Custom", chunkCount: 5 },
              { name: "Custom data", type: "Custom", chunkCount: 12 },
            ]}
            icon={CircleStackIcon}
          />
          <IntegrationsCard
            icon={CircleStackIcon}
            integrations={["Telegram", "Usedesk"]}
          />
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
        <props.icon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-2xl font-bold">
          {typeof props.value === "number"
            ? Number(props.value).toLocaleString()
            : props.value}
        </div>
        <p className="text-muted-foreground text-xs">{props.description}</p>
      </CardContent>
    </Card>
  );
}

function GeneralCard(props: ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Skillbox LMS</CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span>4e124181-e59f-43b7-8fa2-a8dcca0e8315</span>
          <CopyIcon className="h-4 w-4" />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardRow label="Algo" desc="Current algorithm" value="WB_13" />
        <CardRow
          label="Plan"
          desc="Subscription status"
          value={<Badge variant="secondary">Free</Badge>}
        />
        <CardRow label="Owner" desc="Created by" value="optimusway" />
        <CardRow
          label="Created at"
          desc="Exact date and time"
          value={new Date().toLocaleString(["en-US"], {
            dateStyle: "short",
            timeStyle: "short",
          })}
        />
      </CardContent>
    </Card>
  );
}

function DatasetCard(
  props: ComponentPropsWithoutRef<typeof Card> & {
    icon: typeof HomeIcon;
    datasources: { name: string; type: string; chunkCount: number }[];
  },
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
              <p className="text-muted-foreground text-sm capitalize leading-snug">
                {d.type}
              </p>
            </div>
            <div className="flex flex-col items-end text-sm leading-none">
              <p className="font-medium">{d.chunkCount}</p>
              <span className="text-muted-foreground leading-snug">chunks</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function IntegrationsCard(
  props: ComponentPropsWithoutRef<typeof Card> & {
    icon: typeof HomeIcon;
    integrations: string[];
  },
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
              <p className="text-muted-foreground text-sm leading-snug">
                {`Answer ${i} user inquiries.`}
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CardRow(props: {
  label: string;
  desc: string;
  value: string | JSX.Element;
}) {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex flex-col space-y-1 text-sm leading-none">
        <p className="font-medium">{props.label}</p>
        <p className="text-muted-foreground text-sm leading-snug">
          {props.desc}
        </p>
      </div>
      {typeof props.value === "string" ? (
        <div className="text-sm">
          <p>{props.value}</p>
        </div>
      ) : (
        props.value
      )}
    </div>
  );
}
