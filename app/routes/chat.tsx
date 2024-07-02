import {
  ArrowUpCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/16/solid";
import {
  AcademicCapIcon,
  ClipboardDocumentIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { conversation } from "~/components/chat/data";
import { LogoMonochrome } from "~/components/logo";
import { Page } from "~/components/page";
import { PageContent } from "~/components/page-content";
import { PageHeader } from "~/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const USERS = [
  "Тред#1",
  "Тред#2",
  "Тред#3",
  "Тред#4",
  "Тред#5",
  "Тред#6",
  "Тред#7",
  "Тред#8",
  "Тред#9",
  "Тред#10",
  "Тред#11",
  "Тред#12",
  "Тред#1>3",
  "Тред#14",
];

export default function Chat() {
  return (
    <Page>
      <PageHeader
        title="Chat"
        desc="Challenge the bot with the real user inquiries"
        rightElement={
          <Button>
            <ChatBubbleBottomCenterTextIcon className="mr-2 h-4 w-4" />
            Новый чат
          </Button>
        }
      />
      {/*  */}
      <PageContent className="flex flex-col gap-0 overflow-hidden p-0">
        <div className="grid grid-cols-10 overflow-hidden h-[calc(100vh-84px)]">
          <div className="col-span-2 px-4 py-2 rounded-lg border-r">
            {USERS.map((u) => (
              <p key={u} className="py-2 px-2 text-sm relative">
                {u === "MysticCoder" ? (
                  <div className="absolute inset-0 bg-muted rounded-lg"></div>
                ) : null}
                <span className="isolate">{u}</span>
              </p>
            ))}
          </div>
          <section className="col-span-5 space-y-0 overflow-y-auto px-4 py-2 pb-16 text-sm leading-relaxed">
            {conversation.map((m, idx) => (
              <div
                key={m.ts}
                className={cn(
                  "flex gap-2",
                  m.from === "human"
                    ? "justify-end pt-2"
                    : "justify-start pt-10",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col items-start relative group",
                    m.from === "bot"
                      ? idx === conversation.length - 1
                        ? "pb-8"
                        : "pb-9"
                      : "",
                  )}
                >
                  <div className="space-y-2">
                    {m.from === "bot" ? (
                      <div className="flex gap-1 items-center">
                        <Avatar className="size-6">
                          <AvatarImage src={"undefined"} />
                          <AvatarFallback className="bg-transparent ">
                            <LogoMonochrome className="size-5" />
                          </AvatarFallback>
                        </Avatar>
                        <Badge variant={"success"}>Success</Badge>
                        <Badge variant={"outline"}>
                          {idx % 3 === 0 ? "Level 1" : "Knowledge"}
                        </Badge>
                      </div>
                    ) : null}
                    <p
                      className={cn("", {
                        "bg-none text-primary p-0 w-full": m.from === "bot",
                        "bg-secondary rounded-xl px-6 py-4 max-w-md":
                          m.from === "human",
                      })}
                    >
                      {m.message}
                    </p>
                  </div>
                  {m.from === "bot" ? (
                    <Collapsible>
                      <div
                        className={cn(
                          "absolute bottom-0",
                          idx === conversation.length - 1
                            ? "scale-100"
                            : "scale-0 group-hover:scale-100 border rounded-md p-1",
                        )}
                      >
                        <div className="flex gap-0 items-center h-6">
                          <IconButton iconType={ClipboardDocumentIcon} />
                          <IconButton iconType={HandThumbUpIcon} />
                          <IconButton iconType={HandThumbDownIcon} />
                          <Separator
                            orientation="vertical"
                            className="h-4 mx-1"
                          />
                          <Button
                            variant={"ghost"}
                            size={"sm"}
                            className="px-2 h-6"
                          >
                            {/* <IconButton iconType={AcademicCapIcon} /> */}
                            Train
                          </Button>
                          <Separator
                            orientation="vertical"
                            className="h-5 mx-1"
                          />
                          <CollapsibleTrigger asChild>
                            <Button
                              variant={"ghost"}
                              size={"sm"}
                              className="px-2 h-6"
                            >
                              Explain
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </div>
                      <CollapsibleContent className="p-2 ml-2 mt-1 ">
                        <div className="flex gap-4">
                          <Separator
                            orientation="vertical"
                            className="h-auto"
                          />
                          <div className="space-y-3 text-sm">
                            <Step>
                              Search <Badge variant={"outline"}>Level 1</Badge>{" "}
                              entry
                            </Step>
                            <Step>
                              Found <Badge variant={"secondary"}>Cities</Badge>
                            </Step>
                            <Step>
                              <p>Detect action</p>
                            </Step>
                            <Step>
                              <p>
                                Found <Badge variant={"outline"}>Answer</Badge>{" "}
                                action
                              </p>
                            </Step>
                            <Step>
                              <p>
                                Give the{" "}
                                <Button variant={"link"} className="p-0 h-auto">
                                  answer
                                </Button>
                              </p>
                            </Step>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : null}
                </div>
              </div>
            ))}
          </section>
          <section className="col-span-3 p-1 pr-4 pt-4">
            <div className="rounded-lg p-4 h-full shadow ring-2 ring-secondary">
              Суфлёр
            </div>
          </section>
        </div>
        <footer className="mt-auto px-40 pb-4 pt-1">
          <div className="relative w-full">
            {/* <PaperAirplaneIcon className="text-muted-foreground hover:text-foreground absolute right-2 top-2 size-8" /> */}
            <ArrowUpCircleIcon className="text-foreground absolute right-2 top-2 size-8" />
            <Input
              placeholder="Ask me anything..."
              className="pr-8 h-12 py-2 pl-6"
            />
          </div>
        </footer>
      </PageContent>
    </Page>
  );
}

function IconButton({
  iconType: IconType,
}: {
  iconType: typeof AcademicCapIcon;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:text-foreground px-2 h-6"
    >
      <IconType className="h-4 w-4" />
    </Button>
  );
}

function Step({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2">
      {/* <div className="size-4 border-b -translate-y-1/3" /> */}
      <p>{children}</p>
    </div>
  );
}
