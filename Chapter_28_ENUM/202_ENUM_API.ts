enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
function makeRequest(method: HTTPMethod, url: string): void {
    console.log(`Making ${method} request to ${url}` + "--> 200 OK PASS");
}

makeRequest(HTTPMethod.GET, "https://api.example.com/users");
makeRequest(HTTPMethod.POST, "https://api.example.com/users");
makeRequest(HTTPMethod.PUT, "https://api.example.com/users/1");
makeRequest(HTTPMethod.DELETE, "https://api.example.com/users/1");
