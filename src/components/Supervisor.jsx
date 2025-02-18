import { Layout} from "./Layout"
import supervisorImage from "../../images/icon-supervisor.svg"

export const Supervisor = () => {
  return (
    <Layout 
      colorLine="bg-cyan"
      title = "Supervisor"
      description= "Monitors activity to identify project roadblocks"
      image = {supervisorImage}
      className="xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-4"
    >
    </Layout>
  )
}
