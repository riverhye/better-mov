import { Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
// import Axios from 'axios';
// import { useDispatch } from 'react-redux';

function SignIn() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const emailCheck = (e) => {
        setEmail(e.target.value);
        console.log('email', email)
    }
    const pwCheck = (e) => {
        setPw(e.target.value);
        console.log('pw', pw)
    };
    return (
      <>
      <Container className="form-box">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control onChange={emailCheck} type="email" placeholder="이메일을 입력하세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control onChange={pwCheck} type="password" placeholder="비밀번호는 특수문자를 포함한 8자 입력하세요." />
          </Form.Group>
        </Form>
          <Button onClick={(e)=>{e.preventDefault()}} type="submit" variant="secondary" size="sm">
              로그인
          </Button>
      </Container>
      </>
    )
  }

export default SignIn;