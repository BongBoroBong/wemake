import { Link } from "react-router";

import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  title: string;
  postedAt: string;
  type: string;
  location: string;
  salary: string;
  companyHq: string;
}

export function JobCard({
  id,
  companyName,
  companyLogoUrl,
  title,
  postedAt,
  type,
  location,
  salary,
  companyHq,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={companyLogoUrl}
              alt={`${companyName} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{companyName}</span>
              <span className="text-xs text-muted-foreground">
                {postedAt}
              </span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardContent className="px-0">
              <Badge variant="outline" >{type}</Badge>
              <Badge variant="outline" >{location}</Badge>
          </CardContent>
          <CardFooter className="flex justify-between px-0">
            <div className="flex flex-col">
              <span className="text-sm text-medium text-muted-foreground">
                {salary}
              </span>
              <span className="text-sm text-medium text-muted-foreground">
                {companyHq}
              </span>
            </div>
            <Button variant="secondary" size="sm">
              Apply now
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  );
} 