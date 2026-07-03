class APIClinet {
    public baseUrl: string;//child class can use this variable as it is public to the class
    protected timeout: number; //is oinly accessible within the class and its subclasses -next class/child class
    private secretKey: string; //child class cannot use this variable as it is private to the class


    constructor(baseUrl: string, timeout: number, secretKey: string) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.secretKey = secretKey;
    }
    private getAuthHeader(): string {
        return `Bearer ${this.secretKey}`;
    }
    //Public funvction within my clas can call the private function within the same class
    public sendRequest(path: string): void {
        console.log("GET" + this.baseUrl + path);
        console.log("Timeout: " + this.timeout);
        console.log("Auth Header: " + this.getAuthHeader());

    }
}



;//child class can use this variable as it is public to the class
//  protected timeout: number; //is oinly accessible within the class and its subclasses -next class/child class
//  private secretKey: string; //child class cannot use this variable as it is private to the class


class userAPIClient extends APIClinet {
    getUser(): void { //if nothing mentioned is Public in Nature
        console.log("Fetch User (timeout: " + this.timeout + "): " + "ms");
        console.log("URL : " + this.baseUrl + "/user");
    }
}
