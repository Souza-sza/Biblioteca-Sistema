import { useEffect, useState } from "react";
import { inAxios } from "../config_axios";
import { useForm } from "react-hook-form";
import ItemLista from "./ItemLista";





const Manutensao = () => {
   
   //filtro
   const filtarLista = async (campos) =>{
      try{
       const lista = await inAxios.get(`livros/filtro/${campos.palavra}`);
       console.log(campos.palavra)
       lista.data.length
       ? setLivros(lista.data) :alert(`Não há livros com a palavra digitada`)
      }catch(err){
         alert(`Erro.... não foi possível obiter dados`)
      }
   }  
   // exclusão
   const excluir = async (id, titulo) =>{
      if(!window.confirm(`Confirma a Exclusão do livro ${titulo}`)) {
        return;
      }
      try{
        await inAxios.delete(`livros/${id}`);
        console.log(id)
        setLivros(livros.filter((livro) => livro.id !== id))
        
      }catch(err){
        alert(`Não foi Possível Excluir o Livro - ${err}`);
      }
  }
  // altera
  
  const Altera = async (id, titulo, index) => {
    const novoPreco = Number(prompt(`Informe o novo preço do livro "${titulo}"`));
    if (isNaN(novoPreco) || novoPreco === 0) {
      return;
    }
    try {
      await inAxios.set(`livros/${id}`, novoPreco);
      const livrosAlteracao = [...livros]
      livrosAlteracao[index].preco = novoPreco;
      setLivros(livrosAlteracao);
    } catch (error) {
      alert(`Erro... Não foi possível alterar o preço: ${error}`);
    }
  };



   const {register, handleSubmit, reset} = useForm('')
   const [livros, setLivros] = useState([]);
   const ObiterLista = async() => {
    try{
    const lista = await inAxios.get('livros');
    setLivros(lista.data)

    }catch(err){
        alert(`Erro não foi possivel obiter dados - ${err}`)
    }
   }
   useEffect(() =>
     {
           ObiterLista()
     }, [])
 return  (
    <div className="container">
        <div className="row">
           <div className="col-sm-7">
              <h4 className="fst-italic mt-3">Manutensão</h4>
           </div>
           <div className="col-sm-5">
             <form onSubmit={handleSubmit(filtarLista)}>
                <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Titulo ou Autor"
                   {...register('palavra')}  required autoFocus/>
                     <input type="submit" className="btn btn-primary ml-2" value='Pesquisar' />
                     <input type="button" className="btn btn-danger" value='Todos'
                     onClick={() => {reset({palavra :''}); ObiterLista();} }/>
                </div>
             </form>
           </div>
        </div>
        <table className="table table-striped mt-3">
          <thead>
           <tr>
              <th>Cód.</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Preco</th>
              <th>Foto</th>
              <th>Ações</th>
           </tr>
           </thead>
           <tbody>          
     {livros.map((livro, index) =>(
          <ItemLista key={livro.id} id={livro.id} titulo={livro.titulo}
             autor={livro.autor} ano={livro.ano} preco={livro.preco}
             foto={livro.foto} excluirClick={() => excluir(livro.id, livro.titulo)}
             altearNoClick={ () => Altera(livro.id, livro.titulo, index)} />     
               )) }
                
           </tbody>
        </table>
        
    </div>
 )
    
 }  


export default Manutensao;