import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function Form() {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    }

    const handleSubmit = async () => {
        if (!text) {
            setError('Please enter some text');
            return;
        }
        if (!image) {
            setError('Please select an image');
            return;
        }
        setError(null);
        setSubmitting(true);

        // Prepare form data for submission
        const formData = new FormData();
        formData.append('text', text);
        formData.append('image', image);

        try {
            // Send POST request to server with form data
            const response = await fetch('/api/media', {
                method: 'POST',
                body: formData,
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            // Redirect to media page
            window.location.href = '/media';
        } catch (error) {
            setError(error.message);
            setSubmitting(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-16"
        >
            {error && (
                <CSSTransition
                    in={error}
                    timeout={200}
                    classNames="error-message"
                    unmountOnExit
                >
                    <p className="text-red-500 p-4" style={{ color: 'red' }}>{error}</p>
                </CSSTransition>
            )}
            <div className="py-4 px-6">
                <label
                    className="block font-bold text-gray-700 text-xl mb-2"
                    htmlFor="text"
                >
                    Text
                </label>
                <textarea
                    className="w-full rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue"
                    id="text"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter some text..."
                />
            </div>
            <div className="py-4 px-6">
                <label
                    className="block font-bold text-gray-700 text-xl mb-2"
                    htmlFor="image"
                >
                    Image
                </label>
                <input
                    className="w-full rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue"
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full mt-4 rounded-md shadow-md"
                    />
                )}
            </div>
            <div className="py-4 px-6">
                <button
                    type="submit"
                    className="w-full rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue"
                    disabled={submitting}
                >
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
}
export default Form;
