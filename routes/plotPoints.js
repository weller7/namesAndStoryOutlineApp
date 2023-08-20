const express = require('express')
const router = express.Router()
const plotController = require('../controllers/plotPoints') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, plotController.getPlots)

router.post('/createPlot', plotController.createPlot)

router.put('/markPlotComplete', plotController.markPlotComplete)

router.put('/markPlotIncomplete', plotController.markPlotIncomplete)

router.delete('/deletePlot', plotController.deletePlot)

module.exports = router