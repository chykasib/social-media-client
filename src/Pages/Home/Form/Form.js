import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AuthContext } from '../../../Context/AuthProvider';

function Form() {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const photo = form.photo.value;
        setError(null);

        // Prepare form data for submission
        const formData = {
            text: text,
            image: photo
        }
        console.log(formData);
        if (!user?.email) {
            navigate('/signup')
        }
        try {
            fetch(`https://social-media-server-pearl.vercel.app/PostData`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast('successfully post added');
                        form.reset('');
                        console.log(data)
                    }
                })
        } catch (error) {
            setError(error.message);

        }
    }

    return (
        <div className="mb-20">
            <h1 className='text-5xl font-bold text-primary text-center mb-20'>Posts Area</h1>
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
                        className="w-full rounded-md p-5 shadow-sm focus:outline-none focus:shadow-outline-blue"
                        id="text"
                        name='text'
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
                    <input type="photo" name='photo' placeholder='image url' className="input input-bordered " />
                    {error && <div className="text-red-500">{error}</div>}
                </div>
                <div className="py-6 px-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Form;
