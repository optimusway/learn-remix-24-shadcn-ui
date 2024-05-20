import { type MetaFunction } from "@remix-run/node";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { PageTitle } from "~/components/page-title";
import { AddWebsiteForm } from "./add-website-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { AddDocForm } from "./add-doc-form";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Skillbox › Sources › Add source",
    },
  ];
};

export default function NewSource() {
  return (
    <main className="w-full space-y-4 px-8 py-5">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Add source</PageTitle>
          <p className="text-muted-foreground text-sm">
            Use the form below to add different aspects of knowledge to your
            bot.
          </p>
        </div>
      </header>
      <section>
        <Tabs defaultValue="website">
          <TabsList>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="doc">Document</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="website" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <AddWebsiteForm />
              <div className="overflow-clip rounded-md border shadow-xl">
                <img
                  src="https://wikibot.pro/images/poster-en.webp"
                  alt="cover"
                />
                <WebsiteDetails />
                {/* <dl className="flex flex-col gap-4 px-6 py-4">
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground">Title</dt>
                    <dd className="">AI-enabled customer support</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium">Grade</dt>
                    <dd className="">A</dd>
                  </div>
                </dl> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="doc" className="mt-4">
            <AddDocForm />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

function WebsiteDetails() {
  return (
    <div className="px-8 py-4">
      <div className="px-4 sm:px-0">
        <h3 className="font-semibold leading-7">Website details</h3>
        <p className="text-muted-foreground max-w-2xl text-sm leading-6">
          This is how we see your site.
        </p>
      </div>
      <div className="mt-4 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {[
            ["Title", "AI-enabled customer support"],
            ["Data grade", "B+"],
            ["Crawling time", "22min"],
            ["Description", "Level up your support game with AI tools"],
          ].map(([term, desc]) => (
            <div
              key={term}
              className="px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {term}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {desc}
              </dd>
            </div>
          ))}

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Data grade
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              B+
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Crawling time
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              56 min
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Level up your support game with AI tools
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="void 0"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
