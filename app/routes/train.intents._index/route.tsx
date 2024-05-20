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
    <main className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-5 py-2 bg-gray-50 border-b">
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
      <section className="px-5 py-4">
        <IntentsTable />
      </section>
    </main>
  );
}
