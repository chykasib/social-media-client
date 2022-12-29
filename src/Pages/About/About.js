import { useState } from 'react'

function About() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [university, setUniversity] = useState('')
    const [address, setAddress] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleUniversityChange = (event) => {
        setUniversity(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = () => {
        setIsEditing(false)
        // update the user's details in the database
    }

    return (
        <div className="relative pt-10 mt-10 pb-8 px-8 mx-auto max-w-lg shadow-xl">
            {!isEditing && (
                <button
                    className="text-sm font-bold py-1 px-2 rounded-full bg-blue-500 text-white"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
            )}
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <form>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border p-2 w-full"
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        disabled={!isEditing}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border p-2 w-full"
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={!isEditing}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="university">
                        University
                    </label>
                    <input
                        className="border p-2 w-full"
                        id="university"
                        type="text"
                        value={university}
                        onChange={handleUniversityChange}
                        disabled={!isEditing}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="border p-2 w-full"
                        id="address"
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        disabled={!isEditing}
                    />
                </div>
                {isEditing && (
                    <button
                        className="text-sm font-bold py-1 px-2 rounded-full bg-green-500 text-white"
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                )}
            </form>
        </div>
    )
}


export default About;