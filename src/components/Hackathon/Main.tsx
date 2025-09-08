import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <div>+ Thêm kho mới</div>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Tên kho"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Địa chỉ"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Select aria-label="Default select example" size='sm'>
                    <option>Hoạt động</option>
                    <option value="1">Ngừng hoạt động</option>
                </Form.Select>
            </Row>
            <Button type="submit">Thêm</Button>
        </Form>
    );
}

export default FormExample;