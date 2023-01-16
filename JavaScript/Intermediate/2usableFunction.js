function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all accsess`
        case "subadmin":
            return `${name} with access to create/delete course`
        case "testprep":
            return `${name} with access to create/delete tests`
        case "user":
            return `${name} consume all content`    
        default:
            return `${name }trial user`
    }
}
getUserRole("Rishav", "admin");
var getrole = getUserRole("Rishu", "subadmin");
console.log(getrole);


// var getUserRole = function (name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all accsess`
//         case "subadmin":
//             return `${name} with access to create/delete course`
//         case "testprep":
//             return `${name} with access to create/delete tests`
//         case "user":
//             return `${name} consume all content`    
//         default:
//             return `${name }trial user`
//     }
// }