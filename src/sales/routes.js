const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get("/", controller.getSale)
router.post("/", controller.addSale) 
router.get("/dailysale", controller.dailySale)
router.get("/weeklysale", controller.weeklySale)
router.get("/monthlysale", controller.monthlySale)
router.get("/:id", controller.getSalebyId)


module.exports = router