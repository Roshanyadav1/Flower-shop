import * as React from "react";
import { Box, Heading, Button, VStack, FormControl, Center, KeyboardAvoidingView } from "native-base";
import { Platform } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import FormInput from '../../components/FormInput';

const SignUp = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Email must contain (@)gmail.com!')
            .required('Email is required !'),
        password: Yup.number().typeError("Only number allowed")
            .min(999999999, "Please enter 10-digit number !")
            .required('Password is required !'),
    });

    const handleLogin = (values) => {
        console.log(values, "the values is")
        // navigation.navigate('home')
    }

    return (
        <KeyboardAvoidingView h={{
            base: "400px",
            lg: "auto"
        }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={handleLogin}
                    >
                        {({ values, errors, touched, handleSubmit }) => (
                            <>
                                <VStack space={2} mt="5">
                                    <FormInput name='email' label="Email" textHelper="Email should contain @gmail.com" />
                                    <FormInput name='password' label="Password" />
                                    <Button onPress={() => handleSubmit(values)} mt="5" colorScheme="cyan">
                                        Submit
                                    </Button>
                                </VStack>
                            </>
                        )}
                    </Formik>
                </Box>
            </Center>
        </KeyboardAvoidingView>

    )
};


export default SignUp