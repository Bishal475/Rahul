

function validateUser(actual,expt){
    if(actual.password===expt.password){
        return true;
    }else{
        return false;
    }
}


module.exports.validate = validateUser;