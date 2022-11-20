const express = require("express")
const cors = require("cors")

const port = 80
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/calculateFreeAmount", (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  const { maxAmount, stacks } = req.body
  let freeAmount = maxAmount
  if (maxAmount && maxAmount > 0 && stacks && stacks.length > 0) {
    for (stack of stacks) {
      if (stack["amount"] > 0 && stack["sizePerUnit"] > 0) {
        freeAmount -= stack["amount"] * stack["sizePerUnit"]
      }
    }
    res.send({ freeAmount: freeAmount })
  }

  res.send({ freeAmount: 0 })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
