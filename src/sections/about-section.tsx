import type { AlignJustify } from "lucide-react";
import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p align= "justify">
                    My name is Rizky Delvano, and most people call me Vano. I am an Energy Conversion Engineering student with a strong focus on power generation systems, ranging from conventional power plants such as coal-fired power plants to renewable energy systems like solar power plants. I am highly motivated to build my career in the power generation sector after graduation. To strengthen my technical foundation and industry exposure, I am currently undertaking an industrial internship in greenhouse gas emission verification for power plants, where I gain practical insight into emission assessment and regulatory compliance.
                </p>
                <p className="mt-5" align="justify">
                   I am open to opportunities that allow me to deepen my knowledge and experience in power generation and related fields. I am ready to contribute wholeheartedly to an organization by applying the knowledge I have acquired while continuously adapting to new challenges and professional environments. I am committed to continuous learning, technical excellence, and delivering meaningful contributions to the advancement of sustainable energy systems.
                </p>
            </div>
        </Section>
    );
}