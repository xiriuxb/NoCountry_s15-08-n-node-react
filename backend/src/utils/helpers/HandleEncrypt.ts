import bcrypt from 'bcrypt';

/**
 * Plain string password encrypt using salt and bcrypt
 * @param password - Password to encrypt
 * @returns Promise<string> - Encrypted password
 */
export const encrypt = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

/**
 * Compare plain password with encrypted password
 * @param passwordPlain - Plain password
 * @param hash - Encrypted password
 * @returns Promise<boolean> - True if password is valid
 */
export const compare = async (passwordPlain: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(passwordPlain, hash);
};
