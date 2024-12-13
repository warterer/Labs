const compose = (...fns) => {
    const handlers = [];
    const composed = (x) => {
        if (fns.length === 0) {
            return x;
        }
        let res = x;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                res = fns[i](res);
            }
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined;
        }
    }
    composed.on = (name, handler) => {
        if (name === "error" && typeof(handler) === "function")
        {
            handlers.push(handler);
        }
    };
    return composed;
};