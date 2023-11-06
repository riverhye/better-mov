import { Container, Button, Form } from 'react-bootstrap';
// import { useState } from 'react';
// import Axios from 'axios';
// import { useDispatch } from 'react-redux';

function SignIn() {

    return (
      <>
      <Container className="form-box">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>이메일<div className="regCheck">여기</div></Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력하세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>비밀번호<div className="regCheck">저기</div></Form.Label>
            <Form.Control type="password" placeholder="비밀번호는 특수문자를 포함한 8자 입력하세요." />
          </Form.Group>
        </Form>
          <Button onClick={(e)=>{e.preventDefault()}} type="submit" variant="secondary" size="sm">
              로그인
          </Button>
      </Container>
      </>
    )
  }

// export default SignIn;