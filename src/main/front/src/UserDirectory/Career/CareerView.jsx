import {Button, Col, Container, Form, FormGroup, Row, Table} from "react-bootstrap";
import React from "react";
import Career from "./CareerList";
import {motion} from "framer-motion";
const redirect = (id) => {
    window.location.href = "/CareerApply?jobId=" + id;

}
const CareerView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 },
            }}
        >
            <Container className="mt-5 pb-5" >
                <h2>Housekeeping(m/w/d)</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Standort</th>
                        <th>Vertrag</th>
                        <th>Arbeitszeit</th>
                        <th>Gehalt</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Frankfurt</td>
                        <td>unbefristet</td>
                        <td>Teilzeit</td>
                        <td>1500€</td>
                    </tr>
                    </tbody>
                </Table>
                <p>Wir suchen ab sofort eine Reinigungskraft (m/w/d) für unser Hotel. Sie sind verantwortlich für die Reinigung der Zimmer und öffentlichen Bereiche. Sie arbeiten selbstständig und sind flexibel einsetzbar. Sie haben bereits Erfahrung in der Reinigung von Hotelzimmern und öffentlichen Bereichen. Sie sind zuverlässig und arbeiten gerne im Team. Sie haben ein gepflegtes Erscheinungsbild und gute Umgangsformen. Sie haben gute Deutschkenntnisse. Sie sind flexibel und arbeiten gerne im Team. Sie sind bereit, auch am Wochenende und an Feiertagen zu arbeiten. Sie haben ein gepflegtes Erscheinungsbild und gute Umgangsformen. Sie haben gute Deutschkenntnisse. Sie sind flexibel und arbeiten gerne im Team. Sie sind bereit, auch am Wochenende und an Feiertagen zu arbeiten.</p>




                <h3>Wir bieten Ihnen:</h3>
                <ul>
                    <li>Ein unbefristetes Arbeitsverhältnis</li>
                    <li>Ein angenehmes Arbeitsklima</li>
                    <li>Ein motiviertes Team</li>
                    <li>Ein abwechslungsreiches Aufgabengebiet</li>
                    <li>Ein angemessenes Gehalt</li>
                </ul>
                <h3>Ihre Aufgaben:</h3>
                <ul>
                    <li>Reinigung der Zimmer</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                </ul>
                <h3>Ihr Profil:</h3>
                <ul>
                    <li>Reinigung der Zimmer</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                    <li>Reinigung der öffentlichen Bereiche</li>
                </ul>
                <h3>Wir freuen uns auf Ihre Bewerbung!</h3>
                <p>Bitte senden Sie Ihre vollständigen Bewerbungsunterlagen an:</p>
                <Button variant="primary" type="submit" onClick={redirect}>    Bewerben</Button>



            </Container>
        </motion.div>


    );
};

export default CareerView;