import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">CI/CD Deployment</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tag">React + CI/CD</p>

            <h1>
              My React
              <span> CI Demo</span>
            </h1>

            <p className="description">
              This is a simple frontend application created for testing
              Continuous Integration and deployment pipelines.
            </p>

            <div className="buttons">
              <button
                className="primary-btn"
                onClick={() => setCount(count + 1)}
              >
                Click Me: {count}
              </button>

              <button
                className="secondary-btn"
                onClick={() => alert("CI pipeline demo")}
              >
                Test App
              </button>
            </div>
          </div>

          <div className="status-card">
            <div className="status-icon">✓</div>

            <h2>Build Status</h2>

            <div className="status">
              <span className="dot"></span>
              CI Ready
            </div>

            <div className="info">
              <div>
                <span>Framework</span>
                <strong>React</strong>
              </div>

              <div>
                <span>Environment</span>
                <strong>Development</strong>
              </div>

              <div>
                <span>Pipeline</span>
                <strong>Ready</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="about">
          <h2>Project Features</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">⚛️</div>
              <h3>React</h3>
              <p>
                Simple React frontend that can be used as a CI/CD test project.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">🔄</div>
              <h3>Continuous Integration</h3>
              <p>
                Automatically build and test the project whenever code changes.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Deployment Ready</h3>
              <p>
                The project can easily be connected to a deployment pipeline.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Ready for CI/CD</h2>
          <p>
            Push this project to GitHub and connect it to your preferred CI
            platform.
          </p>

          <div className="pipeline">
            <div className="pipeline-step active">
              <span>1</span>
              <p>Push Code</p>
            </div>

            <div className="line"></div>

            <div className="pipeline-step active">
              <span>2</span>
              <p>Build</p>
            </div>

            <div className="line"></div>

            <div className="pipeline-step active">
              <span>3</span>
              <p>Test</p>
            </div>

            <div className="line"></div>

            <div className="pipeline-step">
              <span>4</span>
              <p>Deploy</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 CI Demo React Project</p>
      </footer>
    </div>
  );
}

export default App;