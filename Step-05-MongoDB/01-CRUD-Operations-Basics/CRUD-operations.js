const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', function(request, response){
    response.send("Chal raha hai")
});
//----------------------------------------------------------------------------------------------------------------------------------
//creating user
app.get('/create', async function(request, response){
    let myUser = await userModel.create(
        {
            name: "Prashant",
            username: "iamsrpk02",
            email: "meprashanttyagi2000@gmail.com"
        }
    )
    response.send(myUser);
});

//----------------------------------------------------------------------------------------------------------------------------------
//1. -->updating user's name on the basis of username, jiska username 'iamsrpk02' hoga uska naam update karke "Karan" kardo      
app.get('/update', async function(request, response){
    let updatedUser = await userModel.findOneAndUpdate({username: "iamsrpk02"}, {name: "Karan"}, {new: false});
    response.send(updatedUser);
});

/*
2. --> new: true: This option specifies whether the method should return the document as it was before or after the update.

        If new: false (or if the new option is omitted), findOneAndUpdate will return the document as it was before the update.
        If new: true, findOneAndUpdate will return the document after the update has been applied.

3. --> If you set new: false in the findOneAndUpdate method and then access the /update route, the process will work as follows:

app.get('/update', async function(request, response){
    let updatedUser = await userModel.findOneAndUpdate(
        { username: "iamsrpk02" }, 
        { name: "Karan" }, 
        { new: false }
    );
    response.send(updatedUser);
});
What happens:
Database Update: The document in the database with username: "iamsrpk02" will still be updated to have name: "Karan".

Returned Document: The updatedUser variable will contain the document as it was before the update. So, if the original name was "Prashant", updatedUser will have name: "Prashant".

Response:
Returned Name: When you access the /update route, the response sent back will show the name as "Prashant", even though the document in the database has been updated to "Karan".
In summary, using new: false returns the document as it was before the update. But the actual name in the database will still be updated to "Karan". 
*/

//----------------------------------------------------------------------------------------------------------------------------------
//find any document
app.get('/read', async function(request, response){
    let readUser = await userModel.find();
    response.send(readUser);
});

// agar mujhe koi particular user ko read karna hai toh fir hum 'find()' method ke andar koi particular attribute daal sakte hain like 'userMode.find({username: iamsrpk02})' i.e. jiska username 'iamsrpk02' hoga, kewal wahi read hoga documnet, and yeh find method array return karta hai, waise hi hum 'findOne' kaa bhi use kar sakte hain or yeh object return karta hai bas itna hi fark hai dono mein

//-----------------------------------------------------------------------------------------------------------------------------------
//delete any document
app.get("/delete", async function(request, response) {
    let deletedUser = await userModel.findOneAndDelete({name: "Karan"});
    response.send("below user deleted:");
    response.send(deletedUser);
});

/* Karan naam ka user(document) delete ho gaya hai,  ab hum 'read' wale route par jaayenge toh fir humein bas ab ek user show hoga
    Prashant naam kaa.
*/

app.listen(3000);