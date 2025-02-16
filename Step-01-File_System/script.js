const fs = require('fs');

/*
--> Jaise hum node modules install karte hain using "npm install" command kaa use karke toh ismein bhot saare packages insall
    hote hain....and node-modules naam ke folder mein bhot saare packages hote hain, or ussi mein se ek package hota hai
    "File-system" naam kaa toh hum saare packages install naa karke, kewal ek individual package par kaam kar rahe hain
    i.e., File-system.

In Node.js, const fs = require('fs'); is used to include the built-in File System module (fs) in your script. The fs
module provides an API for interacting with the file system, allowing you to read from and write to files, among other
file operations.

Here’s a brief overview of what this line of code does:

require('fs'): This is a CommonJS module system function in Node.js that imports the fs module. The fs module is part
of Node.js's core modules and provides various file system-related functionalities.

const fs: This creates a constant variable named fs that holds the reference to the fs module. By assigning the fs module
to const fs, you can use fs to access all the methods and properties provided by the fs module.

For example, with fs, you can perform operations like:

fs.readFile(path, callback): Reads the content of a file.
fs.writeFile(path, data, callback): Writes data to a file.
fs.appendFile(path, data, callback): Appends data to a file.
fs.unlink(path, callback): Deletes a file.
fs.readdir(path, callback): Reads the contents of a directory.

*/

/*

1. Syntax of write file:-  fs.writeFile(write-your-file-name, data[, options], callback)---------------------------------------------

*/

// fs.writeFile("myFile.txt", "Hey hello my name is Prashant", function(err){
//     if(err){
//         console.log(err)
//     }

//     else{
//         console.log("File created");
//     }
// })

/*

2. Syntax of append file:-  fs.appendFile(file-name, data[, options], callback)---------------------------------------------

*/
// fs.appendFile("myFile.txt", "And I hold an UG Degree", function(err){
//     if(err){
//         console.log(err)
//     }

//     else{
//         console.log("File created");
//     }
// })


/*
3. Syntax of copy file:-  fs.copyFile(file-name-youWantToCopy, newFileName, callback)---------------------------------------------
*/

// fs.copyFile("myFile.txt", "copiedFile.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File Copied Successfully");
// })

/*
4. Syntax of unlink file:-  fs.unlink(path, callback)-------------------------------------------------------------
    
    iss function se file delete ho jaati hai
*/

// fs.unlink("myFile.txt", function(err){ // 'myFile.txt' ke naam se jo file bani huyi hai woh delete ho jaayegi
//     if(err) console.log(err);
//     else console.log("File deleted successfully");
// })

/*
5. Syntax of rmdir file:-  fs.rmdir(path[, options], callback)-------------------------------------------------------------
    
    iss function se folder delete ho jaata hai
*/

// fs.rmdir("./New Folder", function(err){
//     if(err) console.log(err.message)
//     else console.log("Folder Deleted");
// })

/*
Error: no such file or directory, rmdir 'C:\Users\ASUS\Documents\PRASHANT\Web Dev\Node Js\Step-01\New Folder'
folder delete nahin ho paaya because folder ke andar ek file padi hai, i.e. jab folder khaali hoga tabhi delete ho sakta hai,
agar folder khaali nahin hoga toh fir delete nahin ho sakta, but agar fir bhi delete karna hai folder ko toh fir main 'options' kaa
use karunga, see the syntax above(5), and line no. 89 par dekh sakte hain ki maine usmein 'options' kaa use nahin kiya hai,
ab hum karenge 'options' kaa use jisse folder hum delete kar sakte hain.
*/

// fs.rm("./New Folder", {recursive: true}, function(err){
//     if(err) console.log(err.message)
//     else console.log("Folder Deleted");
// })
// "New Folder" naam kaa folder delete ho gaya. 

/* 
6. Syntax of readFile:- fs.readFile(path[, options], callback)--------------------------------------------------------------------

fs.readFile("myFile.txt", 'utf8' ,function(err, data){
    if(err) console.log(err.message);
    else console.log("Read successfully", data); //OUTPUT: Read successfully:  Hey hello my name is Prashant And I hold an UG Degree
})

"myFile" naam ki jo file hai iske andar jo bhi likha hua hoga woh humne read karli or print kardi and iss file ke andar 
ek text pada hua tha (i.e., "Hey hello my name is PrashantAnd I hold an UG Degree") and yeh humne read kar liya or output
bhi print kar diya see above.
*/

//-----------------------------------------------------------------------------------------------------------------------------------

/*
7. Syntax of create folder(Asynchronous Method: fs.mkdir):- fs.mkdir(path[, options], callback)

    The fs.mkdir method allows you to create a directory asynchronously. It takes a path to the directory
    and a callback function. If you want to create nested directories, you should also use the recursive option.

    { recursive: true }: This option ensures that the method creates nested directories if needed. If recursive
    is set to false or omitted, fs.mkdir will fail if the parent directory does not exist.
*/
// Create the directory
// fs.mkdir("newFolder", { recursive: true }, (err) => { //"newFolder" naam kaa ek folder create ho jaayega
//     if (err) {
//         console.error('Error creating directory:', err);
//     } 
    
//     else {
//         console.log('Directory created successfully');
//     }
// });
//-----------------------------------------------------------------------------------------------------------------------------------

/*
8. Syntax of create folder(Synchronous Method: fs.mkdirSync):- fs.mkdirSync(path[, options])

    The fs.mkdirSync method is the synchronous counterpart to fs.mkdir. It will block the execution
    of your script until the directory is created.

    { recursive: true }: Allows creating nested directories. Omit or set to false to avoid creating
    nested directories if they don’t exist.
*/

  // Create the directory synchronously
    // fs.mkdirSync("newFolder2", { recursive: true }, function(err){
    //     if(err){
    //         console.error('Error creating directory:', err.message);
    //     }

    //     else{
    //         console.log('Directory created successfully');
    //     }
    // });

//---------------------------------------------------------------------------------------------------------------------------------

//9. Creating Nested Folder/Directiories
/*
Both fs.mkdir and fs.mkdirSync can handle nested directories if you use the recursive option. For example,
if you want to create a directory structure like parent/child, you can do:
*/
fs.mkdir("parent/child", { recursive: true }, function(err) {
    if (err) {
        console.error('Error creating directory:', err);
    } 
    
    else {
        console.log('Directory created successfully');
    }
});



