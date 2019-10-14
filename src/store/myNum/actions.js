import {RANDOM_NUM} from "./const"
export default {
    [RANDOM_NUM](context){
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 100)
            context.commit(RANDOM_NUM, randomNum)
        }, 1000)
    }
}