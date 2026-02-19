import Section from "../components/section";

export default function ExperienceSection() {
    return (
        <Section title="Internship Experience">
            <div>
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/sucofindo.png"
                                alt="Intern"
                                width={50}
                                height={50}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Climate Solutions and Sustainable Energy Intern
                            </h3>
                            <div>PT Sucofindo (Persero)</div>
                        </div>
                    </div>
                    <div>10 Feb 2026 - Present</div>
                </div>
                <p className="mt-6 text-gray-500" align="justify">
                    Work on verification and validation of annual powerplant carbon emission report based on ISO 14064
                </p>
            </div>
            <br/>
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/pln-ip.png"
                                alt="Intern"
                                width={50}
                                height={50}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Boiler Maintenance Intern
                            </h3>
                            <div>PLN Indonesia Power UBP Suralaya</div>
                        </div>
                    </div>
                    <div>2 Jan 2026 - 30 Jan 2026</div>
                </div>
                <p className="mt-6 text-gray-500" align="justify">
                    Analyzed the effect of additional bypass line on Temperature Control Valve (TCV) Reheater Pipe Head Loss Unit 5-7 Suralaya Steam Power Plant
                </p>
            </div>
            <br/>
            <a href="https://drive.google.com/file/d/1Rm0aurWTR9zFJkUJg6QW2fSmBqR5M0z5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/fox.png"
                                alt="Intern"
                                width={50}
                                height={50}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Engineering Trainee
                            </h3>
                            <div>Fox Harris Lite Metro Indah Bandung</div>
                        </div>
                    </div>
                    <div> 5 Apr 2022 - 15 Aug 2022</div>
                </div>
                <p className="mt-6 text-gray-500" align="justify">
                    Performed skilled maintenance and troubleshooting of air-conditioning systems, electrical equipment, and public facilities to ensure uninterrupted hotel operations and guest satisfaction.
                </p>
            </div>
            </a>
            </div>
            
        </Section>
    );
}