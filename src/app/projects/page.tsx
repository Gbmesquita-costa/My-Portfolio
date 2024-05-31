import { Metadata } from "next";

import { Circles } from "@/components/circles";
import { WorkDescription } from "./components/workDescription";

import { Projects } from "./components/projects";
import { http } from "@/services/httpRequest";

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
  description: `
    Explore a selection of my diverse projects, ranging from client and corporate work to personal endeavors. 
    Each project showcases my expertise and dedication to delivering innovative solutions that meet the unique 
    needs of each client. From web development and design to software solutions, dive into my portfolio to see 
    how I can bring your digital ideas to life.
  `,
  robots: {
    index: true,
    follow: true
  }
}

const Work = async (): Promise<JSX.Element> => {
  const request = `${http}/api/projects`

  const response = await fetch(request, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })

  const { projects } = await response.json() as ProjectsProps

  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col py-36 xl:py-32"
    >
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col items-center"
        >
          <WorkDescription />

          {
            !projects.length ? (
              <h2 className="text-2xl -mt-6">
                No projects found 😢
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