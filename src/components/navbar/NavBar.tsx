import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className='w-full bg-rose-600 text-white
                flex justify-between'>
            
                <div className="container flex justify-between text-lg">
                    <Link to=''className="text-2xl font-bold">Loja Games OnLine da Line</Link>

                    <div className='flex gap-4'>
                        Categorias
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
    
                        Produtos
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar