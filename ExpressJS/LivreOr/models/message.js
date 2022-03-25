let connection = require("../config/db");
let moment = require("../config/moment");

class Message {
    constructor(row) {
        this.row = row;
    }

    // Getter
    get content() {
        return this.row.content;
    }

    get created_at() {
        //return this.row.created_at;
        return moment(this.row.created_at);
    }

    get id() {
        return this.row.id;
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
            console.log("rows:", rows);
            //callback(rows);
            callback(rows.map((row) => new Message(row)));
        });
    }

    static find(id, callback) {
        console.log("id=", id);
        connection.query(
            "SELECT * FROM message WHERE id = ?",
            [id],
            (err, rows) => {
                if (err) throw err;
                console.log("row=", rows[0]);
                callback(new Message(rows[0]));
            }
        );
    }
}

module.exports = Message;
