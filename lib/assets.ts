const API_URL = "http://localhost:8080";

function authFetch(url: string, options: RequestInit = {}) {
    const apiKey = localStorage.getItem("apiKey");

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            "X-API-KEY": apiKey ?? "",
        },
    });
}

const version: string = "0.1.0";
const build: string = "0100";

export { version, build, API_URL, authFetch }; 

