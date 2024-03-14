import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function loader() {
  return json({
    personas: [
      {
        name: "Danswer",
        description:
          "Assistant with access to documents from your Connected Sources.",
        builtIn: "Yes",
        isVisible: true,
        delete: "-",
      },
      {
        name: "GPT",
        description:
          "Assistant with no access to documents. Chat with just the Language Model.",
        builtIn: "Yes",
        isVisible: true,
        delete: "-",
      },
      {
        name: "Paraphrase",
        description:
          "Assistant that is heavily constrained and only provides exact quotes from Connected Sources.",
        builtIn: "Yes",
        isVisible: true,
        delete: "-",
      },
      {
        name: "Math solver",
        description: "Elementary school math solver",
        builtIn: "No",
        isVisible: true,
        delete: {
          hoverBg: "hover",
          rounded: true,
          p1: true,
          cursorPointer: true,
        },
      },
    ],
  });
}

export default function Personas() {
  const { personas } = useLoaderData<typeof loader>();

  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Personas</PageTitle>
          <div className="text-muted-foreground text-sm">
            <p>
              Personas are a way to build custom search/question-answering
              experiences for different use cases.
            </p>
            <p>
              They allow you to customize:
              <ul>
                <li>
                  The prompt used by your LLM of choice to respond to the user
                  query
                </li>
                <li>The documents that are used as context</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>
            <ChatBubbleBottomCenterTextIcon className="mr-2 h-4 w-4" />
            Create persona
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col space-y-4">
        <section className="flex flex-1 flex-col gap-4">
          <header>
            <h2 className="font-medium">Existing personas</h2>
            <p className="text-muted-foreground text-sm">
              Personas will be displayed as options on the Chat / Search
              interfaces in the order they are displayed below. Personas marked
              as hidden will not be displayed.
            </p>
          </header>
          <div className="space-y-4">
            <PersonaTable data={personas} />
          </div>
        </section>
      </main>
    </section>
  );
}

function PersonaTable({
  data,
}: {
  data: Array<{
    name: string;
    description: string;
    builtIn: string;
    isVisible: boolean;
  }>;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Built-In</TableHead>
          <TableHead>Is Visible</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <tbody>
        {data.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.description}</TableCell>
            <TableCell>{p.builtIn}</TableCell>
            <TableCell>{p.isVisible.toString()}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
