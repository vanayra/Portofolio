import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Auto Tracking Solar Panel",
            description: "Class Project - Design and build a prototype of auto tracking solar panel mount using arduino and motor servo",
            image: "/assets/solar.jpeg",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <a href="https://youtu.be/7LGCNxeMc2I?si=IUwOeDYUh3Vwb_oG" target="blank">
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">  
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}