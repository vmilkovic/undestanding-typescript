let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Vedran';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

// Crashes the script - thats why never - while loop also "returns" never
generateError('An error occurred!', 500);
