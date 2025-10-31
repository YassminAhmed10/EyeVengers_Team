// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ⬅ أضفنا دا
// import "./sign.css";

// export default function Sign() {
//   const navigate = useNavigate(); // ⬅ نستخدمه للتنقل بين الصفحات

//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [confirmError, setConfirmError] = useState("");
//   const [role, setRole] = useState(""); // Doctor / Receptionist / Patient

//   const styles = {
//     wrapper: {
//       minHeight: "100vh",
//       backgroundColor: "#F4F6F7",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "'Open Sans', 'Cairo', sans-serif",
//       margin: 0,
//       padding: 0,
//     },
//     box: {
//       width: "720px",
//       backgroundColor: "#FFFFFF",
//       borderRadius: "30px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//       transition: "transform 0.3s ease",
//       padding: "40px",
//       boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     },
//     title: {
//       fontSize: "1.8rem",
//       color: "#0077B6",
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: "700",
//       marginBottom: "10px",
//     },
//     subtitle: {
//       fontSize: "1rem",
//       color: "#023047",
//       marginBottom: "25px",
//       fontFamily: "'Open Sans', sans-serif",
//     },
//     inputGroup: {
//       width: "100%",
//       marginBottom: "10px",
//     },
//     input: {
//       width: "100%",
//       padding: "12px 15px",
//       marginBottom: "10px",
//       border: "1px solid #90E0EF",
//       borderRadius: "10px",
//       fontSize: "0.9rem",
//       boxSizing: "border-box",
//       fontFamily: "'Open Sans', sans-serif",
//       color: "#023047",
//     },
//     roleButtonsContainer: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "10px",
//       marginBottom: "20px",
//     },
//     roleButton: (isSelected) => ({
//       padding: "10px 18px",
//       borderRadius: "10px",
//       border: isSelected ? "2px solid #0077B6" : "1px solid #90E0EF",
//       backgroundColor: isSelected ? "#0077B6" : "#FFFFFF",
//       color: isSelected ? "#FFFFFF" : "#023047",
//       cursor: "pointer",
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: "500",
//       transition: "all 0.2s ease",
//     }),
//     createAccountButton: {
//       width: "100%",
//       backgroundColor: "#0077B6",
//       color: "#FFFFFF",
//       border: "none",
//       padding: "12px",
//       borderRadius: "10px",
//       fontSize: "1rem",
//       fontFamily: "'Poppins', sans-serif",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//       marginBottom: "15px",
//     },
//     signInText: {
//       fontSize: "0.9rem",
//       color: "#023047",
//       fontFamily: "'Open Sans', sans-serif",
//     },
//     signInLink: {
//       color: "#0077B6",
//       fontWeight: "600",
//       textDecoration: "none",
//       fontFamily: "'Poppins', sans-serif",
//       cursor: "pointer",
//     },
//   };

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     setName(value);
//     if (/[^a-zA-Z\s]/.test(value)) setNameError("Name must contain only letters");
//     else setNameError("");
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     if (value.length < 6)
//       setPasswordStrength({ text: "Weak", color: "red" });
//     else if (value.length < 10)
//       setPasswordStrength({ text: "Medium", color: "gold" });
//     else setPasswordStrength({ text: "Strong", color: "green" });
//   };

//   const handleConfirmChange = (e) => {
//     const value = e.target.value;
//     setConfirm(value);
//     if (value !== password) setConfirmError("Passwords do not match");
//     else setConfirmError("");
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div
//         style={styles.box}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <h1 style={styles.title}>Eye Clinic</h1>
//         <p style={styles.subtitle}>Create Your Account</p>

//         {/* 🔹 Role Selection */}
//         <div style={styles.roleButtonsContainer}>
//           {["Doctor", "Receptionist", "Patient"].map((r) => (
//             <button
//               key={r}
//               style={styles.roleButton(role === r)}
//               onClick={() => setRole(r)}
//             >
//               {r}
//             </button>
//           ))}
//         </div>

//         <div style={styles.inputGroup}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             style={styles.input}
//             value={name}
//             onChange={handleNameChange}
//           />
//           {nameError && <div style={{ color: "red", fontSize: "0.8rem" }}>{nameError}</div>}

//           <input type="email" placeholder="Email Address" style={styles.input} />

//           <input
//             type="password"
//             placeholder="Password"
//             style={styles.input}
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           {password && (
//             <div style={{ color: passwordStrength.color }}>
//               Password Strength: {passwordStrength.text}
//             </div>
//           )}

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             style={styles.input}
//             value={confirm}
//             onChange={handleConfirmChange}
//           />
//           {confirmError && (
//             <div style={{ color: "red", fontSize: "0.8rem" }}>{confirmError}</div>
//           )}
//         </div>

//         <button style={styles.createAccountButton}>Create Account</button>

//         {/* ⬇ دي بقت بتنقل للـ Login Page */}
//         <p style={styles.signInText}>
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             style={styles.signInLink}
//           >
//             Sign In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css";

export default function Sign() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleCreateAccount = () => {
    if (role === "Doctor") navigate("/doctor");
    else if (role === "Receptionist") navigate("/receptionist");
    else if (role === "Patient") navigate("/patient");
    else alert("Please select a role before continuing.");
  };

  return (
    <div className="sign-container">
      <h1>Eye Clinic</h1>
      <p>Select your role</p>

      <div className="roles">
        {["Doctor", "Receptionist", "Patient"].map((r) => (
          <button
            key={r}
            className={`role-btn ${role === r ? "active" : ""}`}
            onClick={() => setRole(r)}
          >
            {r}
          </button>
        ))}
      </div>

      <button onClick={handleCreateAccount} className="create-btn">
        Continue
      </button>
    </div>
  );
}
