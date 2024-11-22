var Users = {
    name: "hello",
    phone: 23423,
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, number = _a.phone, boolean = _a.isActive;
}
createUser({ name: "Hello", phone: 23423, isActive: true });
var newUsers = {
    name: "world",
    phone: 23423,
    isActive: true,
    email: "@gmail.com",
};
createUser(Users);
function createCourse() {
    return { name: "hello", price: 232 };
}
var course = createCourse();
console.log("Course", course);
function createUsers(users) {
    return { name: "Sandy", email: "lakhanmgr123@gmail.com", isActive: false };
}
