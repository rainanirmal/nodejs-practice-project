import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

app.post("/teas" , (req, res) => {
    
    const { name, price } = req.body;
    const newTea = {id: nextId++, name, price};

    teaData.push(newTea);

    return res.status(201).send(newTea);
});

app.get("/teas", (req, res) => {

    return res.status(200).send(teaData);
});

app.get("/teas/:id" , (req, res) => {

    console.log(req.params.id);

    const tea = teaData.find(t => Number(t.id) === Number(req.params.id));

    console.log(tea);

    if(!tea) {
        return res.status(404).send("Tea not found !");
    }

    return res.status(200).send(tea);
});

app.put("/teas/:id", (req, res) => {

    const tea = teaData.find(t => Number(t.id) === Number(req.params.id));

    if(!tea) {
        return res.status(404).send("Tea not found !");
    }

    const { name, price } = req.body;

    tea.name = name;
    tea.price = price;

    return res.status(200).send(tea);

});

app.delete("/teas/:id", (req, res) => {

    const index = teaData.findIndex(t => Number(t.id) === Number(req.params.id));

    if(index === -1) {
        return res.status(404).send("Tea not found !");
    }

    teaData.splice(index, 1);

    return res.status(204).send("Tea deleted");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});