const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-176-34-123-50.eu-west-1.compute.amazonaws.com',
  database: 'deni1fiihvev3a',
  user:'mnimvfmpfjxoff',
  password: '9136f317540648254235e537cb294cf7738c36db9b61cfcdccc3323f72fadd78',
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