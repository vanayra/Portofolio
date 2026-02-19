import Section from "../components/section";

export default function CertiSection() {
    return (
        <Section title="Certificate">
            <div>
            <a href="https:cert.efset.org/MbUhMt" target="_blank" rel="noopener noreferrer">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/efset.png"
                                alt="Certificate"
                                width={50}
                                height={50}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                English Reading, Listening, Writing, & Speaking
                            </h3>
                            <div>EF Standard English Test (C1)</div>
                        </div>
                    </div>
                    <div>Oct 2025</div>
                </div>
                <p className="mt-6 text-gray-500">cert.efset.org/MbUhMt</p>
            </div>
            </a>
            <br/>
            <a href="https://drive.google.com/file/d/1j-fehx3Z3UY66rkCx3VKSMEH9Zt3uXVs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/len.png"
                                alt="Certificate"
                                width={50}
                                height={50}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Electrical Power Installation Engineering Expertise
                            </h3>
                            <div>PT Len Industri (Persero)</div>
                        </div>
                    </div>
                    <div>Apr 2023</div>
                </div>
                <p className="mt-6 text-gray-500">No: 0656/SERT-UKK/Len/LH-4/IV/2023</p>
            </div>
            </a>
            <br/>
            <div className="mt-6" align="center">
                <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg">
                    <a href="https://drive.google.com/drive/folders/1O8qqTwgdZtAJUQYgwpYXAXu9Ahi5xI7_" target="_blank" rel="noopener noreferrer">
                    Other Certificate
                    </a>
                </button>
            </div>
            </div>
            
        </Section>
    );
}