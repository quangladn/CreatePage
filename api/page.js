const express = require("express")
const router = express.Router()

let pageList = []
let id_ = 1000 

router.get("/", (rep,res) => {
    res.send(pageList)
})

router.post("/", (rep,res) => {
    const data = {...rep.body, id:id_.toString()}
    pageList.push(data)
    res.send(`<h1 style='font-family:"fira code"'>build suscess!</h1><a href="/page/view/${id_}">view</a>`)
    console.log(data)
    id_++
})

router.get("/view/:id", (rep,res) => {
    const { id } = rep.params
    try {
        const foundPage = pageList.find((page) => page.id === id)
        const data = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${foundPage["title"]}</title><style>${foundPage["cssContent"]}</style><link rel="stylesheet" href="/style"></head><body><div class="page">${foundPage["htmlContent"]}</div><p class="copyrigth">Run With Pagec By Quangladn</p></body><script>${foundPage["jsContent"]}</script></html>`
        console.log(data)
        res.send(data)
    } catch {
        res.send("page not found")
    }
})

module.exports = router