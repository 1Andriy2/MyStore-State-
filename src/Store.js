const createStore = (initialState) => ({
    state: initialState,
    subscribe: new Set(),
    addSubscribe: function(listener) { this.subscribe.add(listener); return () => this.subscribe.delete(listener) },
    setState: function(newState) { this.state = newState(this.state); this.subscribe.forEach(ls => ls(this.state))},
    getState: function() { return this.state }
})

export const store = createStore({
    text: "dtsd",
    counters: []
})

