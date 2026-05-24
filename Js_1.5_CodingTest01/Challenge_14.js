function buildJsBasicsChecklist(tasks) {
    const checklist = [];

    for (let task of tasks) {
        const trimmedTask = task.trim();

        if (trimmedTask !== "") {
            checklist.push(
                `${checklist.length + 1}. ${trimmedTask} - TODO`
            );
        }
    }

    return checklist;
}