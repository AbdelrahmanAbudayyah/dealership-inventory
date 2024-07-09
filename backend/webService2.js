const dbConnection = require("./config")
function webService2(app){

    /*1*/app.get('/Cart', (request, response) => {
        const sqlQuery = "SELECT * FROM Cart;";
        dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        // send a custom header attribute
        response.setHeader('SQLQuery', sqlQuery);
        response.setHeader('Content-Type', 'application/json');
        return response.status(200).json(result);
        });
        });

        /*1*/ app.delete('/Cart/:VIN', (request, response) => {
            const vin = request.params.VIN;
    
            const sqlQuery = "DELETE FROM Cart WHERE VIN = ? ; ";
            dbConnection.query(sqlQuery, vin, (err, result) => {
            if (err) {
            return response.status(400).json({ Error: "Failed: Record was not deleted" });
            }
            return response.status(200).json({ Success: "Succcessful: Record was deleted!" });
            });
            });

           /*1*/  app.post('/Cart/:VIN/:Model/:Price', (request, response) => {
    const sqlQuery = "INSERT INTO Cart (VIN, Model, Price) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE VIN = VIN, Model = Model, Price = Price;";
    const values = [request.params.VIN, request.params.Model, request.params.Price];
    dbConnection.query(sqlQuery, values, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: "Failed: Record was not added." });
        }
        console.log(values);
        return response.status(200).json({ Success: "Successful: Record was added!." });
    });
});
    
               
            }

            module.exports = webService2;

