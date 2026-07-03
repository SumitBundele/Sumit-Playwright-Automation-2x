interface BugReport {
    Id: number;
    title: String;
    severity: String;
    stepToReproduce: string[];
}

//we can use this object to create multiple bug reports
const bugReport1: BugReport = {
    Id: 1,
    title: "Login button not working",
    severity: "High",
    stepToReproduce: ["Step1", "Step2", "Step3"]
}

const bugReport2: BugReport = {
    Id: 2,
    title: "Signup button not working",
    severity: "Medium",
    stepToReproduce: ["Step1", "Step2", "Step3"]
}

const bugReport3: BugReport = {
    Id: 3,
    title: "Contact support button not working",
    severity: "Low",
    stepToReproduce: ["Step1", "Step2", "Step3"]
}

const bugReport4: BugReport = {
    Id: 4,
    title: "Feedback button not working",
    severity: "High",
    stepToReproduce: ["Step1", "Step2", "Step3"]
}
