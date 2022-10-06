import { 
    WALLET_CONNECT_SUCCESS 
} from "../types/app.types";

const auth = {
    user: {},
    currentWallet: "",
    currentChainId: "",
    otherUser: {},
    balance: 0,
    walletStatus: false,
}

export function DApp(state = auth, action) 
{
    switch (action.type) {
        case WALLET_CONNECT_SUCCESS:
            return {...state, ...action.payload};
        default:
            return { ...state };
    }
}
