import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
export default function SelectPair({
  label,
  description,
  name,
  required = false,
  placeholder,
  options,
}: {
  label: string;
  description: string;
  name: string;
  required?: boolean;
  placeholder: string;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 flex flex-col">
      <Label className="flex flex-col" onClick={() => setOpen(true)}>
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      <Select
        open={open}
        onOpenChange={setOpen}
        name={name}
        required={required}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
