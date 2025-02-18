import { Layout } from "./Layout"
import iconTeamBuilder from "../../images/icon-team-builder.svg"

export const TeamBuilder = () => {
  return (
    <Layout
      colorLine="bg-red"
      title="Team Builder"
      description="Scans our talent network to create the optimal team for your project"
      image={iconTeamBuilder}
      className="xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-span-2"
    >

    </Layout>
  )
}
