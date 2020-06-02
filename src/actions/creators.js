import { CHANGE_GAME_BEGIN, GENERATE_FIELD, MAKE_SHOOT, REFRESH } from "./type";

const generateField = () => ({type: GENERATE_FIELD });

const refreshField = () => ({ type: REFRESH });

const changeGameBegin = () => ( { type: CHANGE_GAME_BEGIN });

const makeShoot = (row, col) => ( { type: MAKE_SHOOT, row, col });

export { generateField, refreshField, changeGameBegin, makeShoot };