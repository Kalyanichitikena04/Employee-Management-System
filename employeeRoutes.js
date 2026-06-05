const express = require("express");
const router = express.Router();
const db = require("../db");

// Get All Employees

router.get("/", (req, res) => {

    db.query(
        "SELECT * FROM employees",
        (err, result) => {
            if(err){
                return res.status(500).json(err);
            }
            res.json(result);
        }
    );
});

// Add Employee

router.post("/", (req, res) => {

    const { name, email, department, salary } = req.body;

    db.query(
        "INSERT INTO employees(name,email,department,salary) VALUES(?,?,?,?)",
        [name, email, department, salary],
        (err, result) => {
            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Added Successfully"
            });
        }
    );
});

// Delete Employee

router.delete("/:id", (req, res) => {

    db.query(
        "DELETE FROM employees WHERE id=?",
        [req.params.id],
        (err) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Deleted"
            });
        }
    );
});

module.exports = router;