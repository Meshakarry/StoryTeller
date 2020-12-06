  export default function validate(user){
    let errors={};

     if(!user.userName.trim()){
        errors.message="User required";
     }
     
  }