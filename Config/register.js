/*** REGISTER DATA USER UPDATING ***/
exports.insert = function (req, res) {
    if(req.body.Registersubmit == "Submit"){
        req.getConnection(function (err, connection) {
            /*** USER DATA UPDATING ***/
            let sql = 'UPDATE User SET username=?, password=?, email=?, licensePlate=?';
            let values = [req.body.Registration[0], req.body.Registration[1], req.body.Registration[2], req.body.Registration[3]];
            connection.query(sql, values, function (err, result) {
                if(err)throw err;
                res.redirect('/');
            })
        });
    }
};