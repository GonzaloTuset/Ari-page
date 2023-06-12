import image from './assets/ari editada.jpg'
import Cards from "./components/Cards"
import header from './assets/Fondo.jpeg'
import './index.css'
function App() {
  return (
    <main className='bg-white w-screen h-screen text-white flex justify-center items-center '>
      <img 
        src={header} 
        alt="Img" 
        className="blur-custom opacity-80  md:hidden absolute bg-cover inset-0 w-full h-full object-cover" 
      />

      
      <article className='w-11/12 h-full md:bg-slate-900 md:w-8/12 md:h-auto md:shadow-2xl drop-shadow-2xl shadow-slate-400 rounded-md flex'>
        <div className="hidden md:flex md:w-4/5 md:h-6/12 relative">
          <img 
            src={image} 
            alt="Img" 
            className="absolute bg-cover inset-0 w-full h-full object-cover rounded-l-md" 
          />
        </div>
       
        
        <div className='w-full h-auto md:h-[732px] flex flex-col  md:p-4'>
        <h1 className='h1 '>Desireé</h1>
        <p className='mt-[12px] p'>10.500 Followers</p>
          <div className=" flex flex-col  md:flex md:flex-row  md:items-center">
            <div className='bg-emerald-200 bg-opacity-70 h-[60px] w-[60px] rounded-full md:mr-2.5 mt-3 mb-3'>
              <Cards 
                title={"OnlyFans"} 
                subtitle="Desireé" 
                url="https://onlyfans.com/arifeernandez"
              />
            </div>
            <div className="bg-emerald-200 bg-opacity-70 h-[60px] w-[60px] rounded-full md:mr-2.5 mt-3 mb-3">
              <Cards 
                title={"TikTok"}
                subtitle="Desireé" 
                url="https://www.tiktok.com/@arifernandez__1?_t=8cTe4T0GOeL&_r=1"
              />
            </div>
            <div className="bg-emerald-200 bg-opacity-70 h-[60px] w-[60px] rounded-full md:mr-2.5 mt-3 mb-3">
              <Cards 
                title={"Instagram"}
                subtitle="Desireé" 
                url="https://www.instagram.com/ari.feernandez/?hl=es-la"
              />
            </div>
            <div className="bg-emerald-200 bg-opacity-70 h-[60px] w-[60px] rounded-full md:mr-2.5 mt-3 mb-3">
              <Cards 
                title={"Contactame"}
                subtitle="Desireé" 
                url="mailto:AriadnaDesiree1@gmail.com"
              />
            </div>
          </div>
          {/*<Form/>*/}
        </div>
      </article>
    </main>
  )
}

export default App
