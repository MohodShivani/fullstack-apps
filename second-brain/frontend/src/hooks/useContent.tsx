import { useEffect, useState } from "react";
import API from "../services/api";

export function useContent() {
    const [contents, setContents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function refresh() {
        try {
            const response = await API.get("/api/v1/content");

            console.log("API RESPONSE:", response.data);

            setContents(response.data.contents); // ✅ FIXED
            setLoading(false);

        } catch (error: any) {
            console.error("Error fetching content:", error.response?.data);
            setContents([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        refresh();
    }, []);

    return { contents, refresh, loading };
}