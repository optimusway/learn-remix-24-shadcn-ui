import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";

export default function Chat() {
  return (
    <section className="px-8 py-6 flex flex-col flex-1 space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Chat</PageTitle>
        </div>
        <div className="flex gap-2">
          <Button>
            <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-2" />
            New chat
          </Button>
        </div>
      </header>
      <main className="space-y-4"></main>
    </section>
  );
}
