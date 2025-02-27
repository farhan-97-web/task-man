import { useState } from "react";
import Auth from "../components/Auth";
import TaskBoard from "../components/TaskBoard";

const Home = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
            <style>{`
                .app-container {
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .header {
                    background: #007bff;
                    color: white;
                    padding: 10px;
                    font-size: 24px;
                }
            `}</style>
            <div className="app-container">
                <div className="header">Task Management App</div>
                <Auth user={user} setUser={setUser} />
                {user && <TaskBoard />}
            </div>
        </div>
    );
};

export default Home;
