import { ref } from "vue";

const scoresKey = "scores"

export const Scores = ref(GetScoreFromServer());

export function SendScoreToServer() {
    window.localStorage.setItem(scoresKey, Scores.value)
}

export function GetScoreFromServer() {
    while (window.localStorage.getItem(scoresKey) == undefined) {
        window.localStorage.setItem(scoresKey, 0)
    }

    return Number(window.localStorage.getItem(scoresKey))
}