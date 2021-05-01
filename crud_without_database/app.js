import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.send("Denver");
});
app.post("/users/", (req, res) => {
    try{
        console.log("req.body", req.body);
        res.sendStatus(200);
    }catch(error){
        res.sendStatus(500)
    }
});

app.listen(port, () => console.log(`[*] Listening => http://localhost:${port}`));