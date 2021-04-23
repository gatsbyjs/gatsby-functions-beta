const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require('./../config/token')

const handler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.json({ message: "Try a POST!" })
        }

        const doc = new GoogleSpreadsheet(
            process.env.GATSBY_GOOGLE_SHEET_ID
        );

        await doc.useServiceAccountAuth(creds);
        await doc.getInfo()

        const sheet = await doc.addSheet({ headerValues: ['name', 'snack', "drink"] });

        var count = 0;
        var rows = []
        for (element in req.body) {
            if (element == "name" + count) {
                rows.push({ name: req.body[element], snack: req.body["snack" + count], drink: req.body["drink" + count] })
                count++
            }
        }

        return await sheet.addRows(rows)
            .then((value) => {
                return res.status(200).json({
                    message: "Pushing rows to new sheet"
                })
            }, error => {
                console.error(error);
                if (error.response) {
                    return res.status(500).json({
                        error: error.response
                    })
                }
            })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "There was an error", error: err });
    }
}

module.exports = handler;