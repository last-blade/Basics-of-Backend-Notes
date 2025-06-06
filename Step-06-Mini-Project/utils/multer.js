const crypto = require("crypto");
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads');
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function(err, bytes) {
            if (err) {
                return cb(err);
            }
            console.log(bytes.toString("hex"));
            const fileName = bytes.toString("hex") + path.extname(file.originalname);
            cb(null, fileName);
        });
    }
});

const upload = multer({ storage: storage });

module.exports = upload;

// app.get("/test", function (request, response) {
//     response.render("test.ejs");
// })

// app.post("/upload", upload.single("image"), function(request, response){
//     console.log(request.file);
// })
