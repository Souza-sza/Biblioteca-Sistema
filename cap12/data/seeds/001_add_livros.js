/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex){
  return knex('livros').del()
  .then(function() {
    return knex('livros').insert([
      {
        titulo: 'web Responsivo', autor: 'Neymar jr' ,
        ano: 2024 ,preco: 65.0, foto: 'https://s3.novatec.com.br/capa/9788575223825.jpg' 
      },
      {
        titulo: 'protecao moderna de dados', autor: 'Neymar jr' ,
        ano: 1999 ,preco: 55.0, foto: 'https://s3.novatec.com.br/capa/978658057843.jpg' 
      },
      {
        titulo: 'sql em 10 minutos', autor: 'keven duarte' ,
        ano: 2024 ,preco: 95.0, foto: 'https://s3.novatec.com.br/capa/9786586057447.jpg' 
      },
      {
        titulo: 'python', autor: 'Kasuma Sato' ,
        ano: 2024 ,preco: 44.0, foto: 'https://s3.novatec.com.br/capa/9788575226476.jpg' 
      },
    ])
  })
}
