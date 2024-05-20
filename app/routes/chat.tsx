import {
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/16/solid";
import { conversation } from "~/components/chat/data";
import { LogoColorful, LogoMonochrome } from "~/components/logo";
import { PageTitle } from "~/components/page-title";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export default function Chat() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Chat</PageTitle>
          <p className="text-muted-foreground text-sm">
            Challenge the bot with your questions
          </p>
        </div>
        <div className="flex gap-2">
          {/* <Button>
            <ChatBubbleBottomCenterTextIcon className="mr-2 h-4 w-4" />
            New chat
          </Button> */}
        </div>
      </header>
      <main className="flex flex-1 flex-col space-y-4">
        <section className="h-[calc(100svh-250px)] space-y-4 overflow-y-auto">
          {conversation.map((m) => (
            <div
              key={m.ts}
              className={cn(
                "flex gap-4",
                m.from === "human" ? "justify-end" : "justify-start",
              )}
            >
              {m.from === "bot" ? (
                // <Avatar className="p-1">
                //   <AvatarImage
                //     src="logo-monochrome.png"
                //     className="text-red-100"
                //   />
                //   <AvatarFallback>WB</AvatarFallback>
                // </Avatar>
                <LogoColorful className="size-10" />
              ) : null}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  {m.from === "bot" ? (
                    <p className="font-medium">{"Wikibot" || m.from}</p>
                  ) : null}
                  <time
                    dateTime={new Date(m.ts).toLocaleString()}
                    className="text-muted-foreground ml-auto text-xs"
                  >
                    {new Date(m.ts).toLocaleString(["en-us"], {
                      timeStyle: "medium",
                    })}
                  </time>
                </div>
                <p
                  className={cn("max-w-[500px] rounded-xl px-6 py-4", {
                    "bg-brand-blue text-primary-foreground": m.from === "bot",
                    "bg-secondary": m.from === "human",
                  })}
                >
                  {m.message}
                </p>
              </div>
            </div>
          ))}
        </section>
        <footer className="">
          <div className="relative w-full">
            <PaperAirplaneIcon className="text-muted-foreground hover:text-foreground absolute right-2 top-2.5 h-4 w-4" />
            <Input placeholder="Ask me anything..." className="pr-8" />
          </div>
        </footer>
      </main>
    </section>
  );
}
