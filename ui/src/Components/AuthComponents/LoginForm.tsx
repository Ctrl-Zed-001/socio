

const LoginForm = () => {
    return (
        <div className="login-section">
            <h1 className="font-medium text-xl">Login</h1>
            <div className="signup-form mt-6">
                <input type="text" placeholder="USERNAME / EMAIL" className="p-2 rounded border text-xs tracking-wider w-8/12 my-2" />
                <input type="password" placeholder="PASSWORD" className="p-2 rounded border text-xs tracking-wider w-8/12 my-2" />
                <br />
                <button className="bg-theme font-medium px-6 py-1 rounded w-8/12 mt-4">Login</button>
                <p className="mt-6 font-light text-sm">New to reddit? <span className="font-semibold text-theme prev-button cursor-pointer">SIGNUP</span></p>
            </div>
        </div>
    );
};

export default LoginForm;
