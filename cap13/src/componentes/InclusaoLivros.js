import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";
const InclusaoLivros = () => {

    const {register, handleSubmit, reset} = useForm();
    const [aviso, setAviso] = useState("");
      const salvar = async(campos) => {
        try{
      
          const response = await inAxios.post('livros', campos)
           
            setAviso(`Ok Livro cadastrado com sucesso com ID ${response.data.id}`)
        }catch(err){
          setAviso(`Erro... Livro não cadastrado ${err}`)
        }
        setTimeout(() => {
          setAviso("")
        }, 10000)

        reset({titulo: '', autor: '', foto: '', preco: '', ano: ''})
      }
     

      return(
        <div className="container">
            <h4 className="fts-italic mt-3 ">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}>
            <div className="form-group">
                <label htmlFor="titulo">Título:</label>
                <input type="text" className="form-control" id="titulo" {...register('titulo')}
                 required autoFocus/>
             </div>
             <div className="form-group">
                <label htmlFor="autor">Autor:</label>
                <input type="text" className="form-control" id="autor" required {...register('autor')} />
             </div>
             <div className="form-group">
                <label htmlFor="foto">Foto:</label>
                <input type="url" className="form-control" id="foto"{...register('foto')} required />
             </div>
             <div className="row mt-3">
                <div className="form-group mt-3 col-sm-4">
                    <label htmlFor="ano" >
                        Ano:
                    </label>
                    <input step='0.01' type="number" className="form-control" id='ano'{...register('ano')} required/>
                </div>
                <div className="col-sm-8 mt-3">
                   <label htmlFor="preco">Preco:</label>
                   <input type="number" className="form-control" id="preco"{...register('preco')} required/>
                </div>
             </div>
                  <input type="submit" value='Enviar' className="btn  btn-primary mt-3 " />
                  <input  type="reset" className="btn btn-danger mt-3 ms-3" value='Limpar' />
            </form>
            <div className={aviso.startsWith('Ok') ?  'alert alert-success' :
                  aviso.startsWith('Erro') ? 'alert alert-danger'
           : '' }>
            {aviso}
           </div>
        </div>
    )
}

export default InclusaoLivros;