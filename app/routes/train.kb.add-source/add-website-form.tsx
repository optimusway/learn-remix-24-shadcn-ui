import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function AddWebsiteForm() {
  return (
    <form>
      <div className="space-y-6">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="url">Email</Label>
          <Input type="url" id="url" placeholder="https://example.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="parser">Indexer</Label>
          <Select onValueChange={void 0} defaultValue={"default"}>
            <SelectTrigger>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="notion">Notion</SelectItem>
              <SelectItem value="usedesk">Usedesk</SelectItem>
              <SelectItem value="confluence">Confluence</SelectItem>
              <SelectItem value="helpeskeddy">HelpDeskEddy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="parser">Mode</Label>
          <RadioGroup defaultValue="site">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="site" id="r1" />
              <Label htmlFor="r1">Entire site</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="folder" id="r2" />
              <Label htmlFor="r2">Folder</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="page" id="r3" />
              <Label htmlFor="r3">Page</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sitemap" id="r4" />
              <Label htmlFor="r4">Sitemap</Label>
            </div>
          </RadioGroup>
        </div>
        <section className="space-y-4">
          <div>
            <h2 className="font-medium">Expert mode</h2>
            <p className="text-muted-foreground text-sm">
              This may harm your setup, use intentionally.
            </p>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="selector">Content selector</Label>
            <Input type="text" id="selector" placeholder=".page__content" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="selector">Skip specific tags</Label>
            <Input type="text" id="selector" placeholder=".page__content" />
          </div>
        </section>
      </div>
    </form>
  );
}
