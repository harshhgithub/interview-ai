import React from "react"
import { useNavigate } from "react-router"
import { FaFileAlt, FaBrain, FaComments, FaDownload } from "react-icons/fa"

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <div style={{ background: "#0f1117", color: "white", minHeight: "100vh" }}>

      {/* 🔥 NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #1f2937"
      }}>

        {/* 🔥 BRAND */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{
            fontSize: "22px",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "0.5px"
          }}>
            PrepWise AI
          </h1>

          <span style={{
            fontSize: "11px",
            color: "#6b7280",
            marginTop: "-4px"
          }}>
            AI Interview Platform
          </span>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={() => navigate("/login")} style={btnOutline}>
            Login
          </button>
          <button onClick={() => navigate("/register")} style={btnPrimary}>
            Get Started
          </button>
        </div>
      </nav>

      {/* 🔥 HERO */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "16px"
        }}>
          Crack Interviews with <span style={{ color: "#f60157" }}>AI</span>
        </h1>

        <p style={{
          color: "#9ca3af",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto 30px"
        }}>
          Upload your resume, analyze job descriptions, and get personalized interview strategies powered by AI.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <button onClick={() => navigate("/register")} style={btnPrimary}>
            🚀 Get Started
          </button>
          <button onClick={() => navigate("/login")} style={btnOutline}>
            Login
          </button>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "1100px",
        margin: "auto"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap"
        }}>

          <FeatureCard 
            icon={<FaFileAlt />} 
            title="Resume Analysis" 
            desc="Extract insights instantly"
          />

          <FeatureCard 
            icon={<FaBrain />} 
            title="Skill Gap Detection" 
            desc="Identify missing skills"
          />

          <FeatureCard 
            icon={<FaComments />} 
            title="AI Questions" 
            desc="Role-specific practice"
          />

          <FeatureCard 
            icon={<FaDownload />} 
            title="PDF Reports" 
            desc="Download structured plans"
          />

        </div>
      </section>

    </div>
  )
}

export default LandingPage

// 🔥 COMPONENT

const FeatureCard = ({ icon, title, desc }) => (
  <div style={{
    flex: "1",
    minWidth: "220px",
    background: "#151821",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #1f2937",
    textAlign: "center"
  }}>
    <div style={{
      fontSize: "22px",
      marginBottom: "10px",
      color: "#f4f4f4"
    }}>
      {icon}
    </div>

    <h3 style={{ fontSize: "15px", marginBottom: "6px" }}>
      {title}
    </h3>

    <p style={{ color: "#9ca3af", fontSize: "13px" }}>
      {desc}
    </p>
  </div>
)

// 🔥 STYLES

const btnPrimary = {
  background: "#ff0059",
  border: "none",
  padding: "12px 20px",
  borderRadius: "999px",
  color: "white",
  cursor: "pointer",
  fontWeight: "600"
}

const btnOutline = {
  background: "transparent",
  border: "1px solid #374151",
  padding: "12px 20px",
  borderRadius: "999px",
  color: "white",
  cursor: "pointer"
}