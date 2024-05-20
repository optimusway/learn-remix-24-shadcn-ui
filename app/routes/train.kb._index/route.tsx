import { type MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@heroicons/react/16/solid";
import { DataSourcesTable } from "~/components/kb/data-table";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Sources",
    },
  ];
};

export default function Sources() {
  return (
    <main className="w-full space-y-4 px-8 py-5">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Knowledge base</PageTitle>
          <p className="text-muted-foreground text-sm">
            Add various data sources as a general knowledge for the bot
          </p>
        </div>
        <div>
          <Link to="add-source">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add source
            </Button>
          </Link>
        </div>
      </header>
      <section>
        <DataSourcesTable />
      </section>
    </main>
  );
}
