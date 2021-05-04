const express = require('express');
const router = express.Router();
const db = require('../../db/connection')
const inputCheck = require('../../utils/inputCheck')

//GET a party
router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;

    db.query(sql, (err, rows) =>{
        if (err) {
            res.status(500).json({error: err.message})
            return
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
})

//GET a specfic party
router.get('/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id]
    db.query(sql, params, (err, row) =>{
        if (err) {
            res.status(500).json({error: err.message})
            return
        }
        res.json({
            message: 'success',
            data: row
        })
    })
})

//Delete a party
router.delete('/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id = ?`
    const params = [req.params.id]

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({error: res.message})
        } else if (!result.affectedRows){
            res.json({
                message: 'Party not found'
            })
        } else {
            res.json ({
                message: 'Deleted',
                changes: result.affectedRows,
                id: req.params.id
            })
        }
    })
})

module.exports = router;