/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([{message:"type in your url" , name:"URL"}])
.then((answers) => {
    const url1 = answers.URL;
    var qr_svg = qr.image(url1) 
    qr_svg.pipe(fs.createWriteStream('qr_img1.png'));
    fs.writeFile("URL.txt" , url1 , (err)=>{
        if(err) throw err;
        else{
            console.log("file updated");
        }
    });
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});
