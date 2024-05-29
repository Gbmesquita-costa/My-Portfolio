import { Metadata } from "next";

import { Circles } from "@/components/circles";
import { WorkDescription } from "./components/workDescription";

import { Projects } from "./components/projects";

interface ProjectDetails {
  name: string,
  deployUrl: string,
  description: string,
  gifimage_url: string,
  githubRepo: string,
  thumbnail: string
}

interface ProjectsProps {
  projects: ProjectDetails[]
}

export const metadata: Metadata = {
  title: "Projects",
  description: "My Portfolio | Projects"
}

const Work = async (): Promise<JSX.Element> => {
  const response = await fetch("http://localhost:3000/api/projects", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })

  const { projects } = await response.json() as ProjectsProps

  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col items-center justify-center"
    >
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col items-center 
          justify-center"
        >
          <WorkDescription />

          {
            !projects.length ? (
              <h2 className="text-2xl -mt-6">
                No projects found : (
              </h2>
            ) : (
              <Projects
                projects={projects}
              />
            )
          }
        </div>
      </div>
      <Circles />
    </div>
  )
}

export default Work