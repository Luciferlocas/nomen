"use client";

import { useState, useEffect, useCallback } from "react";
import Download from "./Download";
import Share from "./Share";
import { ResumeData } from "@/lib/types";

const Resume = ({ user }: { user: string }) => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const getResumeData = useCallback(async () => {
    try {
      const data = await import(`@/app/_content/contributors/${user}.ts`);
      setResumeData(data.data);
    } catch (error) {
      console.error("Failed to load contributor data", error);
      return null;
    }
  }, [user]);

  useEffect(() => {
    getResumeData();
  }, [user, getResumeData]);

  if (!resumeData) return;

  return (
    <div className="flex gap-9 items-left mt-8 mb-16">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto text-black h-[calc(100vh-8rem)] overflow-y-scroll">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{resumeData.name}</h1>
          <p className="text-gray-600">{resumeData.location}</p>
          <p className="text-gray-600">
            {resumeData.phone} | {resumeData.email}
          </p>
          <div className="flex gap-4 mt-2">
            {Object.entries(resumeData.links).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="blank"
                className="text-blue-600 hover:underline capitalize"
              >
                {platform}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium">{edu.institution}</h3>
              <p>{edu.location}</p>
              <p>{edu.degree}</p>
              <p className="text-gray-600">{edu.period}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">
            Position and Experience
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{exp.company}</h3>
              <p>{exp.position}</p>
              <p className="text-gray-600">{exp.location}</p>
              <p className="text-gray-600">{exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">
            Projects
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="text-gray-600">{project.technologies}</p>
              {project.link && (
                <a href="#" className="text-blue-600 hover:underline">
                  {project.link}
                </a>
              )}
              {project.period && (
                <p className="text-gray-600">{project.period}</p>
              )}
              <ul className="list-disc list-inside mt-2">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">
            Technical Skills
          </h2>
          <div>
            <p>
              <strong>Languages:</strong>{" "}
              {resumeData.skills.languages.join(", ")}
            </p>
            <p>
              <strong>Technologies/Frameworks:</strong>{" "}
              {resumeData.skills.technologies.join(", ")}
            </p>
            <p>
              <strong>Developer Tools:</strong>{" "}
              {resumeData.skills.tools.join(", ")}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">
            Achievements
          </h2>
          <ul className="list-disc list-inside">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex flex-col gap-4 bg-gray-800/50 px-2 py-4 rounded-lg">
        <Download data={resumeData}  />
        <div className="w-full bg-gray-500 h-px"></div>
        <Share name={resumeData.name} />
      </div>
    </div>
  );
};

export default Resume;
