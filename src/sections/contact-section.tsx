import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">rizky.delvano23@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone:</td>
                        <td className="py-2 text-gray-500">+62 (821) 1829-5877</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Adress:</td>
                        <td className="py-2 text-gray-500">Bandung City, Indonesia</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}