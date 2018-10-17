import { AbstractControl } from "@angular/forms";

export class PasswordValidators {
    static validarContrasenaAnterior(control: AbstractControl){
        return new Promise((resolve) => {
            if(control.value !== '1234') {
                resolve({ contrasenaInvalida: true});
            } else {
                resolve(null);
            }
        })
    }

    static validarContrasenas(control: AbstractControl) {
        let nueva = control.get('contrasenaNueva');
        let confirmarNueva = control.get('confirmarContrasena');

        if(nueva.value !== confirmarNueva.value) {
            return { contrasenasNoCoinciden: true }; 
        } else {
            return null;
        }
    }
}