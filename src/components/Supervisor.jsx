import { Layout} from "./Layout"
import supervisorImage from "../../images/icon-supervisor.svg"

export const Supervisor = () => {
  return (
    <Layout 
      colorLine="bg-cyan"
      title = "Supervisor"
      description= "Monitors activity to identify project roadblocks"
      image = {supervisorImage}
      className="xl:col-start-1 xl:col-span-2 xl:row-start-2 xl:row-end-4"
    >
    </Layout>
  )
}
