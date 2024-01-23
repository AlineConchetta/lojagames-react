import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar } from "../../../service/service";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {id} = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscarCategorias(`/categorias/${id}`, setCategoria)

        } catch (error: any) {
            if (error.toString().includes('403')) {
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A categoria foi atualizada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {} else {
                    alert('Erro ao atualizar a categoria.')
                }

            }
        } else {
            try {
                await cadastrarCategoria(`/categorias`, categoria, setCategoria)
                alert('A categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                    alert('Erro ao cadastrar a categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 hover:bg-rose-800 p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-rose-600 
                               hover:bg-rose-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        
                    }
                    
                </button>
            </form>
        </div>
    );
}

function buscarCategorias(arg0: string, setCategoria: Dispatch<SetStateAction<Categoria>>) {
        throw new Error("Function not implemented.");
    }
    function cadastrarCategoria(arg0: string, categoria: Categoria, setCategoria: Dispatch<SetStateAction<Categoria>>){
        throw new Error("Function not implemented.");
    }
}
export default FormCategoria;
