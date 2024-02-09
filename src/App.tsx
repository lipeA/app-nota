import Logo from './assets/logo-nlw.svg';
import NewNote from './components/new-note-card';
import NoteCard from './components/note-card';


function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt="nlw" />
      <form className='w-full'>
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNote/>
        <NoteCard  date={new Date() } contentText='Olá mundo'/>
        <NoteCard  date={new Date() } contentText='aprendendo React'/>
        <NoteCard  date={new Date() } contentText='Olá mundo'/>
        <NoteCard  date={new Date() } contentText='Olá mundo'/>
           
        
       
        
       
        
       
      </div>







    </div>
  );
}

export default App
