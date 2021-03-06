const campaignSchema = require('../models/Campaign')
const express = require('express')

const router = express.Router()

router.get('/add', (req, res) => {
    
})

router.post('/add', (req, res) => {
    const {name, description, maxplayer, edition, author} = req.body
    try {
        new campaignSchema({ name, description, maxplayer, edition, author }).save()
    } catch (err) {
        res.json({
            "error": "Error"
        })
    } finally {
        res.json({
            "message": "done"
        })
    }
})

router.get('/:id', (req, res) => {
    campaignSchema.findById(req.params.id, (err, campaign) => {
        if (err) {
            res.json({
                "error": "Errore"
            })
        } else {
            if (campaign) {
                const {name, description, maxplayer, edition, author} = campaign
                res.json({
                    "name": name,
                    "description": description,
                    "maxplayer": maxplayer,
                    "edition": edition,
                    "author": author
                })
            } else {
                res.json({
                    "error": "not found"
                })
            }
        }
    })
})

router.post('/:id/edit', (req, res) => {
    const {name, description, maxplayer, edition} = req.body

        //TODO if parms == null don't update
    campaignSchema.updateOne({ _id: req.params.id }, {name, description, maxplayer, edition}, (err) => {
        if (err) {
            res.json({
                "error": "Errore"
            })
        } else {
            res.json({
                "message": "done"
            })
        }
    })
})

router.delete('/:id/delete', (req, res) => {
    //TODO auth
    campaignSchema.deleteOne({_id:req.params.id}, (err) => {
        if (err) {
            res.json({
                "error": "Errore"
            })
        } else {
            res.json({
                "message": "done"
            })
        }
    })
})

module.exports = router