import React from 'react'
import { Input, FormControl, Text } from "native-base";

import { ErrorMessage, Field } from 'formik';
import styles from './styles';


const FormInput = (props) => {

    return (
        <>
            <Field name={props.name}>
                {({
                    field: { name, value },
                    form: { handleChange, errors },
                    meta,
                }) => (
                    <>
                        <FormControl isRequired isInvalid={meta.error}>
                            <FormControl.Label _text={{ bold: true }}>{props.label}</FormControl.Label>
                            <Input placeholder="Enter your email" onChangeText={handleChange(name)} />
                            {meta.error ? <FormControl.ErrorMessage>{meta.error}</FormControl.ErrorMessage> :
                                (props.textHelper && <FormControl.HelperText>
                                    {props.textHelper}
                                </FormControl.HelperText>
                                )
                            }
                        </FormControl>
                    </>
                )}
            </Field>
        </>
    );
}

export default FormInput
