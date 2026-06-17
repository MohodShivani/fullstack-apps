interface UserFormProps {
  showUsername?: boolean;
  username?: string;
  email: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserForm = ({
  showUsername,
  username,
  email,
  password,
  onChange,
}: UserFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      {showUsername && (
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          className="w-full border p-3 rounded-lg"
        />
      )}

      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="w-full border p-3 rounded-lg"
      />
    </div>
  );
};