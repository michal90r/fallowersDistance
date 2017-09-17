import React from 'react';


import Field from './Field'

import '../App.css';


class Form extends React.Component {
    state = {
        fields: {
            username: "",
        },
        fieldErrors: {},
    };

    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.validate()) return;

        this.props.onSubmit(this.state.fields);
        this.setState({
            fields: {
                username: "",
            },
        });
    };

    validate = () => {
        const username = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        if (!username) return true;
        if (errMessages.length) return true;

        return false;
    };

    isValidUsername = (val) => {
        return val=== "" ? false  : !/\s/g.test(val);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder="username"
                        name="username"
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                        validate={(val) => (this.isValidUsername(val) ? false : 'Invalid Username')}
                        autoFocus={true}
                    />


                    <button type="submit" disabled={this.validate()}>
                        {">"}
                    </button>
                </form>
            </div>
        );
    }

}

export default Form;