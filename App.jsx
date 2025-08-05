import './App.css';


function App(){
  
  return(
 <div>
  
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Rafi Ullah</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " href="#container">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#">Tutorials</a>
        <a className="nav-link" href="#">Books</a>
        <a className="nav-link" href="#">Blogs</a>
        <a className="nav-link"href="#contact" >Contacts</a>
        <button className='btn'>Get In Touch</button>
      </div>
    </div>
  </div>
</nav>

<section id='container'>
 <h1><b>Hi, I'm Rafi Ullah</b></h1>
  <p><h3>Full Stack developer </h3></p>
  <p><h4><b>💻 What is a Full Stack Developer?</b> </h4><br />
<b>A Full Stack Developer </b>is someone who can <b>build an entire web application — both frontend and backend. </b><br/>

In simple words: <br /><br />

<b>Full Stack Developer = Frontend Developer + Backend Developer </b></p><br />
<p><h4> <b>🔷 1. Frontend (Client-side)</b></h4></p>
<p> <b>What users see and interact with</b></p>
<p><b>🔧 Technologies:</b></p>
<ul>

<li>HTML (Structure)</li>
<li>CSS (Style)</li>
<li>JavaScript (Functionality)</li>
<li>Frameworks:<b> React.js</b>, Angular, Vue.js</li>
<li>Responsive Design: Media Queries, Bootstrap, Tailwind CSS</li>

</ul>
<p><b>🧠 Example:</b></p>
<ul>
  <li>Creating the buttons, layout, design of a website</li>
  <li>Making the user interface interactive</li>
  <li>Showing data from server using APIs</li>
</ul>
</section>
   <section id='about'>
    <h1><b>About Me</b></h1>
    <p><b>i’m a passionate Full Stack developer with experience in HTML, CSS, JavaScript,</b></p>
    <h4><b>🔷 2. Backend (Server-side)</b></h4>
    <p>What happens behind the scenes</p>
    <p><b>🔧 Technologies:</b></p>
    <ul>
    <li>Languages: Node.js, Python, PHP, Java, Ruby</li>
    <li>Frameworks: Express.js (Node), Django (Python), etc</li>
    <li>Database: <b>MongoDB</b>, MySQL, PostgreSQL</li>
    <li>APIs: REST APIs, GraphQL</li>
    <li>Authentication: Login/Signup using JWT, session</li>
    </ul>
    </section>

    <section id='experience'> 
       <h1><b>Experience</b></h1>

  <div class="experience-card">
    <h4><b>Personal Full Stack Project</b></h4>
    <p><strong>Project:</strong> Task Manager App</p>
    <p><strong>Duration:</strong> May 2024 – July 2024</p>
    <ul>
      <li>Developed a to-do app with user login using MERN Stack</li>
      <li>Used JWT for authentication and MongoDB for data storage</li>
      <li>Deployed app using Render (backend) and Vercel (frontend)</li>
    </ul>
  </div>
  </section>



  <section id="contact">
  <h2>Contact Me</h2>
  <p>Feel free to reach out via the form below or through my email and social links.</p>

  <form action="https://formspree.io/f/yourformid" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  <div class="contact-info">
    <p>Email: <a href="mailto:rafi@example.com">rafi@example.com</a></p>
    <p>GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">yourprofile</a></p>
  </div>
</section>

 </div>
 
)};
export default App;
