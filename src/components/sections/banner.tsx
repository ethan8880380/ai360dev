import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Banner() {
  return (
    <div className="flex mx-8 rounded-lg p-4 bg-primary">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-background/20 rounded-md text-white flex items-center justify-center mr-4">
            <Brain />
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-md text-white">
                Want to learn more about HMP?
            </p>
            <p className="text-md text-white/70">
                Visit our 'How to Get Started' section.
            </p>
          </div>
        </div>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </div>
  );
}