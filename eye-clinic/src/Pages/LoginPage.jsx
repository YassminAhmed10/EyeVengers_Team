// src/Pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select your role before signing in.");
      return;
    }

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("isAuthenticated", "true");

    if (role === "Doctor") {
      navigate("/doctor");
    } else if (role === "Receptionist") {
      navigate("/appointments");
    } else if (role === "Patient") {
      navigate("/patient");
    }
  };

  return (
    <div style={styles.container}>
      {/* Background Image */}
      <div style={styles.background}></div>
      
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Side - Branding */}
        <div style={styles.brandSection}>
          <div style={styles.logo}>
            <img 
              src="src/images/logo.png" 
              alt="Dr Mohab Khairy" 
              style={styles.logoImage}
              onError={(e) => {
                // Fallback to text if logo doesn't exist
                // e.target.style.display = 'none';
                // e.target.parentNode.innerHTML = '<div style="' + styles.logoFallback + '"></div><h1 style="' + styles.clinicName + '">Dr Mohab Khairy </h1>';
              }}
            />
            <h1 style={styles.clinicName}>Dr Mohab Khairy </h1>
          </div>
          <div style={styles.brandContent}>
            <h2 style={styles.welcomeText}>Welcome to Our Eye Clinic</h2>
            <p style={styles.subtitle}>
              Advanced eye care management system for doctors, staff, and patients
            </p>
            <div style={styles.features}>
              <div style={styles.featureItem}>
              </div>
              <div style={styles.featureItem}>
              </div>
              <div style={styles.featureItem}>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div style={styles.loginSection}>
          <div style={styles.loginCard}>
            <div style={styles.loginHeader}>
              <h2 style={styles.loginTitle}>Sign In</h2>
              <p style={styles.loginSubtitle}>Access your account</p>
            </div>

            {/* Role Selection */}
            <div style={styles.roleGrid}>
              {["Doctor", "Receptionist", "Patient"].map((r) => (
                <div
                  key={r}
                  style={{
                    ...styles.roleCard,
                    ...(role === r ? styles.roleCardActive : {})
                  }}
                  onClick={() => setRole(r)}
                >
                  <div style={styles.roleImageContainer}>
                    <img 
                      src={`src/images/${r.toLowerCase()}-icon.png`} 
                      alt={r}
                      style={styles.roleImage}
                      onError={(e) => {
                        // Fallback to emoji if image doesn't exist
                        e.target.style.display = 'none';
                        const emoji = r === "Doctor" ? "" : r === "Receptionist" ? "" : "";
                        e.target.nextSibling.textContent = emoji;
                      }}
                    />
                    <span style={styles.roleFallback}></span>
                  </div>
                  <span style={styles.roleText}>{r}</span>
                </div>
              ))}
            </div>

            {/* Login Form */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              style={styles.loginButton}
              onClick={handleLogin}
            >
              <span style={styles.buttonText}>Sign In</span>
              <span style={styles.buttonIcon}>→</span>
            </button>

            <div style={styles.footer}>
              <p style={styles.footerText}>
                Having trouble signing in?{" "}
                <a href="#" style={styles.footerLink}>Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#f8fafc",
    position: "relative",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('src/images/login1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.1,
    zIndex: 0,
  },
  mainContent: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    height: "700px",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    zIndex: 1,
    position: "relative",
  },
  brandSection: {
    flex: 1,
    background: "linear-gradient(135deg, #2563eb 0%, #2563eb 100%)",
    color: "white",
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "40px",
  },
  logoImage: {
    width: "80px", // Bigger logo
    height: "80px", // Bigger logo
    objectFit: "cover",
    borderRadius: "50%", // Circular shape
    border: "3px solid white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  logoFallback: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    border: "3px solid white",
  },
  clinicName: {
    fontSize: "2rem", // Bigger font size
    fontWeight: "700",
    margin: 0,
  },
  brandContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: "2.5rem",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.125rem",
    opacity: 0.9,
    lineHeight: "1.6",
    marginBottom: "40px",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1rem",
    opacity: 0.9,
  },
  featureIcon: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
  },
  loginSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "white",
  },
  loginCard: {
    width: "100%",
    maxWidth: "400px",
  },
  loginHeader: {
    textAlign: "center",
    marginBottom: "40px",
  },
  loginTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 8px 0",
  },
  loginSubtitle: {
    fontSize: "1rem",
    color: "#64748b",
    margin: 0,
  },
  roleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "12px",
    marginBottom: "32px",
  },
  roleCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 12px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "#f8fafc",
  },
  roleCardActive: {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
  },
  roleImageContainer: {
    position: "relative",
    marginBottom: "8px",
  },
  roleImage: {
    width: "50px", // Bigger role icons
    height: "50px", // Bigger role icons
    objectFit: "cover",
    borderRadius: "50%", // Circular shape
    border: "2px solid #e2e8f0",
  },
  roleFallback: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.5rem",
  },
  roleText: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#475569",
  },
  formGroup: {
    marginBottom: "24px",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "16px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "1rem",
    color: "#1f2937",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "16px 24px",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  buttonText: {
    fontSize: "1rem",
  },
  buttonIcon: {
    fontSize: "1.25rem",
  },
  footer: {
    marginTop: "32px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.875rem",
    color: "#64748b",
    margin: 0,
  },
  footerLink: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "500",
  },
};