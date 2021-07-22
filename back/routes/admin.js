const adminRoutes = require('express').Router();
const db = require('../db-config');
const { hashPassword } = require('../middlewares/auth');

adminRoutes.get('/', (req, res) => {
  db.query('SELECT * from admin', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

adminRoutes.post('/', hashPassword, (req, res) => {
    const admin = {
      email: req.body.email,
      password: req.body.password,
    };
  
    db.query('INSERT INTO admin ( email, password) VALUES (?, ?)', [admin.email, admin.password], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        delete admin.password;
        res.status(201).json({ ...admin, id: results.insertId });
      }
    });
  });

  adminRoutes.delete('/:id', (req, res) => (
    db.query('DELETE FROM admin WHERE id = ?', [req.params.id], (err, results) => {
      if (err) {
        res.status(500).send('Error deleting a admin');
      } else if (results.affectedRows) res.status(200).send(' 🎉 Admin deleted');
      else res.status(404).send('User not found');
    })
  ));

module.exports = adminRoutes;
