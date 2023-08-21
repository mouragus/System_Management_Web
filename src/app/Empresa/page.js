export default function Empresas() {
  return (
  <>  
    <nav className="flex justify-between items-center bg-sky-950 px-6 py-4">
      <ul className="flex gap-20 items-end">
        
        <li><a href="#"><h1 className="text-2x1 text-slate-100">System Management</h1></a></li>
        
        <li><a href="#">Tarefa</a></li>
        
        <li><a href="#">Usuario</a></li>
        
        <li><a href="#">Empresa</a></li>
      </ul>

      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src="https://i.pravatar.cc/100" alt="Avatar do Usuario"/>
      </div>

    </nav>
    
    <main className="bg-slate-900 m-20 p-8">
      <h2>Empresa</h2>
    </main>
  </>

  )
}