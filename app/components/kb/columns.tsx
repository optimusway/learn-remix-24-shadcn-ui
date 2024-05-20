import { Column, ColumnDef, Row } from "@tanstack/react-table";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { dataSources, scrapers, statuses } from "./data";
import {
  ArrowPathIcon,
  BackspaceIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ClipboardDocumentIcon,
  EllipsisHorizontalIcon,
  EyeSlashIcon,
  PencilSquareIcon,
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

type DataSource = (typeof dataSources)[number];

export const columns: ColumnDef<DataSource>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
    cell: ({ row }) => {
      const type = scrapers.find((t) => t.value === row.original.scraper);

      return (
        <div className="flex items-center space-x-2">
          {type?.value !== "default" && (
            <Badge variant="outline">{type?.label}</Badge>
          )}
          <Button variant={"link"} className={cn("text-brand-blue px-0")}>
            <span className="max-w-[500px] truncate">{row.original.href}</span>
            <ArrowTopRightOnSquareIcon className="ml-2 size-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "documentCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Documents indexed" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {row.getValue("documentCount")}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "scraper",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Indexer" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("scraper")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <Badge
          variant={
            status.value === "paused"
              ? "warning"
              : status.value === "failed"
                ? "error"
                : "secondary"
          }
          className={cn("flex w-24 items-center", "shadow-none")}
        >
          {status.icon && <status.icon className={cn(" mr-2 h-4 w-4")} />}
          <span> {status.label}</span>
        </Badge>
      );
    },
  },
  {
    accessorKey: "lastIndexed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last indexed" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px]">
        <time>
          {new Date().toLocaleString(["en-US"], {
            timeStyle: "short",
            dateStyle: "short",
          }) || row.getValue("id")}
        </time>
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-accent -ml-3 h-8"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ChevronUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <ChevronUpDownIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ChevronUpIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ChevronDownIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeSlashIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  console.log({ row });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <EllipsisHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <MagnifyingGlassIcon className="mr-2 size-4" />
          Explore
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group">
          <PencilSquareIcon className="text-muted-foreground group-hover:text-foreground mr-2 size-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="group">
          <ArrowPathIcon className="text-muted-foreground group-hover:text-foreground mr-2 size-4" />
          Refresh
        </DropdownMenuItem>
        <DropdownMenuItem className="group">
          <ClipboardDocumentIcon className="text-muted-foreground group-hover:text-foreground mr-2 size-4" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group">
          <BackspaceIcon className="text-muted-foreground group-hover:text-foreground mr-2 size-4" />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
