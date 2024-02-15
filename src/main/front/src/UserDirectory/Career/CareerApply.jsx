import {Button, Container, Form, Image, Table} from "react-bootstrap";
import React, {useState} from "react";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import  "./FileInput.css";

const CareerApply = () => {
    const [selectedfile, SetSelectedFile] = useState([]);
    const [Files, SetFiles] = useState([]);


    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const InputChange = (e) => {
        // --For Multiple File Input
        let images = [];

        for (let i = 0; i < e.target.files.length; i++) {

            images.push(e.target.files[i]);
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                SetSelectedFile((preValue) => {
                    console.log(...preValue);
                    return [
                        ...preValue,
                        {
                            id: shortid.generate(),
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }


    const DeleteSelectFile = (id) => {
        if(window.confirm("Are you sure you want to delete this Image?")){
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
        }else{
            // alert('No');
        }

    }

    const FileUploadSubmit = async (e) => {
        e.preventDefault();

        // form reset on submit
        e.target.reset();
        if (selectedfile.length > 0) {
            for (let index = 0; index < selectedfile.length; index++) {
                SetFiles((preValue)=>{
                    return[
                        ...preValue,
                        selectedfile[index]
                    ]
                })
            }
            SetSelectedFile([]);
        } else {
            alert('Please select file')
        }
    }


    const DeleteFile = async (id) => {
        if(window.confirm("Are you sure you want to delete this Image?")){
            const result = Files.filter((data)=>data.id !== id);
            SetFiles(result);
        }else{
            // alert('No');
        }
    }

    //form submit axios
    const formSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        for (let index = 0; index < Files.length; index++) {
            formdata.append('file', Files[index]);
        }
        console.log(formdata);
        // const response = await axios.post('http://localhost:5000/upload', formdata);
        // console.log(response);
    }

    return (




       <Container className="mt-5">
            <h1>Apply for a job</h1>
            <p>Fill in the form below to apply for a job</p>
            <Form
                className="mt-5"
                id="frm"
            >
            <Table    size="sm">

                <tbody>
                <tr>
                    <td><Form.Label>First Name</Form.Label></td>
                    <Form.Group
                        controlId="Name"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            name="userName"
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
                            name="userEmail"
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
                    <td><Form.Label>Upload Files</Form.Label></td>
                    <td colSpan={2} >
                        <form onSubmit={FileUploadSubmit}>
                            <div className="file-upload-box">
                                <input type="file" id="fileupload"
                                       className="file-upload-input"
                                       onChange={InputChange} multiple/>
                                <span>Drag and drop or <span className="file-link">Choose your files</span></span>
                            </div>
                            <div className="kb-attach-box mb-2 mt-2 ">
                                {
                                    selectedfile.map((data, index) => {
                                        console.log(data);
                                        const {
                                            id,
                                            filename,
                                            filetype,
                                            fileimage,
                                            datetime,
                                            filesize
                                        } = data;
                                        return (
                                            <div className="file-atc-box" key={id}>
                                                {
                                                    filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                        <div className="file-image"><img
                                                            src={fileimage} alt=""/></div> :
                                                        <div className="file-image"><i
                                                            className="far fa-file-alt"></i>
                                                        </div>
                                                }
                                                <div className="file-detail">
                                                    <h6>{filename}</h6>
                                                    <p></p>
                                                    <p><span>Size : {filesize}</span><span
                                                        className="ml-2">Modified Time : {datetime}</span>
                                                    </p>
                                                    <div className="file-actions">
                                                        <button type="button"
                                                                className="file-action-btn"
                                                                onClick={() => DeleteSelectFile(id)}>Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </form>
                    </td>
                </tr>




                <Button className="mt-5" variant="primary" type="submit"> SUBMIT </Button>


                </tbody>
            </Table>
            </Form>
       </Container>

    );
};

export default CareerApply;