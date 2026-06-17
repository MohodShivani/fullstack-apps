import { useState } from "react";
import { UserForm } from "../components/UserForm";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";

interface SignupFormData {
    username: string;
    email: string;
    password: string;
}

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<SignupFormData>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await signup(formData);

            console.log(response.data);

            alert("Signup Successful");
            navigate("/signin");
        } catch (error) {
            console.error(error);
            alert("Signup Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="flex flex-col w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <UserForm
                        showUsername={true}
                        username={formData.username}
                        email={formData.email}
                        password={formData.password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Already have an account?
                    <span className="text-blue-600 cursor-pointer ml-1" onClick={() => navigate("/signin")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;