const scoresKey = "scores"

export function SendScoreToServer(score) {
    window.localStorage.setItem(scoresKey, score)
}

export function GetScoreFromServer() {
    while (window.localStorage.getItem(scoresKey) == undefined) {
        window.localStorage.setItem(scoresKey, 0)
    }

    return Number(window.localStorage.getItem(scoresKey))
}