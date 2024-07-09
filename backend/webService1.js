const dbConnection = require("./config")
 function webService1(app){
    /*1*/app.get('/Dealership', (request, response) => {
        const sqlQuery = "SELECT * FROM Dealership;";
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

       /*1*/ app.get('/Veichle/byCon/:DealershipName/:Condition', (request, response) => {
            const dealershipName = request.params.DealershipName;
            const condition = request.params.Condition;

            const sqlQuery = "SELECT * FROM Veichle WHERE DealershipName = '" + dealershipName + "' And \`Condition\` = '" + condition + "';";
            dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
            }
            response.setHeader('Content-Type', 'application/json');
            return response.status(200).json(result);
            });
            });

     app.get('/Veichle/byVIN/:VIN', (request, response) => {
            const vin = request.params.VIN;
            const sqlQuery = "SELECT * FROM Veichle WHERE VIN = '" + vin +"';";
            console.log(vin)
            dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
            }
            response.setHeader('VIN', vin); // send a custom
            return response.status(200).json(result);
            });
            });


       /*1*/ app.delete('/Veichle/:VIN', (request, response) => {
            const vin = request.params.VIN;
    
            const sqlQuery = "DELETE FROM Veichle WHERE VIN = ? ; ";
            dbConnection.query(sqlQuery, vin, (err, result) => {
            if (err) {
            return response.status(400).json({ Error: "Failed: Record was not deleted" });
            }
            return response.status(200).json({ Success: "Succcessful: Record was deleted!" });
            });
            });

        
          /*1*/  app.post('/Veichle', (request, response) => {
                const sqlQuery = 'INSERT INTO Veichle VALUES (?);';
                const values = [request.body.VIN, request.body.Model, request.body.Trim, request.body.Color,
                request.body.Price,request.body.DealershipName ,request.body.Condition ];
                dbConnection.query(sqlQuery, [values], (err, result) => {
                if (err) {
                return response.status(400).json({Error: "Failed: Record was not added."});
                }
                console.log(values)
                return response.status(200).json({Success: "Successful: Record was added!."});
                });
                });

          /*1*/  app.put('/Veichle/:VIN', (request, response) => {
                const vin = request.params.VIN;
                 const sqlQuery = `UPDATE Veichle SET VIN = ?, Model = ?,
                 Trim = ?, Color = ?, Price = ?,DealershipName = ?, \`Condition\` = ?  
                WHERE VIN = ? ;`;
                const values = [request.body.VIN, request.body.Model, request.body.Trim, request.body.Color,
                    request.body.Price,request.body.DealershipName ,request.body.Condition];
                dbConnection.query(sqlQuery, [...values, vin], (err, result) => {
                if (err) {
                return response.status(400).json({Error: "Failed: Record was not added."});
                }
                return response.status(200).json({Success: "Successful: Record was updated!."});
                });
                });      
                
               
            }

            module.exports = webService1;



