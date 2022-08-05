import bcrypt from 'bcrypt'
export function encrypt (password){
     bcrypt.genSalt(10, (err, salt) => {
          if(err){
               console.error(err)
          }else{
               bcrypt.hash(password, salt, (err, hash) => {
                    if(err){
                         console.error(err)
                    }else{
                         console.log(`this is the hash ${hash}`)
                         return hash;
                    }
               })
          }
     })
}

export function compareHash (password, passwordHash){
     bcrypt.compare(password, passwordHash, (err, res) => {
          if(err){
               console.error(err)
          }else{
               if(res){
                    console.log("Password is correct")
                    return true;
               }else{
                    console.warn('Password is incorrect')
                    return false;
               }
          }
     })
}