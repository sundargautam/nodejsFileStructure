const appConfig = require('../config/index');
const appLoader = async(app)=>{

    app.listen(appConfig.port,(err)=>{
        if (err) {
            console.log("error");
        }
    },()=>{
    
        console.log("Listenting");
    })

    
    

}

module.exports = appLoader;