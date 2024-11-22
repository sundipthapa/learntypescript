const Users = {
  name: "hello",
  phone: 23423,
  isActive: true,
};

function createUser({ name: string, phone: number, isActive: boolean }) {}
createUser({ name: "Hello", phone: 23423, isActive: true });

let newUsers = {
  name: "world",
  phone: 23423,
  isActive: true,
  email: "@gmail.com",
};
createUser(Users);

function createCourse(): { name: string; price: number } {
  return { name: "hello", price: 232 };
}
const course = createCourse();

console.log("Course", course);

//Type Alias
type Users = {
  name: string;
  email: string;
  isActive: false;
};

function createUsers(users: Users): Users {
  return { name: "Sandy", email: "lakhanmgr123@gmail.com", isActive: false };
}
createUsers({
  name: "Sandy",
  email: "lakhanmgr123@gmail.com",
  isActive: false,
});

//Read only and optional
type myUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credentialDetails?: number; //? is user for making it optional if you remove ? error on the user below
};
let user: myUser = {
  _id: "1234",
  name: "hello",
  email: "@gmail",
  isActive: true,
};
user.name = "hello@gmail.com";
// user._id="234" //this will show you a error

type cardNumber = {
  cardNumber: number;
};
type cardDate = {
  cardDate: number;
};
type cardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };
export {};
