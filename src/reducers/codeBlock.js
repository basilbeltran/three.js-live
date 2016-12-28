import {
    CODE_BLOCK_TRANSPARENCY,
    CODE,
    DISABLE_IFRAME_UPDATE,
    ENABLE_IFRAME_UPDATE
} from '../actions';

const initialState = {
    codeBlockTransparency:.85,
    code:`
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>title</title>
          </head>
          <body>
        asdfknasdfkj
        </body>
      </html>
    `,
    updateScene:true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CODE_BLOCK_TRANSPARENCY:
            return {...state, codeBlockTransparency:action.data};
        case CODE:
            return{...state, code:action.data, example: action.path || state.example, updateScene: action.path ? true : false};
        case DISABLE_IFRAME_UPDATE:
            return{...state, updateScene:false}
        case ENABLE_IFRAME_UPDATE:
            return{...state, updateScene:true}
        default:
            return state;
    }
}
