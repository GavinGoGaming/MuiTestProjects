const API_URL = "https://www.patreon.com/api/oauth2/api/current_user";

export default async function getUserInfo({ accessToken }: Readonly<{accessToken: string}>) {
    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user info");
    }

    return await response.json();
};