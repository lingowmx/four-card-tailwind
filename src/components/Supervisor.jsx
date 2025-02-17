import { Layout} from "./Layout"
import supervisorImage from "../../images/icon-supervisor.svg"

export const Supervisor = () => {
  return (
    <Layout 
      colorLine="bg-cyan"
      title = "Supervisor"
      description= "Monitors activity to identify project roadblocks"
      image = {supervisorImage}
    >
    </Layout>
  )
}
