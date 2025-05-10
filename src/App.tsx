
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">INOVAR TUR</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Início</a></li>
              <li><a href="#" className="hover:underline">Pacotes</a></li>
              <li><a href="#" className="hover:underline">Sobre</a></li>
              <li><a href="#" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <section className="mb-10">
          <div className="relative h-96 rounded-lg overflow-hidden mb-4">
            {/* Substituindo a imagem por um vídeo */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            >
              <source src="/videos/porto-seguro-beach.mp4" type="video/mp4" />
              {/* Fallback para imagem caso o vídeo não carregue */}
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1080&auto=format&fit=crop" 
                alt="Porto Seguro" 
                className="w-full h-full object-cover"
              />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="text-center text-white p-4">
                <h2 className="text-4xl font-bold mb-2">Descubra Porto Seguro</h2>
                <p className="text-xl mb-4">Vivencie experiências inesquecíveis no paraíso</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
                  Conheça Nossos Pacotes
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} INOVAR TUR - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
