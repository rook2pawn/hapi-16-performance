**anatomy of a request in hapi@16 (i.e. 16.6.2)** . Ran it with debugger and -inspect flag using chrome dev tools to trace it

# Chapter 1 : Decoration Podium.
https://github.com/hapijs/hapi/blob/v16.6.2/lib/request.js#L63
Podium.decorate(this, internals.emitter)  -> internals.Podium.call(target, null);

// EACH request instantiates a new Podium event emitter referred to as "target"

    1a. this._eventListeners = Object.create(null);
    this._notificationsQueue = [];
    this._eventsProcessing = false;
    this._sourcePodiums = [];
    this.onPodiumError = null;

// 5 assignments (simple)


1b. https://github.com/hapijs/podium/blob/v1.3.0/lib/index.js#L62-L68

    Object.keys(source._eventListeners).forEach((name) => {
        target._eventListeners[name] = {
        handlers: null,
        flags: source._eventListeners[name].flags
        };
    });
This copy 3 flags (disconnect, finish, peek) to the "target" (new Podium).
It is faster to do line by line assignments (proof available) then to run function declaration per assignment.

AKA

    target._eventListeners.disconnect = {
    handlers: null,
    flags: source._eventListeners.disconnect.flags
    }
    target._eventListeners.peek = {
    handlers: null,
    flags: source._eventListeners.peek.flags
    }
    target._eventListeners.finish = {
    handlers: null,
    flags: source._eventListeners.finish.flags
    }

we also implement this as a new function specifically for decorateRequest
so it won't interfere elsewhere.

# Chapter 2. new Hoek.Bench() .... they take internal measurements.
https://github.com/hapijs/hoek/blob/v4.2.0/lib/index.js#L759-L782

    exports.Bench = function () {
    this.ts = 0;
    this.reset();
    };
    exports.Bench.prototype.reset = function () {

    this.ts = exports.Bench.now();
    };
    exports.Bench.prototype.elapsed = function () {

    return exports.Bench.now() - this.ts;
    };
    exports.Bench.now = function () {

    const ts = process.hrtime();
    return (ts[0] * 1e3) + (ts[1] / 1e6);
    };

We really don't need nanosecond precision and we can save just a bit by doing

    this.info.received = Date.now();

and calculate elapsed whenever we need it

    let elapsed = Date.now - this.info.received

# Chapter 3. RegExp
https://github.com/hapijs/hapi/blob/v16.6.2/lib/request.js#L90

    host: req.headers.host ? req.headers.host.replace(/\s/g, '') : ''

This regex can be precalculated

    internals.wsRegExp = new RegExp(/\s/g);

# Chapter 4. Protect

new Protect -> This is a domain based error control.


    this.domain = Domain.create();
    this.domain.on('error', this._onError.bind(this));
    request.onPodiumError = (err) => this._onError(err);
