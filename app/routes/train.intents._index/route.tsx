import { type MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { IntentsTable } from "~/components/questions/data-table";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Training › Intents",
    },
  ];
};

export default function Training() {
  return (
    <main className="flex flex-1 flex-col space-y-4 px-8 py-5">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Intents</PageTitle>
          <p className="text-muted-foreground text-sm">
            Add intents to resolve most common user inqueries
          </p>
        </div>
        <div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add intent
          </Button>
        </div>
      </header>
      <section>
        <IntentsTable />
      </section>
    </main>
  );
}
