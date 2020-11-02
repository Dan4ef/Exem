const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-246-87-132.eu-west-1.compute.amazonaws.com',
  database: 'ddtalrapi6n5ie',
  user:'ozzrselhofiodo',
  password: '265982becee5e063ad248c8857c13f6bef020796112b7cc6d84090f74f6e88d7',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
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