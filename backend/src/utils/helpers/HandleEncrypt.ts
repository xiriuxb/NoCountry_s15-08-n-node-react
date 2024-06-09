import bcrypt from 'bcrypt';

/**
 * Plain string password encrypt using salt and bcrypt
 * @param password - Password to encrypt
 * @returns Promise<string> - Encrypted password
 */
export const encrypt = async (password?: string): Promise<string> => {
    try {
        if (!password) throw Error('Password is required');

        const salt = await bcrypt.genSalt(15);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

/**
 * Compare plain password with encrypted password
 * @param passwordPlain - Plain password
 * @param hash - Encrypted password
 * @returns Promise<boolean> - True if password is valid
 */
export const compare = async (passwordPlain?: string, hash?: string): Promise<boolean> => {
    try {
        if (!passwordPlain || !hash) throw new Error('passwordPlain or hash is required');
        return await bcrypt.compare(passwordPlain, hash);
    } catch (error) {
        throw error;
    }
};
