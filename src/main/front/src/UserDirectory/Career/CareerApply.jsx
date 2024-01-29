import {Container, Form, Image, Table} from "react-bootstrap";


const CareerApply = () => {

    return (




       <Container className="mt-5">
            <h1>Apply for a job</h1>
            <p>Fill in the form below to apply for a job</p>
            <Form
                className="mt-5"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
            <Table    size="sm">

                <tbody>
                <tr>
                    <td><Form.Label>First Name</Form.Label></td>
                    <Form.Group
                        controlId="firstName"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                        />
                    </Form.Group>


                </tr>
                <tr className="">
                    <td><Form.Label>Last Name</Form.Label></td>
                    <Form.Group
                        controlId="lastName"

                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                        />
                    </Form.Group>
                </tr>

                <tr>
                    <td><Form.Label>Email</Form.Label></td>
                    <Form.Group
                        controlId="email"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                        />
                    </Form.Group>
                </tr>
                <tr>
                    <td><Form.Label>Upload CV</Form.Label></td>
                    <Form.Group
                        controlId="cv"
                    >
                        <Form.Control
                            type="file"
                            placeholder="Upload CV"
                        />
                    </Form.Group>
                </tr>
                <tr>
                    <td><Form.Label>Upload Cover Letter</Form.Label></td>
                    <Form.Group
                        controlId="coverLetter"
                    >
                        <Form.Control
                            type="file"
                            placeholder="Upload Cover Letter"
                        />
                    </Form.Group>

                </tr>


                <tr>
                    <td><Form.Label>Upload Other</Form.Label></td>
                    <Form.Group
                        controlId="other"
                    >
                        <Form.Control
                            type="file"
                            placeholder="Upload Other"
                        />
                    </Form.Group>
                </tr>



                {/*<tr>
                    <td><Form.Label>GitHub Link</Form.Label> <Image src="https://img.icons8.com/ios-filled/50/000000/github.png" style={
                        {
                            width: "20px",
                            height: "20px"
                        }
                    } alt={
                        "github"
                    }/> </td>
                    <Form.Group
                        controlId="github"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter GitHub Link"
                        />
                    </Form.Group>
                </tr>

                <tr>
                    <td><Form.Label>LinkedIn Link</Form.Label>

                        <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjg4RDEiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNVYzN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTcgMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOCAyLjQ4NiAyLjQ5OUMxNyAxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgMC0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAyNi44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiI+PC9wYXRoPgo8L3N2Zz4=" style={
                            {
                                width: "20px",
                                height: "20px"
                            }
                        } alt={
                            "Linkedin"
                        }/></td>
                    <Form.Group
                        controlId="linkedin"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter LinkedIn Link"
                        />
                    </Form.Group>
                </tr>*/}


                </tbody>
            </Table>
            </Form>
       </Container>

    );
};

export default CareerApply;