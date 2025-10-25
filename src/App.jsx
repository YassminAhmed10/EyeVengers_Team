import React, { useState } from "react";
import {
    Visibility,
    Dashboard,
    CalendarMonth,
    Group,
    Badge,
    Settings,
    Logout,
} from "@mui/icons-material";

function Sidebar() {
    const styles = {
        sidebar: {
            width: "240px",
            backgroundColor: "#0096c7", // غمق بسيط عن #00b4d8
            borderRight: "1px solid #E0E0E0",
            height: "100vh",
            padding: "32px 24px",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        },
        logo: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            marginBottom: "40px",
        },
        logoText: {
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            fontSize: "1.1rem",
            margin: 0,
            textAlign: "center",
        },
        icon: {
            color: "#003366",
            fontSize: "30px",
        },
        nav: {
            display: "flex",
            flexDirection: "column",
            gap: "18px",
        },
        navItem: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 12px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#FFFFFF",
            fontWeight: "500",
            fontFamily: "'Open Sans', sans-serif",
            transition: "all 0.3s ease",
        },
    };

    const handleHover = (e, isHover) => {
        e.currentTarget.style.transform = isHover ? "translateX(8px)" : "translateX(0)";
        e.currentTarget.style.backgroundColor = isHover ? "#0077B6" : "transparent";
    };

    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>
                <Visibility style={styles.icon} />
                <h2 style={styles.logoText}>Mohab Khairy</h2>
                <h2 style={styles.logoText}>Eye Clinic</h2>
            </div>
            <nav style={styles.nav}>
                {[
                    [<Dashboard />, "Dashboard"],
                    [<CalendarMonth />, "Calendar"],
                    [<Group />, "Patients"],
                    [<Badge />, "Staff"],
                    [<Settings />, "Settings"],
                    [<Logout />, "Logout"],
                ].map(([icon, label]) => (
                    <a
                        href="#"
                        key={label}
                        style={styles.navItem}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        {icon}
                        {label}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

export default function EClinicSignup() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const styles = {
        wrapper: {
            minHeight: "100vh",
            backgroundColor: "#F4F6F7",
            display: "flex",
            fontFamily: "'Open Sans', 'Cairo', sans-serif",
            margin: 0,
            padding: 0,
        },
        content: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "330px",
        },
        box: {
            width: "720px",
            height: "380px",
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            transition: "transform 0.3s ease",
            padding: "40px",
        },
        title: {
            fontSize: "1.8rem",
            color: "#0077B6",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            marginBottom: "10px",
        },
        subtitle: {
            fontSize: "1rem",
            color: "#023047",
            marginBottom: "25px",
            fontFamily: "'Open Sans', sans-serif",
        },
        inputGroup: {
            width: "100%",
            marginBottom: "10px",
        },
        input: {
            width: "100%",
            padding: "12px 15px",
            marginBottom: "10px",
            border: "1px solid #90E0EF",
            borderRadius: "10px",
            fontSize: "0.9rem",
            boxSizing: "border-box",
            fontFamily: "'Open Sans', sans-serif",
            color: "#023047",
        },
        createAccountButton: {
            width: "100%",
            backgroundColor: "#0077B6",
            color: "#FFFFFF",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            fontSize: "1rem",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginBottom: "15px",
        },
        signInText: {
            fontSize: "0.9rem",
            color: "#023047",
            fontFamily: "'Open Sans', sans-serif",
        },
        signInLink: {
            color: "#0077B6",
            fontWeight: "600",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
        },
        passwordStrength: {
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "10px",
        },
        nameError: {
            color: "red",
            fontSize: "0.8rem",
            marginBottom: "10px",
        },
        confirmError: {
            color: "red",
            fontSize: "0.8rem",
            marginBottom: "10px",
        },
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (/[^a-zA-Z\s]/.test(value)) setNameError("Name must contain only letters");
        else setNameError("");
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 6)
            setPasswordStrength({ text: "Weak", color: "red" });
        else if (value.length < 10)
            setPasswordStrength({ text: "Medium", color: "gold" });
        else setPasswordStrength({ text: "Strong", color: "green" });
    };

    const handleConfirmChange = (e) => {
        const value = e.target.value;
        setConfirm(value);
        if (value !== password) setConfirmError("Passwords do not match");
        else setConfirmError("");
    };

    return (
        <div style={styles.wrapper}>
            <Sidebar />
            <div style={styles.content}>
                <div
                    style={styles.box}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <h1 style={styles.title}>Eye Clinic</h1>
                    <p style={styles.subtitle}>Create Your Account</p>

                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={styles.input}
                            value={name}
                            onChange={handleNameChange}
                        />
                        {nameError && <div style={styles.nameError}>{nameError}</div>}

                        <input type="email" placeholder="Email Address" style={styles.input} />

                        <input
                            type="password"
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {password && (
                            <div
                                style={{
                                    ...styles.passwordStrength,
                                    color: passwordStrength.color,
                                }}
                            >
                                Password Strength: {passwordStrength.text}
                            </div>
                        )}

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={styles.input}
                            value={confirm}
                            onChange={handleConfirmChange}
                        />
                        {confirmError && (
                            <div style={styles.confirmError}>{confirmError}</div>
                        )}
                    </div>

                    <button
                        style={styles.createAccountButton}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#005A8C")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0077B6")}
                    >
                        Create Account
                    </button>

                    <p style={styles.signInText}>
                        Already have an account?{" "}
                        <a href="#" style={styles.signInLink}>
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
