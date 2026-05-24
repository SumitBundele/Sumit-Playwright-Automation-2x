function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    return (passed * 2) - failed;
}