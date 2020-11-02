const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-247-94-127.eu-west-1.compute.amazonaws.com',
  database: 'd5vue8h9jk2i41',
  user:'fbxriezcezuykp',
  password: '96f47bd46ce942727a52c7f17a19ca526121bff66a523de3ab56eeacc651e7d1',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}