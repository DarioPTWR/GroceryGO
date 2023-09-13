import React, { useState } from 'react';

const validate = () => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/;
    let checkUsername = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/;
    let checkSpecialCharacter = /(?=.*[!@#$%^&*()_=+\-=\[\]{};':"\\|,.<>\/?])/;
    let valid = true;
}