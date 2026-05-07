import { useRef, useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { BACKEND_URL } from "../config";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        // ✅ Validation
        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        try {
            setLoading(true);

            await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });

            alert("You have signed up successfully");
            navigate("/signin");

        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-500 to-black flex flex-col items-center">
            <h1 className="text-4xl text-black md:text-6xl font-bold text-center mt-10 mb-32">
                Second Brain
            </h1>

            <div className="bg-white rounded-xl border min-w-48 p-8">
                
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />

                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={signup} 
                        loading={loading} 
                        variant="primary" 
                        text={loading ? "Signing up..." : "Signup"} 
                        fullWidth={true} 
                    />
                </div>

            </div>
        </div>
    );
}