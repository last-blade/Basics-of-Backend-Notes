/*
1. NPM:- Node Package Manager, npm ek play-store ki tarah hai jaise hum apps install kar sakte hain playstore se, same
        waise hi npm bhi ek store hai jahan se hum pacakges ko insatll kar sakte hain and hum individual packages ko bhi
        install kar sakte hain called "dependencies".(NPM mein pehle node ke hi packages milte thay, fir baadmein reactjs,
        angular, etc. ke bhi packages aa gaye ismein toh fir company walon ne pehle kewal node ke packages ke liye hi
        banaya tha npm but fir ismein alag alag packages aane lag gaye node ke alwala like reactjs, angular isliye fir
        company walon ne NPM ki full form ko deprecate kar diya).


2. Node Module:- NodeJs core mein jo install aata hai woh hota hai modules.
3. Node Packages:- NPM se jo download karte hin woh hote hain packages. 
*/

/*------------------------------------------------------------------------------------------------------------------------------------
--> How to download package from npm, just go to npm website and select your package name
and run the command "npm install package-name"

-->npm install one-liner-joke , isse ek file create ho jaayegi pacakge-lock.json and iss file mein dependencies ke naam se ek object 
dikhega and node_modules kaa bhi apne aap ek folder create ho jaayega or usmein package dikh jaayega poora like this below:-
       "dependencies": {
        "one-liner-joke": "^1.2.2"
      }
      1.2.2 is the package version


->How to uninstall package: "npm uninstall package-name"
-->npm ininstall one-liner-joke
*/



/*
Conclusion:- toh basically NPM kaa kaam hai installing, uninstalling, and managing the dependencies and dev dependencies 
        
dependencies:- suppose maine ek package install kiya "hello" naam kaa and woh package kisi or pacakge par depend karta hai like
                package "abc" par depend karta toh fir jab main "hello" naam kaa package install karunga toh iske saath mein
                "abc" naam kaa pacakge bhi install ho jaayega because "hello" naam ke pacakge "abc" package par depend karta hai
                i.e. "abc" package ke bina "hello" pacakge nahin chalega

dev-dependencies:- aise packages jo sirf development mein hi kaam aane wale hain                
*/

//------------------------------------------------------------------------------------------------------------------------------------

/*
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "run": "dev"
  }


  jaise humne dekhi hongi bhot saari scripts hoti hain jaise ki "npm run dev", "npm run test", "npm start", etc see above code,

  toh aakhir yehe hoti kya hain or kahin par hum "start" likhte hain or kahin par "test" likhte hain, Why ?

  toh jab bhi hum 'node' or 'npm' install karte hain toh fir humare computer or operating system mein automatically 'start','test',
  etc. jaise words bhi add ho jaate hain and fir CMD mein hum jab bhi 'npm run dev' jaisi command execute karate hain toh fir
  operating system yeh command check karta hai ki yeh command or script added hai ki nahin mere andar, agar hai toh fir
  command execute ho jaayegi otherwise error aayegi
*/