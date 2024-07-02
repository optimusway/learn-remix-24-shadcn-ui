import { type MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@heroicons/react/16/solid";
import { PageTitle } from "~/components/page-title";
import { IntentsTable } from "~/components/questions/data-table";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "~/components/ui/sheet";
import { PageHeader } from "~/components/page-header";
import { PageContent } from "~/components/page-content";
import { Page } from "~/components/page";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox - Training - Intents",
    },
  ];
};

export default function Training() {
  return (
    <Page>
      <PageHeader
        title="Level 1"
        desc="Add intents to resolve most common user inqueries"
        rightElement={
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add intent
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Generate an intent</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will add an intent and the
                  corresponding answer.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        }
      />
      <PageContent>
        <IntentsTable />
      </PageContent>
    </Page>
  );
}
