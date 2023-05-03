import Form from "./components/Form"
import image from './assets/ari.jpeg'
import headerImage from './assets/header.jpg'
import Cards from "./components/Cards"

function App() {
  return (
    <main className='bg-slate-800 w-screen h-screen text-white flex justify-center items-center'>
      <article className=' bg-slate-900 w-8/12 h-auto shadow-2xl drop-shadow-2xl shadow-slate-400 rounded-md flex'>
        <div className="flex-none w-4/12 h-6/12 relative">
          <img 
            src={image} 
            alt="Foto culo" 
            className="absolute bg-cover inset-0 w-full h-full object-cover" 
          />
        </div>
        
        <div className='w-full h-[732px] flex flex-col justify-around items-center p-4'>
          <div>
            <h2 className="items-center">Desireé</h2>
            <Cards 
              title="Only fans" 
              image='https://public.onlyfans.com/files/o/o6/o6p/o6pie7eoh69nmm6fbyoqptnb35nwtkem1677798789/312308981/header.jpg'
              url="https://onlyfans.com/arifeernandez"
            />
          </div>
          <Form/>
        </div>
      </article>
    </main>
  )
}

export default App
