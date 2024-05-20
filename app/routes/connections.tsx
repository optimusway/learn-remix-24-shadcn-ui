import { PlusIcon } from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";

export default function Connections() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Connections</PageTitle>
          <p className="text-muted-foreground text-sm">
            Excel your game with connections to most powerful tools
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add connection
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col space-y-4"></main>
    </section>
  );
}
