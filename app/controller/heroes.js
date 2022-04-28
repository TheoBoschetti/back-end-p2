const data = require('../../tas-de-merde.json')

/**
 * return all heroes or a filtered hero using query
 *
 * @param {*} req
 * @param {*} res
 */
const getHeroes = async (req, res) => {
  // check if there is a search keyword in query
  if (req.query.f) {
    const filteredResult = data.heroes.find(
      hero => hero.name.toLowerCase() === req.query.f.toLowerCase()
    )

    // check if heroes were found
    filteredResult
      ? res.status(200).send(filteredResult)
      : res.status(404).send({ message: 'not found' })
  } else {
    // if no query, return all heroes
    res.status(200).send(data.heroes)
  }
}

module.exports = { getHeroes }
