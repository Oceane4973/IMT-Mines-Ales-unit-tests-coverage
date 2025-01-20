const ContactModel = require('../models/contact.js')

const Contact = class Contact {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect, authenticateToken) {
    this.app = app
    this.ContactModel = connect.model('Contact', ContactModel)
    this.authenticateToken = authenticateToken

    // Ajout de cache en mémoire pour les requêtes fréquentes
    this.cache = {
      contacts: null,
      lastUpdate: null
    }

    this.run()
  }

  /**
   * Middleware
   */
  create () {
    this.app.post('/contact/', (req, res) => {
      try {
        const contactModel = new this.ContactModel(req.body);

        contactModel.save().then((contact) => {
          res.status(200).json(contact || {})
        }).catch(() => {
          res.status(403).json({
            code: 403,
            message: 'Bad request'
          })
        })
      } catch (err) {
        console.error(`[ERROR] POST contacts/ -> ${err}`)

        res.status(500).json({
          code: 500,
          message: 'Internal server error'
        })
      }
    })
  }

  /**
   * Middleware
   */
  all () {
    this.app.get('/contacts', this.authenticateToken, async (req, res) => {
      try {
        // Vérifier si le cache est valide (moins de 5 secondes)
        const now = Date.now();
        if (this.cache.contacts && this.cache.lastUpdate && (now - this.cache.lastUpdate < 5000)) {
          return res.status(200).json(this.cache.contacts);
        }

        // Si pas de cache valide, faire la requête avec lean()
        const contacts = await this.ContactModel
          .find()
          .select('firstName lastName email mobilePhone arrivedAt departureAt message createdAt')
          .lean()
          .sort({ createdAt: -1 })
          .limit(100);

        // Mettre à jour le cache
        this.cache.contacts = contacts;
        this.cache.lastUpdate = now;

        res.status(200).json(contacts)
      } catch (err) {
        console.error(`[ERROR] GET contacts/ -> ${err}`)
        res.status(500).json({
          code: 500,
          message: 'Internal server error'
        })
      }
    })
  }

  delete () {
    this.app.delete('/contact/:id', (req, res) => {
      try {
        console.log(req.params);
        this.ContactModel.findByIdAndDelete(req.params.id).then((contact) => {
          res.status(200).json(contact || {})
        }).catch(() => {
          res.status(403).json({
            code: 403,
            message: 'Bad request'
          })
        })
      } catch (err) {
        console.error(`[ERROR] POST contacts/ -> ${err}`)

        res.status(500).json({
          code: 500,
          message: 'Internal server error'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.delete()
    this.all()
    this.create()
  }
}

module.exports = Contact
