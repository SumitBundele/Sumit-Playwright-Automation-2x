let retry = 0;
do {
    console.log("Executing the code block at least once");
    console.log("Retrying.....", retry);
    retry++;
}
while (retry < 3);

//it will alwasy execute at least once
// because of the do while loop and
//  it will check the condition
//  after executing the code block once.

//we wil use this code in automation to fetch locators and
// perform actions on them
//  until we get the desired result or
//  we reach the maximum retry limit.