import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/blogsCover.jpg";
import image2 from "../assets/cover.jpg";
import image3 from "../assets/blogs3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const blogData = {
  robotics: {
    title: "Robotics",
    content: "Here’s a deep dive into React's lifecycle methods...",
    largeDescription: `
      <div class="container mx-auto p-5">
        <h2 class="text-2xl font-bold mb-4">What is Robotics?</h2>
        <p class="text-lg text-gray-700 mb-4">
          <strong>Robotics</strong> is a branch of engineering and science that involves the design, construction, operation, and use of robots. These automated machines can perform tasks that are typically done by humans, ranging from simple to complex functions. Robotics combines elements from various fields, including mechanical engineering, electrical engineering, computer science, and artificial intelligence.
        </p>
        <h3 class="text-xl font-semibold mb-2">Applications of Robotics</h3>
        <p class="text-lg text-gray-700 mb-4">
          Robotics technology is increasingly integrated into various industries. Here are some notable applications:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Manufacturing:</strong> Robots are widely used in manufacturing for assembly lines, performing repetitive tasks with precision and speed.</li>
          <li><strong>Healthcare:</strong> Surgical robots assist surgeons in performing minimally invasive procedures, improving accuracy and patient outcomes.</li>
          <li><strong>Exploration:</strong> Robots are used in space exploration, such as the Mars rovers, which collect data and perform experiments on other planets.</li>
          <li><strong>Service Industry:</strong> Service robots, such as vacuum cleaners and lawn mowers, automate household chores, making daily life more convenient.</li>
          <li><strong>Military:</strong> Drones and bomb disposal robots enhance safety and efficiency in military operations.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Why is Robotics Important?</h3>
        <p class="text-lg text-gray-700 mb-4">
          Robotics plays a crucial role in advancing technology and improving quality of life. Here are a few reasons why learning about robotics is essential:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Innovation:</strong> Robotics drives innovation by creating new technologies and methodologies that can enhance productivity.</li>
          <li><strong>Efficiency:</strong> Robots can perform tasks faster and with greater accuracy than humans, which leads to increased efficiency in various sectors.</li>
          <li><strong>Safety:</strong> Robots can take on dangerous tasks, reducing the risk of injury to human workers in hazardous environments.</li>
          <li><strong>Interdisciplinary Learning:</strong> Robotics integrates knowledge from multiple disciplines, promoting STEM (Science, Technology, Engineering, and Mathematics) education and skills.</li>
        </ul>
        <p class="text-lg text-gray-700">
          As technology continues to advance, the field of robotics will grow, leading to new opportunities and challenges. Understanding robotics is not just beneficial for engineers but is also essential for anyone interested in the future of technology and its impact on society.
        </p>
      </div>
    `,
    image: image1,
    date: "October 10, 2024",
  },
  programming: {
    title: "Programming",
    content:
      "Programming is the art and science of creating instructions for computers to follow, allowing us to build software, applications, websites, and many other digital tools.",
    largeDescription: `
      <div class="container mx-auto p-5">
        <h2 class="text-2xl font-bold mb-4">What is Programming?</h2>
        <p class="text-lg text-gray-700 mb-4">
          <strong>Programming</strong> is the art and science of creating instructions for computers to follow, allowing us to build software, applications, websites, and many other digital tools. At its core, programming is about problem-solving—translating real-world tasks and ideas into code that a computer can understand and execute. This field is vast, encompassing areas like <strong>web development</strong>, <strong>mobile app development</strong>, <strong>data analysis</strong>, <strong>machine learning</strong>, and <strong>software engineering</strong>.
        </p>

        <h3 class="text-xl font-semibold mb-2">Why Learning Programming is Essential</h3>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Problem-Solving Skills:</strong> Programming develops logical thinking and problem-solving abilities, as it often requires breaking down complex problems into manageable parts. This skill extends beyond coding and is valuable in many aspects of life and work.</li>
          <li><strong>High Demand in the Job Market:</strong> With the growth of technology across industries, programming skills are in high demand worldwide. Learning to code can open doors to careers in software development, data science, artificial intelligence, cybersecurity, and more.</li>
          <li><strong>Automation and Efficiency:</strong> By learning programming, you can automate repetitive tasks, streamline workflows, and save time. Even in non-technical roles, automation can be a valuable skill, allowing you to boost productivity and focus on more meaningful work.</li>
          <li><strong>Versatile Skill:</strong> Programming is highly versatile; it is used in nearly every industry, from finance and healthcare to entertainment and manufacturing. Knowing how to code enables you to work in various fields and adapt as technology evolves.</li>
          <li><strong>Empowerment and Innovation:</strong> When you learn to program, you gain the ability to create and build solutions that can impact society—whether it's developing new apps, improving accessibility, or contributing to scientific advancements. Programming empowers individuals to turn their ideas into reality and fosters a culture of innovation.</li>
        </ul>

        <p class="text-lg text-gray-700">
          In a world that increasingly relies on digital tools and automation, programming is not just for developers; it’s a valuable skill for anyone who wants to understand, shape, and contribute to the future.
        </p>
      </div>
    `,
    image: image2,
    date: "October 15, 2024",
  },
  "art-program": {
    title: "Art Program",
    content: "Introduction to DevOps and best practices...",
    largeDescription: `
      <div class="container mx-auto p-5">
        <h2 class="text-2xl font-bold mb-4">Understanding Art</h2>
        <p class="text-lg text-gray-700 mb-4">
          Art is a powerful medium of expression that reflects the thoughts, emotions, and ideas of individuals and societies. It encompasses a wide variety of forms, including painting, sculpture, music, dance, theater, and literature. Throughout history, art has served as a means of communication, a source of inspiration, and a reflection of cultural identities.
        </p>
        <h3 class="text-xl font-semibold mb-2">The Importance of Art</h3>
        <p class="text-lg text-gray-700 mb-4">
          The importance of art can be observed in various dimensions:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Cultural Reflection:</strong> Art serves as a mirror of society, providing insight into cultural values, beliefs, and historical contexts.</li>
          <li><strong>Emotional Expression:</strong> Artists convey their emotions and experiences through their work, allowing audiences to connect with feelings and perspectives that may differ from their own.</li>
          <li><strong>Intellectual Engagement:</strong> Art challenges viewers to think critically, interpret meaning, and engage in discussions about societal issues, ethics, and human experiences.</li>
          <li><strong>Aesthetic Experience:</strong> The beauty and creativity found in art can provide joy, provoke thought, and enhance our appreciation for the world around us.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Different Forms of Art</h3>
        <p class="text-lg text-gray-700 mb-4">
          Art comes in many forms, each with its own unique language and impact. Here are some prominent forms:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Visual Arts:</strong> This includes painting, drawing, sculpture, and photography, which create tangible expressions of creativity.</li>
          <li><strong>Performing Arts:</strong> Dance, theater, and music engage audiences through live performances, allowing for a shared emotional experience.</li>
          <li><strong>Literature:</strong> Written works, including poetry, novels, and essays, explore the human condition, society, and personal experiences.</li>
          <li><strong>Digital Art:</strong> As technology evolves, digital art has emerged, utilizing software and hardware to create innovative and interactive experiences.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Art Education and Its Benefits</h3>
        <p class="text-lg text-gray-700 mb-4">
          Engaging with art, whether through creation or appreciation, offers numerous benefits:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Creativity and Innovation:</strong> Art education fosters creative thinking and problem-solving skills, essential in many areas of life and work.</li>
          <li><strong>Emotional Well-being:</strong> Creating or experiencing art can serve as a therapeutic outlet, reducing stress and promoting mental health.</li>
          <li><strong>Social Skills:</strong> Participating in group art activities enhances collaboration, communication, and teamwork among individuals.</li>
          <li><strong>Appreciation of Diversity:</strong> Art exposes individuals to different cultures, perspectives, and experiences, fostering empathy and understanding.</li>
        </ul>
        <p class="text-lg text-gray-700">
          In conclusion, art is an integral part of human existence. It enriches our lives, challenges our perceptions, and connects us to others. Whether through creating, observing, or learning about art, individuals can cultivate a deeper appreciation for its role in shaping culture and personal identity.
        </p>
      </div>
    `,
    image: image3,
    date: "October 20, 2024",
  },
};

const BlogsDetails = () => {
  const { slug } = useParams();
  const blog = blogData[slug];
  const navigate = useNavigate();

  if (!blog) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center text-gray-600 mb-2 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Blogs
        </button>
        <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
        <hr />
        <p className="text-gray-500 text-sm my-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          {blog.date}
        </p>
        {/* <p className="text-lg text-gray-700">{blog.content}</p> */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-5"
        />
        <p className="text-lg text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: blog.largeDescription }} />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsDetails;
