const userSchema = require('../models/User')
const express = require('express')

const router = express.Router()

router.get('/add', (req, res) => {
    
})

router.post('/add', (req, res) => {
    const {username, email, telegram, phone, discord} = req.body
    try {
        new userSchema({ username, email, telegram, phone, discord }).save()
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

router.get('/:username', (req, res) => {
    userSchema.findOne({username:req.params.username}, (err, user) => {
        if (err) {
            res.json({
                "error": "Error"
            })
        } else {
            if (user) {
                const {username, email, telegram, phone, discord} = user
                res.json({
                    "username": username,
                    "phone": phone,
                    "email": email,
                    "telegram": telegram,
                    "discord": discord
                })
            } else {
                res.json({
                    "error": "not found"
                })
            }
        }
    })
})

router.post('/:username/edit', (req, res) => {
    const {username, email, telegram, phone, discord} = req.body

    //TODO if parms == null don't update
    userSchema.updateOne({ _id: req.params.username }, {username, email, telegram, phone, discord}, (err) => {
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

router.delete('/:username/delete', (req, res) => {
    //TODO auth
    userSchema.deleteOne({_id:req.params.username}, (err) => {
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