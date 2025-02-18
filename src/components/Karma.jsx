import { Layout } from "./Layout"
import karmaImage from "../../images/icon-karma.svg"

export const Karma = () => {
  return (
    <Layout
      colorLine="bg-orange"
      title="Karma"
      description="Uses data from past projects to provide better delivery estimates"
      image={karmaImage}
      className="xl:row-start-3 xl:col-start-2 xl:col-end-5"
    >
    </Layout>
  )
}
