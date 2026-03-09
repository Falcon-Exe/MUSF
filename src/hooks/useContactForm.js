import { useState } from 'react';

export const useContactForm = (initialEndpoint) => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const form = e.target;
        const data = new FormData(form);
        const endpoint = form.action || initialEndpoint;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsFormSubmitted(true);
                form.reset();
            } else {
                const errText = "Oops! There was a problem submitting your form";
                setError(errText);
                alert(errText);
            }
        } catch (err) {
            console.error('Contact form submission error:', err);
            const errText = "Oops! There was a problem submitting your form";
            setError(errText);
            alert(errText);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetFormStatus = () => setIsFormSubmitted(false);

    return {
        isFormSubmitted,
        isSubmitting,
        error,
        handleContactSubmit,
        resetFormStatus
    };
};
