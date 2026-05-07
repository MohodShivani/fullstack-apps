import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react"

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;


        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            });

            const jwt = response.data.token;

    
            localStorage.setItem("token", jwt);

            alert("Login successful");
            navigate("/dashboard");

        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || "Signin failed");
            
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
                <Input reference={passwordRef} placeholder="Password"  />

                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={signin} 
                        loading={loading} 
                        variant="primary" 
                        text={loading ? "Signing in..." : "Signin"}
                        fullWidth={true} 
                    />
                </div>

            </div>
        </div>
    );
}