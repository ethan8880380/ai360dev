import { Button } from "@/components/ui/button";

export function ButtonContainer() {
  return (
    <div className="flex flex-row items-center justify-between mx-8 px-8 border-y border-border py-3">
      <Button variant="ghost">How to Request Access</Button>
      <div className="h-6 w-px bg-border"></div>
      <Button variant="ghost">View All Release Notes</Button>
      <div className="h-6 w-px bg-border"></div>
      <Button variant="ghost">Share Feedback</Button>
      <div className="h-6 w-px bg-border"></div>
      <Button variant="ghost">Report an Issue</Button>
      <div className="h-6 w-px bg-border"></div>
      <Button variant="ghost">Data Inquiries</Button>
      <div className="h-6 w-px bg-border"></div>
      <Button variant="ghost">Contact Support</Button>
    </div>
  );
}