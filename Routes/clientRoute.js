const express = require("express")
const router = express.Router();

const clientsController = require("../Controllers/clients")

//mostra todos os produtos
router.get("/", (req, res, next) => {
    clientsController.getAll(req, res) 
    });

//cria os produtos
router.post("/", (req, res, next) => {
    clientsController.create(req, res)
    });

//PUT atualiza toda a estrutura do registro
//PATCH atualizar parte do registro
router.patch("/:id", (req, res, next) => {
    clientsController.update(req, res)
    });

router.delete("/:id", (req, res, next) => {
    clientsController.delete(req, res)

    })   
module.exports = router;