import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
} from "@remix-run/react";
import {
  CheckIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
  PresentationChartBarIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  PlusCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/16/solid";
import { ReactNode, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import "./globals.css";
import { LinksFunction } from "@remix-run/node";
import { LogoType } from "~/components/logo";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "favicon.svg" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "apple-touch-icon.png",
    },
  ];
};

export default function App() {
  return (
    <html lang="en" className="_dark antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-background flex min-h-screen flex-col">
          <header className="flex items-center border-b px-3 py-4">
            <div className="flex w-full items-center">
              <div className="px-2">
                <LogoType className="h-5" />
              </div>
              <div>
                <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
              </div>
              <div className="px-2">
                <BotSwitcher />
              </div>
              <div className="ml-auto flex items-center">
                <Button variant="outline">
                  Support
                  {/* <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" /> */}
                </Button>
                <Button variant="link">
                  Docs
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>
          <main className="flex flex-1">
            <div className="border-r">
              <nav className="flex w-56 flex-col gap-1 px-3 py-4">
                <NavItem to="/" icon={HomeIcon}>
                  Overview
                </NavItem>
                <NavItem to="/training" icon={AcademicCapIcon}>
                  Training
                </NavItem>
                <NavItem to="/playground" icon={ChatBubbleBottomCenterTextIcon}>
                  Playground
                </NavItem>
                <NavItem to="/connections" icon={PuzzlePieceIcon}>
                  Connections
                </NavItem>
                <NavItem to="/analytics" icon={PresentationChartBarIcon}>
                  Analytics
                </NavItem>
                <NavItem to="/settings" icon={Cog6ToothIcon}>
                  Settings
                </NavItem>
              </nav>
            </div>
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function NavItem(props: {
  icon: typeof HomeIcon;
  to: string;
  children: ReactNode;
}) {
  return (
    <NavLink to={props.to}>
      {({ isActive }) => (
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className="group w-full cursor-default justify-start"
        >
          <props.icon
            className={cn(
              "group-hover:text-foreground mr-2 h-4 w-4",
              isActive ? "text-foreground" : "text-muted-foreground",
            )}
          />
          {props.children}
        </Button>
      )}
    </NavLink>
  );
}

const bots = [
  {
    value: "chatru",
    label: "Chat RU",
  },
  {
    value: "mailru",
    label: "Mail RU",
  },
  {
    value: "chaten",
    label: "Chat EN",
  },
  {
    value: "mailen",
    label: "Mail EN",
  },
];

function BotSwitcher() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(bots[0].value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? bots.find((framework) => framework.value === value)?.label
            : "Select bot..."}
          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search bot..." className="h-9" />
            <CommandEmpty>No bots found.</CommandEmpty>
            <CommandGroup>
              {bots.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => {}}>
                <PlusCircleIcon className="mr-2 h-4 w-4" />
                Create bot
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
