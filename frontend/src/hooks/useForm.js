import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm, formValidations) => {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  useEffect(() => {
    if (!!formValidations) {
      createValidators();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const createValidators = () => {
    if (!formValidations) {
      return;
    }
    const formCheckValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      const formVal = formState[formField];
      formCheckValues[`${formField}`] = !fn(formVal) ? errorMessage : "";
    }
    setFormErrors({ ...formCheckValues });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const validForm = useMemo(() => {
    if (
      Array.from(Object.values(formErrors)).some((val) => !!val) ||
      JSON.stringify(initialForm) === JSON.stringify(formState)
    ) {
      return false;
    }
    return true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    errors: formErrors,
    validForm,
    setFormErrors,
  };
};
