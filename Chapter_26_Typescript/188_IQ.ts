let responsecode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCode(code: number[]): number[] {
    return code.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All codes", responsecode);

//Output
//All codes [ 200, 201, 404, 500, 302, 403 ]
console.log("Failed Codes->", getFailedCode(responsecode));

//Output
//Failed Codes-> [ 404, 500, 403 ]
