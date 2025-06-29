import inquirer from "inquirer";
import qr  from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        "type": "input",
        "name": "URL",
        "message": "What is the URL? ",
    }
]).then((answer) => {
    let qr_svg = qr.image(answer["URL"], 
        {
            type: "png",
         }
    );
    qr_svg.pipe(fs.createWriteStream("QR_Code.png"));

    fs.writeFile("./textQR.txt",answer['URL'],(err) => {
        if (err) throw err;
    })
}).catch((error) => {
    throw error;
});
