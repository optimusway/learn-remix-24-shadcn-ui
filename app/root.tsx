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
  ChevronUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  PlusCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  ChevronUpIcon,
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
import { LogoTypeColorful } from "~/components/logo";
import { Separator } from "./components/ui/separator";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.svg" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
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
        <div className="bg-primary-foreground dark:bg-background flex min-h-screen flex-col">
          {/* <header className="flex items-center border-b px-3 py-4">
            <div className="flex w-full items-center">
              <div className="px-2">
                <LogoTypeColorful className="h-5" />
              </div>
              <div>
                <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
              </div>
              <div className="px-2">
                <BotSwitcher />
              </div>
              <div className="ml-auto flex items-center">
                <Button variant="outline">Support</Button>
                <Button variant="link">
                  Docs
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </header> */}
          <main className="flex flex-1">
            <div className="w-60 flex flex-col">
              <section className="flex flex-col gap-4 px-4 pt-5">
                <div className="px-1 flex justify-start">
                  <LogoTypeColorful className="h-5" />
                </div>
                <div className="px-1">
                  <BotSwitcher />
                </div>
              </section>
              <nav className="flex flex-col gap-1 px-2 py-3">
                <section>
                  <NavItem to="/inbox" icon={InboxIcon}>
                    Инбокс
                  </NavItem>
                  <NavItem to="/chat" icon={ChatBubbleBottomCenterTextIcon}>
                    Чат
                  </NavItem>
                  <NavItem to="/search" icon={MagnifyingGlassIcon}>
                    Поиск
                  </NavItem>
                </section>
                <section className="flex flex-col gap-1 mt-2">
                  <h3 className="font-medium text-xs text-muted-foreground uppercase px-3">
                    Бот
                  </h3>
                  <NavItem to="/" icon={HomeIcon}>
                    Обзор
                  </NavItem>
                  {/* <NavItem to="" icon={AcademicCapIcon}>
                  Training
                </NavItem> */}
                  <NavSection title="Training" icon={AcademicCapIcon}>
                    <SubNavItem to="/train/intents">FAQ</SubNavItem>
                    <SubNavItem to="/train/kb">База знаний</SubNavItem>
                    <SubNavItem to="/train/glossary">Глоссарий</SubNavItem>
                  </NavSection>
                  <NavItem to="/connections" icon={PuzzlePieceIcon}>
                    Интеграции
                  </NavItem>
                  {/* <NavItem to="/analytics" icon={PresentationChartBarIcon}>
                    Analytics
                  </NavItem> */}
                  <NavItem to="/settings" icon={Cog6ToothIcon}>
                    Настройки
                  </NavItem>
                </section>
                {/* <section className="flex flex-col gap-1 mt-4">
                  <h3 className="font-medium text-xs text-muted-foreground uppercase px-3">
                    Account
                  </h3>
                  <NavItem to="/billing" icon={CreditCardIcon}>
                    Billing
                  </NavItem>
                  <NavItem to="/settings" icon={CogIcon}>
                    Settings
                  </NavItem>
                </section> */}
              </nav>

              <section className="px-5">
                <Card>
                  <CardHeader className="p-2 pt-0 md:px-3 md:py-3">
                    <CardDescription>
                      Обучайте бота при помощи <strong>Журнала</strong>.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-2 pt-0 md:p-3 md:pt-0">
                    <Button size="sm" className="w-full">
                      Читать анонс
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section className="mt-auto px-2 pb-3">
                <section>
                  <Button
                    variant={"ghost"}
                    className="group w-full cursor-default justify-start px-3 h-8"
                  >
                    <LifebuoyIcon
                      className={
                        "group-hover:text-foreground mr-2 h-4 w-4 text-muted-foreground"
                      }
                    />
                    Поддержка
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="group w-full cursor-default justify-start px-3 h-8"
                  >
                    <DocumentTextIcon
                      className={
                        "group-hover:text-foreground mr-2 h-4 w-4 text-muted-foreground"
                      }
                    />
                    Документация
                  </Button>
                </section>
                <div className="px-3">
                  <Separator className="my-2" />
                </div>
                <section className="mt-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"ghost"} className="px-3 h-12 w-full">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex items-center gap-2">
                            <Avatar className="rounded-lg ring-1 ring-ring/20">
                              <AvatarImage src="https://github.com/optimusway.png" />
                            </Avatar>
                            <div className="text-left">
                              <p className="text-sm/5 font-medium_">
                                optimusway
                              </p>
                              <p className="text-xs/5 text-muted-foreground font-normal">
                                alex@wikibot.pro
                              </p>
                            </div>
                          </div>
                          <ChevronUpIcon
                            className={cn(
                              "text-muted-foreground hover:text-foreground h-4 w-4",
                            )}
                          />{" "}
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-52"
                      align="end"
                      sideOffset={12}
                    >
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Биллинг
                          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Настройки
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Выйти
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </section>
              </section>
            </div>
            <article className="border rounded-xl m-2 ml-0 w-full shadow-sm bg-background dark:bg-primary-foreground overflow-hidden">
              <Outlet />
            </article>
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <script
          src="https://widget.yourgpt.ai/script.js"
          id="yourgpt-chatbot"
          data-widget="91522386-1ad9-412d-bc79-1dc926315cb9"
        ></script>
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
          className="group w-full cursor-default justify-start px-3 h-8"
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

function NavSection(props: {
  title: string;
  icon: typeof HomeIcon;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="group w-full cursor-default justify-start px-3 h-8"
      >
        <props.icon
          className={cn(
            "group-hover:text-foreground text-muted-foreground mr-2 h-4 w-4",
          )}
        />
        {props.title}
      </Button>
      <div className="flex w-full gap-2 pl-6">
        <div className="flex items-stretch justify-center py-1">
          <Separator orientation="vertical" />
        </div>
        <div className="w-full space-y-1">{props.children}</div>
      </div>
    </div>
  );
}

function SubNavItem(props: { to: string; children: ReactNode }) {
  return (
    <div>
      <NavLink to={props.to}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="w-full cursor-default justify-start px-2 h-8"
          >
            {props.children}
          </Button>
        )}
      </NavLink>
    </div>
  );
}

const bots = [
  {
    value: "skillbox",
    label: "Skillbox",
  },
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
