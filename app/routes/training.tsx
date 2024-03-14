import { type MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@heroicons/react/16/solid";
import { DataSourcesTable } from "~/components/kb/data-table";
import { PageTitle } from "~/components/page-title";
import { QuestionsTable } from "~/components/questions/data-table";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Training",
    },
  ];
};

export default function Training() {
  return (
    <main className="flex flex-1 flex-col space-y-4 px-8 py-5">
      <Tabs defaultValue="qa">
        <TabsList>
          <TabsTrigger value="qa">Question-answer</TabsTrigger>
          <TabsTrigger value="kb">Knowledge base</TabsTrigger>
          <TabsTrigger value="scenario">Scenario</TabsTrigger>
        </TabsList>
        <TabsContent value="qa">
          <header className="my-4 flex items-center justify-between">
            <div>
              <PageTitle>Questions</PageTitle>
              <p className="text-muted-foreground text-sm">
                Set questions and answers to resolve common queries based on the
                user intent
              </p>
            </div>
            <div>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add question
              </Button>
            </div>
          </header>
          <section>
            <QuestionsTable />
          </section>
        </TabsContent>
        <TabsContent value="kb">
          <header className="my-4 flex items-center justify-between">
            <div>
              <PageTitle>Knowledge base</PageTitle>
              <p className="text-muted-foreground text-sm">
                Add various data sources as a general knowledge for the bot
              </p>
            </div>
            <div>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add source
              </Button>
            </div>
          </header>
          <section>
            <DataSourcesTable />
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
}
