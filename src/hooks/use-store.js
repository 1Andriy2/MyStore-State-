import { useEffect, useState } from "react";
import { store } from '../Store';

export default function useStore(selector) {
    const [state, setState] = useState(selector(store.getState()))
    useEffect(() => store.addSubscribe(state => setState(selector(state))), [])
    return state
}

