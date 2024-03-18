import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twilio from "../../Assets/Projects/Twilio.png";
import movieservices from "../../Assets/Projects/movie.jpg";
import crud from "../../Assets/Projects/crud.png";
import mail from "../../Assets/Projects/SpringMail.jpeg";
import collegedb from "../../Assets/Projects/CollegeDB.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegedb}
              isBlog={false}
              title="College Data Base"
              description="A college database is a vital repository for managing student, faculty, and course information within an educational institution. It centralizes data related to student enrollment, academic programs, faculty assignments, and classroom resources. Through organized tables like Students, Departments, Courses, and Enrollments, it facilitates efficient management of student records, course offerings, and faculty assignments."
              ghLink="https://github.com/Hemanthkumar406/CollegeDataBaseManagement"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="Crud"
              description="CRUD details refer to the fundamental operations for managing data within a system: Create, Read, Update, and Delete. In CRUD operations, data can be created through insertion, retrieved for viewing or processing, modified or updated to reflect changes, and deleted or removed as necessary. These operations are essential for interacting with databases and information systems, allowing users to manipulate data effectively. By implementing CRUD functionality, applications can perform basic data management tasks, enabling users to add, view, edit, and remove data seamlessly. "
              ghLink="https://github.com/Hemanthkumar406/CRUD_DataBase"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieservices}
              isBlog={false}
              title="Movies Services"
              description="
              A Movie Service API provides a platform for accessing and managing movie-related data programmatically. It allows users to search for movies, retrieve details such as title, release date, genre, and cast information, and access movie reviews and ratings. The API supports functionalities like movie search by title, genre, or actor, retrieving movie details including plot summaries and trailers, and accessing user reviews and ratings."
              ghLink="https://github.com/Hemanthkumar406/MovieServices"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twilio}
              isBlog={false}
              title="Twilio Api"
              description="In Spring Boot applications, integrating Twilio for OTP generation involves utilizing Twilio's API to send one-time passwords (OTPs) via SMS or voice messages. Developers typically implement a service layer to generate OTPs, utilizing Twilio's SDK to send messages programmatically. This service interacts with the Twilio API, generating unique OTPs and sending them to users' mobile numbers. Twilio provides robust security features to ensure OTP delivery and verification. By integrating Twilio OTP generation into Spring Boot applications, developers enhance authentication processes,"
              ghLink="https://github.com/Hemanthkumar406/SpringTwilioOtp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Mail Api"
              description="In Spring Boot applications, integrating a mail API allows developers to send emails programmatically, facilitating communication with users. Using Spring's built-in support for JavaMailSender, developers can configure SMTP settings and create a service layer to send emails. With this setup, applications can generate and send emails for various purposes such as account activation, password reset, notifications, and newsletters. Spring Boot's auto-configuration simplifies the setup process, while its dependency management streamlines integration with popular mail APIs like SendGrid or Gmail SMTP. By incorporating a mail API, "
              ghLink="https://github.com/Hemanthkumar406/SpringMailSMTP"
              
              />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
