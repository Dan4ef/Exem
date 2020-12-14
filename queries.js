const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-247-94-127.eu-west-1.compute.amazonaws.com',
  database: 'd62nku2vo2t6fo',
  user:'vnnqrskttrfmgt',
  password: '85bb45df2101c8bf8552026feaddcfe17286302c8e6f3eee91e5b89570b48346',
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