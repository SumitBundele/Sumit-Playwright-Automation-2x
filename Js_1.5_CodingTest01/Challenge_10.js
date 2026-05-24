function findFirstCriticalJsBasicsBug(bugs) {
    for (let bug of bugs) {
        if (bug.severity === "critical") {
            return bug.title;
        }
    }

    return "No critical bug";
}