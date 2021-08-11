import * as bcrypt from "bcryptjs";

function hashPassword(password: string): string {
    const salt: string | number | undefined = bcrypt.genSaltSync(7);
    const hashedPassword: string = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

function isPassword(password: string, hashedPassword: string): boolean {
    /* Compares a given password against the hash */
    let isValid: boolean = bcrypt.compareSync(password, hashedPassword);
    return isValid;
}

export { hashPassword, isPassword };