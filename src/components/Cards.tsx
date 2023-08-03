import Arrow from '../assets/Arrow.png'
import './../index.css'
interface Props {
  title: string
  subtitle: string
  url: string
  className?: string
}

const Cards = ({ title, url, className }: Props) => {
  return (
      <a href={url} className='w-auto h-auto md:shadow md:shadow-late-400 rounded-sm text-black italic text-3xl flex flex-row md:flex-col md:text-white md:hover:text-black'>
        <div className="w-48 h-12 md:pr-1 md:w-32 md:h-16 z-10 flex flex-row items-center ">
          <p className={`${className} object-cover h-8 md:w-full  pl-[15px] md:text  `}>{title}</p>
          <img className='h-[15px] ml-[10px] mt-[10px] md:mb-[5px] md:ml-[60px] ' src={Arrow} alt="flecha"/>
        </div>
        
      </a>
  )
}

export default Cards