export default class Outreach{
    constructor(type, date, time, message){
        this._type = type;
        this._date = date;
        this._time = time;
        this._message = message;
    }

    get type() {
        return this._type
    }

    get date() {
        return this._date
    }

    get time() {
        return this._time
    }

    get message() {
        return this._message
    }
}