import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Q2 2024 Release Notes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Brain,
  },
  {
    title: "Slow Decision-Making",
    description:
      "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
    icon: Zap,
  },
  {
    title: "Data Security Concerns",
    description:
      "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <div className="w-full">
      <Section
        title="Announcements"
        subtitle="What's New With HMP?"
      >
        <div className={`grid grid-cols-1 md:grid-cols-${problems.length} gap-8 mt-12 w-full`}>
          {problems.map((problem, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.2} inView>
              <Card className="border-none shadow-none bg-gradient-to-b from-primary/20 to-background">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-background rounded-md flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </Section>
    </div>
  );
}
