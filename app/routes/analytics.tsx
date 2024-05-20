import { TableCellsIcon } from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";

export default function Analytics() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Analytics</PageTitle>
          <p className="text-muted-foreground text-sm">
            Get to know your bot performance
          </p>
        </div>
        <div className="flex gap-2">
          {/* <Button>
            <TableCellsIcon className="mr-2 h-4 w-4" />
            Export to CSV
          </Button> */}
        </div>
      </header>
      <main className="flex flex-1 flex-col space-y-4"></main>
    </section>
  );
}
