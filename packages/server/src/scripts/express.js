import express from "express";
import cors from "cors";

import { isNumber } from "MM:shared/scripts/core/number";

const port = 4000;

export function init() {
    const app = express();
    app.use(cors());
    app.get("/", (req, res, next) => {
        const data = [123, 456, 789];

        console.log("Hello world");

        if (isNumber(...data)) {
            res.send(data);
        } else {
            next("Data contained a non-number");
        }
    });

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}
