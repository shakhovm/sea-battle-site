import {
    REFRESH,
    CHANGE_GAME_BEGIN,
    MAKE_SHOOT,
    GENERATE_FIELD
} from "../actions/type";
import Field from "../components/SeaBattle/src/Field";


export default function gameState(state, action) {
    switch (action.type) {

        case REFRESH:

            return {...state, my_field: new Field().createField(),
                comp_field: new Field().createField(), gameBegin: false};

        case CHANGE_GAME_BEGIN:
            return {...state, gameBegin: true };

        case MAKE_SHOOT:

            if (!state.gameBegin)
                return state;

            const { my_field, comp_field } = state;

            let shot = comp_field.shoot(action.row, action.col);

            if (shot === -1)
                return state;

            if (shot === 2) {
                alert("YOU WON!");

                return {...state, my_field: new Field().createField(),
                    comp_field: new Field().createField(), gameBegin: false};
            }

            if (shot === 0) {
                while(true) {
                    shot = my_field.makeRandomShoot();
                    if (shot === 2) {
                        alert("You lost!");
                        return {...state, my_field: new Field().createField(),
                            comp_field: new Field().createField(), gameBegin: false};
                    }
                    if (shot === 0)
                        break;
                }
            }

            return {...state, my_field: my_field.copy(), comp_field: comp_field};

        case GENERATE_FIELD:
            return {...state, my_field: new Field().createField()};

        default:
            return state;
    }
}