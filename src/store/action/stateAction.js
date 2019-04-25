export function changeEmail(email) {
	return {
		type: 'CHANGE_EMAIL',
		payload: email
	}
}

export function newPassword(pass) {
	return {
		type: 'NEW_PASSWORD',
		payload: pass
	}
}

export function changeEmailLabel(data) {
	return {
		type: 'LABEL_EMAIL',
		payload: data
	}
}

export function labelEmailError(data) {
	return {
		type: 'LABEL_EMAIL_ERROR',
		payload: data
	}
}

export function labelEmailNoError(data) {
	return {
		type: 'LABEL_EMAIL_NO_ERROR',
		payload: data
	}
}

export function changePasswordLabel(data) {
	return {
		type: 'LABEL_PASSWORD',
		payload: data
	}
}

export function labelPassError(data) {
	return {
		type: 'LABEL_PASSWORD_ERROR',
		payload: data
	}
}

export function labelPassNoError(data) {
	return {
		type: 'LABEL_PASSWORD_NO_ERROR',
		payload: data
	}
}


export function changeConfPasswordLabel(data) {
	return {
		type: 'LABEL_CONF_PASSWORD',
		payload: data
	}
}

export function labelConfPassError(data) {
	return {
		type: 'LABEL_CONF_PASSWORD_ERROR',
		payload: data
	}
}

export function labelConfPassNoError(data) {
	return {
		type: 'LABEL_CONF_PASSWORD_NO_ERROR',
		payload: data
	}
}

export function selectGender(data) {
	return {
		type: 'SELECT_GENDER',
		payload: data
	}
}

export function genderLabel(data) {
	return {
		type: 'GENDER_LABEL',
		payload: data
	}
}

export function selectGetInfo(data) {
	return {
		type: 'SELECT_INFO',
		payload: data
	}
}

export function dateLabelError(data) {
	return {
		type: 'DATE_LABEL_ERROR',
		payload: data
	}
}

export function selectDateBirth(data) {
	return {
		type: 'SELECT_DATE_BIRTH',
		payload: data
	}
}

export function genderLabelError(data) {
	return {
		type: 'GENDER_LABEL_ERROR',
		payload: data
	}
}

export function moveToStepTwo() {
	return {type: 'STEP_TWO'}
}

export function moveToFinalStep() {
	return {type: 'STEP_FINAL'}
}

export function changeProggresBar(data) {
	return {
		type: 'PROGRESSBAR_CHANGE',
		payload: data
	}
}