import Arrow from '../assets/Arrow.png'
interface Props {
  title: string
  subtitle: string
  url: string
  className?: string
}

const Cards = ({ title, url, className }: Props) => {
  return (
      <a href={url} className='w-auto h-auto md:shadow md:shadow-late-400 rounded-sm text-black italic text-3xl flex flex-row md:flex-col'>
        <div className="w-48 h-12 md:pr-1 md:w-32 md:h-16 z-10 flex flex-row items-center">
          <p className={`${className} object-cover h-8 md:w-full md:ml-14 md:mt-4`}>{title}</p>
          <img className='h-[40px]' src={Arrow} alt="flecha"></img>
        </div>
        
      </a>
  )
}

export default Cards