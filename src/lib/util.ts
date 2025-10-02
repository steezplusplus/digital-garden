/**
 * Sleep function that returns a promise that resolves after the specified delay
 * @param ms - Number of milliseconds to wait
 * @returns Promise that resolves after the delay
 */
export const sleep = (ms: number): Promise<void> => {
    if (process.env.NODE_ENV === 'production') {
        console.warn('sleep() used in production');
    }
    return new Promise((resolve) => setTimeout(resolve, ms));
};