"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Feb 2024 — Present",
    currentPosition: "Junior Developer",
    place: "Uncommon.org",
    previousPositions: [""],
    description:
      "As a Junior Developer at Uncommon, I have been actively teaching coding within the organization, sharing my knowledge and skills with colleagues to enhance their development capabilities. Additionally, I am involved in supporting vulnerable communities in Mbare by providing educational resources and coding workshops at Mbare Art Space, empowering individuals through technology. Furthermore, I have successfully developed several web applications and websites, contributing to various projects that have improved operational efficiency and user experience.",
    skills: [
      "Python",
      "JavaScript",
      "CSS",
      "React",
      "Node.js",
      "HTML",
      "Figma",
      "UI/UX Design",
      "Digital Marketing",
      "Project Management",
      "Leadership",
    ],
  },
  {
    timeline: "Aug 2023 — Jan 2024",
    currentPosition: "Business Development Manager",
    place: "iHelp Technology",
    previousPositions: [
      "Systems Developer | BD Manager",
    ],
    description:
      "In my role, I focused on effectively managing stakeholders, organizational data, and software maintenance. I built strong relationships through regular, transparent communication and actively engaged stakeholders. I implemented robust data management practices, ensuring data integrity and security, and utilized analysis tools to derive actionable insights. For software maintenance, I prioritized regular updates, performance monitoring, and user support to ensure smooth operations.",
    skills: [
      "Stakeholder Management",
      "Data Management",
      "Software Maintenance",
    ],
  },
  {
    timeline: "Nov 2018 - Sep 2021",
    currentPosition: "Customer Experience Officer",
    place: "Netone Zimbabwe",
    previousPositions: [""],
    description:
      "As a Customer Experience Officer, I used Power BI and Excel to manage customer data and improve relations. Power BI helped visualize key metrics and trends, guiding strategic decisions. Excel facilitated data analysis, enabling insights into customer behavior. These tools streamlined processes, optimized experiences, and drove business growth.",
    skills: [
      "SQL",
      "Stake Holder Management",
      "Power BI",
      "Customer Relations",
      "Database Management",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/am-resume-2024.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
