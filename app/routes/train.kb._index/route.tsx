import { type MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@heroicons/react/16/solid";
import { DataSourcesTable } from "~/components/kb/data-table";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { PageHeader } from "~/components/page-header";
import { PageContent } from "~/components/page-content";
import { Page } from "~/components/page";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Sources",
    },
  ];
};

export default function Sources() {
  return (
    <Page>
      <PageHeader
        title="Data sources"
        desc="Feed the knowledge from various data sources"
        rightElement={
          <Link to="add-source">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add source
            </Button>
          </Link>
        }
      />
      <PageContent>
        <DataSourcesTable />
      </PageContent>
    </Page>
  );
}
