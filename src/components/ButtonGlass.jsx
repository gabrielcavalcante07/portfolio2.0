export const ButtonGlass = ({link, buttonClass, onClick, onSubmit, icon, spanClass, content, target}) => {
  return(
    <a href={link} target={target} className={`bg-black/10 backdrop-blur-md text-center shadow-glass px-4 py-3 flex items-center h-10 gap-2 rounded-full text-xs cursor-pointer overflow-hidden duration-300 delay-75 justify-center ${buttonClass}`} onClick={onClick} onSubmit={onSubmit}
    >
      <>
        {icon}
      </>
      <span className={`flex items-center whitespace-nowrap ease duration-300 delay-75${spanClass}`}>
         {content}
      </span> 
    </a>
  )
}