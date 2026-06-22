export default function log(message) {
    console.log("[LOG]-Sumit" + message);
}

export function log(message) {
    console.log(["LOGS"] + message);
}
