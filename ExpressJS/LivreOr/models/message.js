let connection = require("../config/db");
let moment = require("moment");

class Message {
    constructeur(row) {
        this.row = row;
    }

    // Getter
    get content() {
        return this.row.content;
    }

    get created_at() {
        //return moment(this.row.created_at);
        return this.row.created_at;
    }

    // Setter tbd...

    static create(content, callback) {
        connection.query(
            "INSERT INTO message SET content = ?, created_at = ?",
            [content, new Date()],
            function (err, result) {
                if (err) {
                    throw err;
                }
                //console.log("result:", result);
                callback(result);
            }
        );
    }

    static all(callback) {
        connection.query("SELECT * FROM message", (err, rows) => {
            if (err) throw err;
            //console.log("rows:", rows);

            //callback(rows.map((row) => new Message(row)));
            callback(rows);
        });
    }
}

module.exports = Message;
