import {
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const messages = Array.from({ length: 99 }, (_, idx) => "Chat message " + idx);

export default function Chat() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Chat</PageTitle>
        </div>
        <div className="flex gap-2">
          <Button>
            <ChatBubbleBottomCenterTextIcon className="mr-2 h-4 w-4" />
            New chat
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col space-y-4">
        <section className="flex flex-1">
          <div className="h-[calc(100svh-250px)] w-full space-y-4 overflow-y-auto">
            {messages.map((m, idx) => (
              <div
                key={m}
                className={cn(
                  "flex w-full",
                  (idx + 1) % 2 === 0 ? "justify-end" : "justify-start",
                )}
              >
                <p className="bg-accent w-5/12 rounded-xl px-6 py-4">{m}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="relative flex items-center py-2">
          <div className="flex flex-1">
            <input
              type="text"
              className="text-background w-full rounded px-3 py-3"
            />
          </div>
          <div className="absolute right-2">
            <Button variant={"outline"} size={"icon"}>
              <PaperAirplaneIcon className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </main>
    </section>
  );
}
