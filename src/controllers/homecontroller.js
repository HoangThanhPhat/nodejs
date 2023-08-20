
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getmainPage = (req, res) => {
    return res.render('test/main.ejs');
}
// //object : {
//     key : "", 
//     value : ""
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getmainPage: getmainPage,
}