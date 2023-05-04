interface Props {
  title: string
  url: string
  image: string
}

const Cards = ({ title, url, image }: Props) => {
  return (
    <div className='w-auto h-auto shadow shadow-slate-400 rounded-sm text-white flex flex-col'>
      <img src={image} alt="header" className="relative w-56 h-36 object-cover"/>
      <div className="w-2/6 h-16 z-10">
        <a href={url}>
          <h1>{title}</h1>
        </a>
      </div>
    </div>
  )
}

export default Cards