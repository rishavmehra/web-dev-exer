var user = "admin";

switch (user) {
    case "admin":
        console.log("you get the full access");
        break;
    case "subadmin":
        console.log("you ge the update/delete access");
        break;
        
    default:
        console.log("okay you are not the user");
        break;
}
