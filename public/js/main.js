const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const plotClass = document.querySelectorAll('li.plotItem')
const todoClass = document.querySelectorAll('li.todoItem')




Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePlot)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markPlotComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markPlotIncomplete)
})


async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

    
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



//functions for the story outline page (plot points)

async function deletePlot(){
    const plotId = this.parentNode.dataset.id
    try{
        const response = await fetch('plotPoints/deletePlot', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plotIdFromJSFile': plotId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markPlotComplete(){
    const plotId = this.parentNode.dataset.id
    try{
        const response = await fetch('plotPoints/markPlotComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plotIdFromJSFile': plotId
            })
        })
        const data = await response.json()
        console.log(data)
        console.log(plotId)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markPlotIncomplete(){
    const plotId = this.parentNode.dataset.id
    try{
        const response = await fetch('plotPoints/markPlotIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plotIdFromJSFile': plotId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

    console.log(plotId)
}