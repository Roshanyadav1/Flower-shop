import * as React from "react";
import { Box, Heading, VStack, Input, FormControl, Button, Center, KeyboardAvoidingView } from "native-base";
import { Platform } from "react-native";
import { Formik } from "formik";
// import Input from '../../components/Input';
import * as Yup from 'yup';

const SignUp = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Email must contain (@)gmail.com!').required('Email is required !'),
        password: Yup.number().typeError("Only number allowed")
            .min(999999999, "Please enter 10-digit number !")
            .required('Password is required !'),
    });

    const handleSubmit = (values) => {
        console.log(values)
        navigation.navigate('home')
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
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <>
                                <VStack space={3} mt="5">
                                    <FormControl>
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input />
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="password" />
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Confirm Password</FormControl.Label>
                                        <Input type="password" />
                                    </FormControl>
                                    <Button mt="2" colorScheme="indigo">
                                        Sign up
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