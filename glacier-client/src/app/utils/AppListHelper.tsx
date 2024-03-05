import React, { useEffect, useState } from "react";

let apps: any[] = [];

export async function getApps() {
    // Ensure data is loaded before resolving the promise
    await ensureDataLoaded();
    return apps;
}

export function getWithCategory(category: string) {
    return apps.filter(app => app.category.split(",").includes(category));
}

async function ensureDataLoaded() {
    if (apps.length === 0) {
        const response = await fetch('/applist.json');
        const data = await response.json();
        apps = data;
    }
}

export default function AppListHelper() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            ensureDataLoaded().then(() => {
                setLoaded(true);
            }).catch(err => {
                throw err;
            });
        }
    }, [loaded]);

    return null;
}
