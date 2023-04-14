
function intApp() {
    try {
        conectDatabase();
    } catch (error) {
        throw new Error('Could not connect to database!');
    }
}

function conectDatabase() {
    let user = determieSupportAgent(ticket)
    if (!isValid(user)) {
        throw new Error('Invalid input!');
    }
    dataBase.connect();
}

function determieSupportAgent(ticket) {
    return ticket.requestType === 'unknown' ? findStandartAgent() : findAgentReqyestType(ticket.requestType)
}

function isValid(user) {
    return !user.email.includes('@') || user.password.lenght < 7;
}