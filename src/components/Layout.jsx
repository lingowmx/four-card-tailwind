import PropTypes from "prop-types"

export const Layout = ({ colorLine, title, description, image, className }) => {
  return (
    <div className={`w-80 h-72 rounded-lg shadow-lg shadow-gray-400 mb-4 ${className}
    xl:w-96`}>
      <div className={`w-[316px] mx-auto h-1 rounded-sm ${colorLine} xl:w-[380px]`} ></div>
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
  image: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired

}
