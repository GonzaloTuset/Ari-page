import Form from "./components/Form"
import image from './assets/ari editada.jpg'
import Cards from "./components/Cards"
import header from './assets/ariJump.jpg'
import Logo from './assets/OnlyFansLogo.png'
import TikTok from './assets/ari tik tok,jpeg.jpg'
import FondoTik from './assets/tik tok.png'
import imgOnly from './assets/only.jpg'

function App() {
  return (
    <main className='bg-slate-800 w-screen h-screen text-white flex justify-center items-center'>
      <img 
        src={header} 
        alt="Img" 
        className="md:hidden absolute bg-cover inset-0 w-full h-full object-cover" 
      />
      <article className='w-11/12 h-5/6 md:bg-slate-900 md:w-8/12 md:h-auto md:shadow-2xl drop-shadow-2xl shadow-slate-400 rounded-md flex'>
        <div className="hidden md:flex md:w-4/5 md:h-6/12 relative">
          <img 
            src={image} 
            alt="Img" 
            className="absolute bg-cover inset-0 w-full h-full object-cover rounded-l-md" 
          />
        </div>
        
        <div className='w-full h-auto md:h-[732px] flex flex-col justify-around items-center md:p-4'>
          <div className=" flex flex-col mb-1 md:flex md:flex-row  md:items-center">
            <div className="bg-white bg-opacity-70 rounded mb-2.5 md:mr-2.5">
              <Cards 
                title={Logo}
                subtitle="Desireé" 
                image={imgOnly}
                url="https://onlyfans.com/arifeernandez"
              />
            </div>
            <div className="bg-white bg-opacity-70 rounded  mb-2.5 md:mr-2.5">
              <Cards 
                title={FondoTik}
                subtitle="Desireé" 
                image={TikTok}
                url="https://www.tiktok.com/@ari.feernandez?_t=8aVLwUc5Et3&_r=1&utm_medium=social&utm_source=heylink.me"
              />
            </div>
          </div>
          <Form/>
        </div>
      </article>
    </main>
  )
}

export default App
