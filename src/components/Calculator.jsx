import { Layout } from "./Layout"
import calculatorImage from "../../images/icon-calculator.svg"

export const Calculator = () => {
  return (
    <Layout
      colorLine="bg-blue"
      title="Calculator"
      description="Monitors activity to identify project roadblocks"
      image={calculatorImage}
      className="xl:col-start-4 xl:col-span-2 xl:row-start-2 xl:row-end-4"
    >

    </Layout>
  )
}
