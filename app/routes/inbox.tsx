import {
  AtSymbolIcon,
  BellAlertIcon,
  EnvelopeIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/16/solid";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { conversation } from "~/components/chat/data";
import { LogoMonochrome } from "~/components/logo";
import { Page } from "~/components/page";
import { PageContent } from "~/components/page-content";
import { PageHeader } from "~/components/page-header";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

const USERS = [
  "Roman C.",
  "Alex S.",
  "Visior2123",
  "Visitor2265",
  "Visitor2477",
  "Visitor2728",
];

export default function Inbox() {
  return (
    <Page className="min-h-screen">
      <PageHeader
        title="Инбокс"
        desc="Общайтесь с вашими клиентами из единого окна"
        rightElement={null}
      />
      <PageContent className="p-0 text-sm ">
        <div className="grid grid-cols-12 min-h-screen">
          <nav className="col-span-2 px-4 py-2 border-r">
            <div className="px-2 py-1 font-medium">
              <a href="/inbox" className="flex items-center gap-2">
                <InboxArrowDownIcon className="size-4" /> Все
              </a>
            </div>
            <div className="px-2 py-1 font-medium relative">
              <div className="absolute inset-0 bg-muted rounded-lg"></div>
              <a href="/inbox" className="isolate flex items-center gap-2">
                <EnvelopeIcon className="size-4" /> Непрочитанные
              </a>
            </div>
            <div className="px-2 py-1 font-medium relative">
              <a href="/inbox" className="isolate flex items-center gap-2">
                <BellAlertIcon className="size-4" /> Важные
              </a>
            </div>
            <div className="px-2 py-1 font-medium">
              <a href="/inbox" className="flex items-center gap-2">
                <AtSymbolIcon className="size-4" /> Бот
              </a>
            </div>
          </nav>
          <section className="col-span-3 px-4 py-2 border-r">
            {USERS.map((u) => (
              <p key={u} className="py-2 px-2 relative">
                {u === "Alex S." ? (
                  <div className="absolute inset-0 bg-muted rounded-lg"></div>
                ) : null}
                <span className="isolate">{u}</span>
              </p>
            ))}
          </section>
          <section className="col-span-7 py-2 px-4">
            <Chat />
          </section>
        </div>
      </PageContent>
    </Page>
  );
}

function Chat() {
  return (
    <>
      {conversation.map((m, idx) => (
        <div
          key={m.ts}
          className={cn(
            "flex gap-2",
            m.from === "human" ? "justify-end pt-2" : "justify-start pt-10",
          )}
        >
          <div
            className={cn(
              "flex flex-col items-start relative group",
              m.from === "bot"
                ? idx === conversation.length - 1
                  ? "pb-8"
                  : "pb-9"
                : "",
            )}
          >
            <div className="space-y-2">
              {m.from === "bot" ? (
                <div className="flex gap-1 items-center">
                  <Avatar className="size-6">
                    <AvatarImage src={"undefined"} />
                    <AvatarFallback className="bg-transparent ">
                      <LogoMonochrome className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                  <Badge variant={"success"}>Success</Badge>
                  <Badge variant={"outline"}>
                    {idx % 3 === 0 ? "Level 1" : "Knowledge"}
                  </Badge>
                </div>
              ) : null}
              <p
                className={cn("", {
                  "bg-none text-primary p-0 w-full": m.from === "bot",
                  "bg-secondary rounded-xl px-6 py-4 max-w-md":
                    m.from === "human",
                })}
              >
                {m.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// function ChatMessage({mes}) {
//   return <div
//     key={m.ts}
//     className={cn(
//       "flex gap-2",
//       m.from === "human"
//         ? "justify-end pt-2"
//         : "justify-start pt-10",
//     )}
//   >
//     <div
//       className={cn(
//         "flex flex-col items-start relative group",
//         m.from === "bot"
//           ? idx === conversation.length - 1
//             ? "pb-8"
//             : "pb-9"
//           : "",
//       )}
//     >
//       <div className="space-y-2">
//         {m.from === "bot" ? (
//           <div className="flex gap-1 items-center">
//             <Avatar className="size-6">
//               <AvatarImage src={"undefined"} />
//               <AvatarFallback className="bg-transparent ">
//                 <LogoMonochrome className="size-5" />
//               </AvatarFallback>
//             </Avatar>
//             <Badge variant={"success"}>Success</Badge>
//             <Badge variant={"outline"}>
//               {idx % 3 === 0 ? "Level 1" : "Knowledge"}
//             </Badge>
//           </div>
//         ) : null}
//         <p
//           className={cn("", {
//             "bg-none text-primary p-0 w-full": m.from === "bot",
//             "bg-secondary rounded-xl px-6 py-4 max-w-md":
//               m.from === "human",
//           })}
//         >
//           {m.message}
//         </p>
//       </div>
//       {m.from === "bot" ? (
//         <Collapsible>
//           <div
//             className={cn(
//               "absolute bottom-0",
//               idx === conversation.length - 1
//                 ? "scale-100"
//                 : "scale-0 group-hover:scale-100 border rounded-md p-1",
//             )}
//           >
//             <div className="flex gap-0 items-center h-6">
//               <IconButton iconType={ClipboardDocumentIcon} />
//               <IconButton iconType={HandThumbUpIcon} />
//               <IconButton iconType={HandThumbDownIcon} />
//               <Separator
//                 orientation="vertical"
//                 className="h-4 mx-1"
//               />
//               <Button
//                 variant={"ghost"}
//                 size={"sm"}
//                 className="px-2 h-6"
//               >
//                 {/* <IconButton iconType={AcademicCapIcon} /> */}
//                 Train
//               </Button>
//               <Separator
//                 orientation="vertical"
//                 className="h-5 mx-1"
//               />
//               <CollapsibleTrigger asChild>
//                 <Button
//                   variant={"ghost"}
//                   size={"sm"}
//                   className="px-2 h-6"
//                 >
//                   Explain
//                 </Button>
//               </CollapsibleTrigger>
//             </div>
//           </div>
//           <CollapsibleContent className="p-2 ml-2 mt-1 ">
//             <div className="flex gap-4">
//               <Separator
//                 orientation="vertical"
//                 className="h-auto"
//               />
//               <div className="space-y-3 text-sm">
//                 <Step>
//                   Search <Badge variant={"outline"}>Level 1</Badge>{" "}
//                   entry
//                 </Step>
//                 <Step>
//                   Found <Badge variant={"secondary"}>Cities</Badge>
//                 </Step>
//                 <Step>
//                   <p>Detect action</p>
//                 </Step>
//                 <Step>
//                   <p>
//                     Found <Badge variant={"outline"}>Answer</Badge>{" "}
//                     action
//                   </p>
//                 </Step>
//                 <Step>
//                   <p>
//                     Give the{" "}
//                     <Button variant={"link"} className="p-0 h-auto">
//                       answer
//                     </Button>
//                   </p>
//                 </Step>
//               </div>
//             </div>
//           </CollapsibleContent>
//         </Collapsible>
//       ) : null}
//     </div>
//   </div>
// }
