import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.compileFormData = this.compileFormData.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
        console.log(e.target.value);
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    compileFormData() {
        console.log(this.props);
        const { loginFunction } = this.props;
        const formData = this.state;
        loginFunction(formData);
    }


    render () {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="noreply@musiclist.com"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">PassWord</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </FormGroup>
                        <Button onClick={this.compileFormData}>Log In</Button>
                    </Form>
                </div>
            </div>
            )
    }
}
