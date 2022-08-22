export class user_reg {
  email:string;
  password:string;
  status:string;
  verified:string;
  register_date:string;
}

export class member_reg {
  user_id:Number;
  program_id:Number;
  name:string;
  location:string;
  mobile:Number;
  status:string;
  reg_date:string;
  cycle_date:string;
}

export class pay_data {
  user_id:Number;
  member_id:Number;
  pay_date:string;

}


export class login {
  email:string;
  password:string;
}

export class pending {
  user_id:number;
  status:string;
}


export class userdata {
  user_id:number;
  token:string;
  status:string;
}

export class member_edit {
  user_id:Number;
  member_id:Number;
  program_id:Number;
  name:string;
  location:string;
  mobile:Number;
  status:string;
  reg_date:string;
  cycle_date:string;
}


export class Masterclass {
//
}
