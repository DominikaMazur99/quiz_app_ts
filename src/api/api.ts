declare var process: {
    env: {
        REACT_APP_MY_API_KEY: string;
    };
};

const apiKey = process.env.REACT_APP_MY_API_KEY;

// Now, you can use apiKey throughout the file

export const MY_API_KEY = apiKey;
