import { Container, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from '../assets/index.css';
// import useValid from '../hooks/useValid'
// import Axios from 'axios';

function SignIn() {
    const [form, setForm] = useState({
        email: '',
        validEmail: false,
        pw: '',
        validPw: false,
        // pwConfirm: '', // 비번 확인
        // correctPwConfirm: false // 비번 일치 확인
    });

    const submitRequires = form.validEmail && form.validPw
    // && form.correctPwConfirm
    const inputRegex = {
      email: /^[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+.+[a-z]{2,}$/,
      pw: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,20}$/
      }

    const emailValidCheck = (e) => {
        form.email = e.target.value
        if (!inputRegex.email.test(form.email)) {
          setForm({...form, validEmail: false});            
        } else {
            setForm({...form, validEmail: true});
        }
    }

    const pwValidCheck = (e) => {
      form.pw = e.target.value
      if(!inputRegex.pw.test(form.pw)) {
        setForm({...form, validPw: false});
      } else {
        setForm({...form, validPw: true});
      }
    }

    return (
      <>
      <Container className="form-box">
        <Form>
          <Form.Group className="mb-3 form-group" controlId="formGroupEmail">
            <Form.Label className="form-title">이메일
            </Form.Label>
              {
                !form.validEmail ? <div className="notValidMsg">올바른 이메일을 입력하세요</div> : null
              }
            <Form.Control value={form.email}  onChange={emailValidCheck} type="email" placeholder="ex. myid@email.com" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formGroupPassword">
            <Form.Label className="form-title">비밀번호
            </Form.Label>
              {
                !form.validPw ? <div className="notValidMsg"> 숫자, 영어 소문자, 특수문자를 포함하여 8자 이상 작성해 주세요</div> : null
              }
            <Form.Control value={form.password} onChange={pwValidCheck} type="password" placeholder="대문자는 안 쓰셔도 됩니다" />
          </Form.Group>
        </Form>
          <Button className="submitBtn"
          onClick={()=>{
            // 백에 전송 -> 백에서 로그인 세션 부여 시, 홈 화면
          }}
          disabled={!submitRequires}>
              회원가입
          </Button>
      </Container>
      </>
    )
  }

export default SignIn;