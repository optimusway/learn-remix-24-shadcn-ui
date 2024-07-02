import { PlusIcon } from "@heroicons/react/16/solid";
import { Link } from "@remix-run/react";
import { Page } from "~/components/page";
import { PageContent } from "~/components/page-content";
import { PageHeader } from "~/components/page-header";
import { Button } from "~/components/ui/button";

export default function Connections() {
  return (
    <Page>
      <PageHeader
        title="Connections"
        desc="Excel your automation with connections to most powerful tools"
        rightElement={
          <Link to="add-source">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add connection
            </Button>
          </Link>
        }
      />
      <PageContent></PageContent>
    </Page>
  );
}
