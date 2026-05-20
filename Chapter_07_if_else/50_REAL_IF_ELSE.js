let isLoggedin = true;
let userRole = "editor";
if (isLoggedin) {
    if (userRole === "admin") {
        console.log("Welcome Admin! You have full access.");
    } else if (userRole === "editor") {
        console.log("Welcome editor User! You have Edit  access.");
    }
} else if (userRole === "Viewer User") {
    console.log("Welcome Viewer User! You have Viewer access .");
} else {
    console.log("Please log in to access the system.");
}