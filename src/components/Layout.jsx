import PropTypes from "prop-types"

export const Layout = ({ colorLine, title, description, image }) => {
  return (
    <div className="border border-red w-80 h-72 rounded-lg">
      <div className={`w-full h-2 rounded-lg ${colorLine}`} ></div>
      <div className="h-64 p-8">
        <h1 className="text-grey500 font-semibold text-2xl mb-2">{title}</h1>
        <p className="text-grey400 tracking-normal font-normal text-[14px] leading-6">{description}</p>
        <div className="flex justify-self-end">
          <img src={image} alt="main-image" className="mt-8 w-20 h-2w-20"/>
        </div>
      </div>
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  colorLine: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired

}
