const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get("/", controller.getSale)
router.post("/", controller.addSale) 
router.get("/:id", controller.getSalebyId)


module.exports = router