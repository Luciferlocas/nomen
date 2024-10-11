import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Link,
} from "@react-pdf/renderer";
import DownloadIcon from "../icons/DownloadIcon";
import { ResumeData } from "@/lib/types";

const Download = ({ data }: { data: ResumeData }) => {
  const resumeData = data;

  if (!resumeData) return;

  return (
    <PDFDownloadLink
      document={<ResumePDF data={resumeData} />}
      fileName="resume.pdf"
      className="text-white cursor-pointer"
    >

      <button title="Download resume" className="relative group cursor-pointer rounded-full p-px">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex items-center justify-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10">
          <DownloadIcon />
        </div>
        <span className="absolute -bottom-0 left-[0.75rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-blue-400/0 via-emerald-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>

    </PDFDownloadLink>
  );
};

export default Download;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 12,
    marginLeft: 10,
  },
  link: {
    color: "blue",
    textDecoration: "none",
    textTransform: "capitalize",
  },
});

const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.text}>{data.location}</Text>
        <Text style={styles.text}>
          {data.phone} | {data.email}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Object.entries(data.links).map(([platform, link]) => (
            <Link
              key={platform}
              href={link}
              style={[styles.text, styles.link, { marginRight: 10 }]}
            >
              {platform}
            </Link>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {edu.institution}, {edu.location}
            </Text>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.period}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {exp.position} at {exp.company}
            </Text>
            <Text style={styles.text}>{exp.location}</Text>
            <Text style={styles.text}>{exp.period}</Text>
            {exp.responsibilities.map((resp, idx) => (
              <Text key={idx} style={styles.listItem}>
                • {resp}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Projects</Text>
        {data.projects.map((project, index) => (
          <View key={index}>
            <Text style={styles.text}>{project.name}</Text>
            <Text style={styles.text}>{project.technologies}</Text>
            {project.link && (
              <Text style={[styles.text, styles.link]}>{project.link}</Text>
            )}
            {project.period && (
              <Text style={styles.text}>{project.period}</Text>
            )}
            {project.details.map((detail, idx) => (
              <Text key={idx} style={styles.listItem}>
                • {detail}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>
          Languages: {data.skills.languages.join(", ")}
        </Text>
        <Text style={styles.text}>
          Technologies/Frameworks: {data.skills.technologies.join(", ")}
        </Text>
        <Text style={styles.text}>
          Developer Tools: {data.skills.tools.join(", ")}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Achievements</Text>
        {data.achievements.map((achievement, index) => (
          <Text key={index} style={styles.listItem}>
            • {achievement}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);