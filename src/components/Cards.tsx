interface Props {
  title: string
  subtitle: string
  url: string
  image: string
  className?: string
}

const Cards = ({ title, url, image, className }: Props) => {
  return (
      <a href={url} className='w-auto h-auto md:shadow md:shadow-late-400 rounded-sm text-white flex flex-row md:flex-col'>
        <img src={image} alt="header" className="relative rounded-l-sm w-28 h-12 md:w-56 md:h-36 object-cover"/>
        <div className="w-48 h-12 md:pr-1 md:w-32 md:h-16 z-10">
          <img src={title} alt="Title" className={`${className} mt-2 ml-8  object-cover h-8 md:w-full md:ml-14 md:mt-4`}/>
        </div>
      </a>
  )
}

export default Cards