import Navbar from "../Navbar/Navbar"

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            {children}
        </div>
    );
};
