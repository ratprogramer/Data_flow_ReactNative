import { Alert } from 'react-native';
import { InputSub } from '../../../../Atomos/InputSub/InputSub';
// import { decodeToken } from '../../../../helpers/decodeToken';
// import { usePostFetch } from '../../../../helpers/usePostFetch';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Label } from '../../../../Atomos/Label/Label';  //cambiar
import { InputTxt } from '../../../../Atomos/InputTxt/InputTxt'; // cambiar
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const LoginForm = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigation = useNavigation();

    // const onSubmit = async (data) => {
    //     const response = await usePostFetch('/login', data);
    //     if (!response.success) {
    //         Alert.alert('Error', 'Credenciales inválidas');
    //     } else {
    //         sessionStorage.setItem('token', response.result);
    //         if (response.rol === 'analista') {
    //             navigation.navigate('Menu');
    //         } else if (response.rol === 'administrador') {
    //             navigation.navigate('MenuAdmin');
    //         } else {
    //             Alert.alert('Error', 'Error iniciando sesión');
    //         }
    //     }
    // };

    // const onError = (errors) => {
    //     for (const error in errors) {
    //         Alert.alert('Error', 'Credenciales inválidas');
    //     }
    // };

    /* 
    <Label-C htmlFor={'dni'} text={'Usuario'} />
                <InputTxt-C id={'dni'} placeholder={'Ingrese usuario'} register={register} type={'text'} validaciones={{ require: 'El usuario es obligatorio' }} />
    */
    return (
        <View style={styles.container}>
            <View style={styles.groupContainer}>
                {/* <Label-C htmlFor={'dni'} text={'Usuario'} />
                <InputTxt-C id={'dni'} placeholder={'Ingrese usuario'} register={register} type={'text'} validaciones={{ require: 'El usuario es obligatorio' }} /> */}

                <Text>hello</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
                    placeholder="Ingrese usuario"
                />
            </View>

            {/* <View style={styles.groupContainer}>
                <Label-C htmlFor={'contraseña'} text={'Contraseña'} />
                <InputTxt-C id={'contraseña'} placeholder={'Ingrese contraseña'} register={register} type={'password'} validaciones={{ require: 'La contraseña es obligatoria' }} />
            </View> */}

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    groupContainer: {
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
