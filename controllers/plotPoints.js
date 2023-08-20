const PlotPoint = require('../models/PlotPoint')

module.exports = {
    getPlots: async (req,res)=>{
        console.log(req.user)
        try{
            const plotPoints = await PlotPoint.find({userId:req.user.id})
            const itemsLeft = await PlotPoint.countDocuments({userId:req.user.id,completed: false})
            res.render('plotPoints.ejs', {plotPoints: plotPoints, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    //change /todos
    createPlot: async (req, res)=>{
        try{
            await PlotPoint.create({plotPoint: req.body.plotItem, completed: false, userId: req.user.id})
            console.log('Plot point has been added!')
            res.redirect('/plotPoints')
        }catch(err){
            console.log(err)
        }
    },
    markPlotComplete: async (req, res)=>{
        try{
            await PlotPoint.findOneAndUpdate({_id:req.body.plotIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete response')
        }catch(err){
            console.log(err)
        }
    },
    markPlotIncomplete: async (req, res)=>{
        try{
            await PlotPoint.findOneAndUpdate({_id:req.body.plotIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deletePlot: async (req, res)=>{
        console.log(req.body.plotIdFromJSFile)
        try{
            await PlotPoint.findOneAndDelete({_id:req.body.plotIdFromJSFile})
            console.log('Deleted Plot')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    