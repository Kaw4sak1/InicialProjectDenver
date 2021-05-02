import express, { response } from 'express';

const app = express();
const port = 4231;

app.use(express.urlencoded({
    extended: true }));

app.use(express.json());

let inputs = ["INPUT_01", "INPUT_02", "INPUT_03"];

app.get("/", (req, res) => {
    return res.json({
        message:"GET => OK"
    })
});

app.post("/checked/", (req, res) => {
    try{
        console.log("POST => OK");

        const {value} = req.body;
        inputs.push(value);
        
        return res.json({
            inputs
        });

    }catch(error){
        return res.sendStatus(500);
    }
});

app.put("/checked/:index", (req, res) => {
    try{
        console.log("PUT => OK");

        const {index} = req.params;
        const {value} = req.body;

        inputs[index] = value;

        return res.json({
            inputs
        });

    }catch(error){
        return res.sendStatus(500);
    }
});

app.delete("/checked/:index", (req, res) => {
    try{
        var i = 1;
        const {index} = req.params;

        inputs.splice(index, i);

        return res.json({
            message: "Deleted"
        });

    }catch(error){
        return res.sendStatus(500);
    }
});

console.log("\n");
console.log(inputs);

app.listen(port, () => console.log(`http://localhost:${port}`));
